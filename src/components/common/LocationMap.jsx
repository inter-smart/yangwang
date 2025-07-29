"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import parse from "html-react-parser";

// Dynamically import react-leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Leaflet CSS and icon configuration
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useMap } from "react-leaflet";
import Image from "next/image";

// Create custom icon
const mapPinIcon = L.icon({
  iconUrl: "/images/map-pin.png", // Ensure this path is correct
  iconSize: [41, 41],
  iconAnchor: [13, 36],
});

// Custom popup content component
const CustomPopup = ({ branch }) => {
  return (
    <div className="popup-content w-64 group">
      <div className="w-full aspect-[255/110] overflow-hidden relative mb-[10px]">
        {branch?.image && (
          <Image
            src={branch?.image}
            alt="faq"
            fill
            sizes="(max-width: 250px)"
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </div>
      <h3 className="font-bold 3xl:text-[20px] 2xl:text-[18px] text-[16px] text-white mb-[20px] pb-[15px] relative after:content-[''] after:absolute after:bottom-0 after:left-[-1px] after:max-w-[350px] after:w-full after:h-[5px] after:bg-[#5949A7]">
        {" "}
        {branch?.title}
      </h3>
      <Text size="text2" as="div" className="max-w-full text-white mb-2">
        {parse(branch?.address)}
      </Text>
      <Text size="text2" as="p" className="max-w-full text-white mb-2">
        Email: {branch?.email}
      </Text>
      <Text size="text2" as="p" className="max-w-full text-white mb-2">
        Phone: {branch?.phone}
      </Text>
    </div>
  );
};

// Map control component to update view when selected branch changes
function MapController({ selectedBranch, data }) {
  const map = useMap();
  const markerRefs = useRef({});
  //console.log("selectedBranch  ===>", selectedBranch);

  useEffect(() => {
    // Pan to the selected branch LocationMap
    map.setView([selectedBranch?.latitude, selectedBranch?.longitude], 13);

    // Open the popup for the selected branch
    if (markerRefs.current[selectedBranch?.id]) {
      markerRefs.current[selectedBranch?.id].openPopup();
    }
  }, [selectedBranch, map, data]);
  // Add custom popup styles to document head
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
        .leaflet-popup-content-wrapper {
            border-radius: 0px;
            padding: 0;
            overflow: hidden;
            background-color: #000000;
        }
        .leaflet-popup-content {
            margin: 0;
            padding: 20px 25px;
            width: auto !important;
        }
        .leaflet-popup-tip {
            background-color: #000000;
        }
        .popup-content {
            min-width: 300px;
        }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <>
      {data?.map((branch) => (
        <Marker
          key={branch.title}
          position={[branch.latitude, branch.longitude]}
          icon={mapPinIcon}
          ref={(ref) => {
            if (ref) {
              markerRefs.current[branch.id] = ref;
            }
          }}
        >
          <Popup closeButton={false}>
            <CustomPopup branch={branch} />
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export default function LocationMap({ data }) {
  const [selectedBranch, setSelectedBranch] = useState(data[0]);
  const [mapCenter] = useState([9.9312, 76.2673]);

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
  };

  useEffect(() => {
    setSelectedBranch(data[0]);
  }, [data]);

  return (
    <div className="flex flex-wrap w-full relative z-1 overflow-hidden">
      <div className="w-full md:w-[300px] xl:w-[350px] 2xl:w-[500px] 3xl:w-[585px] md:pr-[25px] 2xl:pr-[40px] max-md:mb-[20px] text-white">
        <div className="realtive overflow-y-auto w-full max-h-[468px] md:max-h-[500px] lg:max-h-[500px] xl:max-h-[500px] 2xl:max-h-[640px] 3xl:max-h-[668px] text-left [&::-webkit-scrollbar]:[width:8px] [&::-webkit-scrollbar-thumb]:bg-base1 [&::-webkit-scrollbar-track]:bg-base1/20">
          {data.map((branch, index) => (
            <div
              key={index}
              className={`3xl:px-[35px] 2xl:px-[30px] lg:px-[20px] px-[15px] 3xl:py-[30px] 2xl:py-[25px] lg:py-[20px] py-[15px] relative cursor-pointer group ${
                selectedBranch.id === branch.id ? "bg-[#5949A7] active" : "hover:bg-[#5949a7bd]"
              }`}
              onClick={() => handleBranchClick(branch)}
            >
              <div
                className={`w-fit absolute 3xl:top-[30px] 2xl:top-[20px] top-[10px] 3xl:right-[35px] 2xl:right-[25px] right-[10px] flex items-center justify-end ml-auto mb-[30px] transition-opacity duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible ${
                  selectedBranch.id === branch.id ? "opacity-100 visible" : ""
                }`}
              >
                <div className="px-[5px]">
                  <a
                    href={`tel:${branch.phone?.replace(/[^+\d]/g, "")}`}
                    target="_blank"
                    className="3xl:w-[30px] w-[25px] aspect-square block transition-transform hover:scale-105"
                  >
                    <Image src="/images/icon-phone-1.svg" alt="phone" width={30} height={30} className="block" />
                  </a>
                </div>
                <div className="px-[5px]">
                  <a
                    href={`mailto:${branch.email}`}
                    target="_blank"
                    className="3xl:w-[30px] w-[25px] aspect-square block transition-transform hover:scale-105"
                  >
                    <Image src="/images/icon-mail-1.svg" alt="mail" width={30} height={30} className="block" />
                  </a>
                </div>
              </div>

              <div className="w-full max-w-[380px] flex items-start">
                <div className="w-[25px] xl:w-[30px] xl:h-[30px] h-[25px] flex">
                  {selectedBranch.id === branch?.id ? (
                    <Image src="/images/icon-showroom-2.svg" alt="showroom2" width={20} height={26} className="block" />
                  ) : (
                    <Image src="/images/icon-showroom-1.svg" alt="showroom1" width={20} height={26} className="block" />
                  )}
                </div>
                <div className="xl:w-[calc(100% - 30px)] w-[calc(100% - 25px)] px-[15px]">
                  <Heading size="heading6" as="h6" className="capitalize text-white mb-[15px]">
                    {branch?.title}
                  </Heading>
                  <Text size="text2" as="div" className="max-w-full text-white mb-2">
                    {parse(branch?.address)}
                  </Text>
                  <Text size="text2" as="p" className="max-w-full text-white mb-2">
                    Phone: <span>{branch?.phone}</span>
                  </Text>
                  <Text size="text2" as="p" className="max-w-full text-white mb-2">
                    Email: <span>{branch?.email}</span>
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[calc(100%-300px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-500px)] 3xl:w-[calc(100%-585px)] max-md:h-[420px] relative z-0">
        <MapContainer
          center={mapCenter}
          zoom={12}
          className="h-full w-full z-1"
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <MapController selectedBranch={selectedBranch} data={data} />
        </MapContainer>
      </div>
    </div>
  );
}
