"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

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

// const data = [
//   {
//     id: 1,
//     name: "Muscat Showroom",
//     address: "PO Box 3168, Ruwi,Postal Code 112, Sultanate of Oman.",
//     phone: "9072588911",
//     email: "info@Yangwang.com",
//     contactNumber: "+968 24578000",
//     image: "locationImg.jpg",
//     coordinates: [9.9312, 76.2673],
//   },
//   {
//     id: 2,
//     name: "Salala Showroom",
//     address: "PO Box 3168, Ruwi,Postal Code 112, Sultanate of Oman.",
//     phone: "9072588911",
//     email: "info@Yangwang.com ",
//     contactNumber: "+968 24578000",
//     image: "locationImg.jpg",
//     coordinates: [9.9412, 76.2773],
//   },
//   {
//     id: 3,
//     name: "Muscat Showroom",
//     address: "PO Box 3168, Ruwi,Postal Code 112, Sultanate of Oman.",
//     phone: "9072588911",
//     email: "info@Yangwang.com",
//     contactNumber: "+968 24578000",
//     image: "locationImg.jpg",
//     coordinates: [9.9312, 76.2673],
//   },
// ];

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
      <Text size="text2" as="p" className="max-w-full text-white mb-2">
        {branch?.address}
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
  console.log("selectedBranch  ===>", selectedBranch);

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
    <div className="flex flex-wrap w-full h-[510px] 2xl:h-[670px] relative z-[1] overflow-hidden">
      <div
        className="w-full md:w-[300px] xl:w-[350px] 2xl:w-[500px] 3xl:w-[585px] md:pr-[25px] 2xl:pr-[40px] max-md:max-h-[250px] 
            overflow-y-auto max-md:mb-[20px] text-white"
      >
        <div className="realtive overflow-y-auto md:max-h-full text-left">
          {data.map((branch, index) => (
            <div
              key={index}
              className={`3xl:px-[35px] 2xl:px-[30px] lg:px-[20px] px-[15px] 3xl:py-[30px] 2xl:py-[25px] lg:py-[20px] py-[15px] 
                                relative cursor-pointer group  ${
                                  selectedBranch.id === branch.id ? "bg-[#5949A7] active" : "hover:bg-[#5949a7bd]"
                                }`}
              onClick={() => handleBranchClick(branch)}
            >
              <div
                className={`w-fit absolute  3xl:top-[30px] 2xl:top-[20px] top-[10px]  3xl:right-[35px] 2xl:right-[25px]  right-[10px] 
                                    flex items-center justify-end ml-auto mb-[30px] transition-opacity duration-300 
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible ${
                                      selectedBranch.id === branch.id ? "opacity-100 visible" : ""
                                    }`}
              >
                <div className="px-[5px]">
                  <a
                    href={`tel:${branch.phone}`}
                    target="_blank"
                    className="3xl:w-[33px] w-[25px] 3xl:h-[33px] h-[25px] rounded-full bg-[#6958B9] flex items-center justify-center"
                  >
                    <div className="3xl:w-[15px] w-[10px] 3xl:h-[15px] h-[10px] flex">
                      <svg viewBox="0 0 15 15">
                        <g clipPath="url(#clip0_519_2721)">
                          <path
                            d="M13.7964 9.84578C12.878 9.84578 11.9763 9.70215 11.1218 9.41977C10.7031 9.27695 10.1884 9.40797 9.93285 9.67043L8.24625 10.9436C6.29027 9.89953 5.08543 8.69508 4.05559 6.75379L5.29133 5.11113C5.61238 4.79051 5.72754 4.32215 5.58957 3.8827C5.30598 3.02371 5.16191 2.12242 5.16191 1.20367C5.16195 0.539961 4.62199 0 3.95832 0H1.20363C0.539961 0 0 0.539961 0 1.20363C0 8.81105 6.18898 15 13.7964 15C14.4601 15 15 14.46 15 13.7964V11.0494C15 10.3857 14.46 9.84578 13.7964 9.84578Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="px-[5px]">
                  <a
                    href={`mailto:${branch.email}`}
                    target="_blank"
                    className="3xl:w-[33px] w-[25px] 3xl:h-[33px] h-[25px] rounded-full bg-[#6958B9] flex items-center justify-center"
                  >
                    <div className="3xl:w-[15px] w-[10px] 3xl:h-[15px] h-[10px] flex">
                      <svg viewBox="0 0 18 18">
                        <path
                          d="M11.6632 9.74707L10.1556 11.2597C9.5443 11.8732 8.46866 11.8864 7.84411 11.2597L6.3365 9.74707L0.921875 15.1793C1.12343 15.2725 1.34565 15.3281 1.5819 15.3281H16.4178C16.6541 15.3281 16.8762 15.2725 17.0777 15.1793L11.6632 9.74707Z"
                          fill="white"
                        />
                        <path
                          d="M16.4178 2.67188H1.58183C1.34558 2.67188 1.12336 2.72749 0.921875 2.82069L6.70779 8.6258C6.70817 8.62618 6.70863 8.62625 6.70902 8.62664C6.7094 8.62703 6.70947 8.62755 6.70947 8.62755L8.59079 10.5151C8.79062 10.7149 9.20905 10.7149 9.40887 10.5151L11.2898 8.62787C11.2898 8.62787 11.2903 8.62703 11.2906 8.62664C11.2906 8.62664 11.2915 8.62618 11.2919 8.6258L17.0776 2.82066C16.8762 2.72742 16.654 2.67188 16.4178 2.67188Z"
                          fill="white"
                        />
                        <path
                          d="M0.168258 3.55835C0.0639844 3.76922 0 4.00329 0 4.25402V13.7462C0 13.9969 0.0639141 14.231 0.168223 14.4419L5.59223 9.00029L0.168258 3.55835Z"
                          fill="white"
                        />
                        <path
                          d="M17.8302 3.55811L12.4062 9.00012L17.8302 14.4418C17.9345 14.2309 17.9984 13.9968 17.9984 13.746V4.25385C17.9984 4.00304 17.9345 3.76897 17.8302 3.55811Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-full max-w-[380px] flex items-start">
                <div className="w-[25px] xl:w-[30px] xl:h-[30px] h-[25px] flex">
                  <svg
                    viewBox="0 0 18 25"
                    className={`transition-colors duration-300 ${
                      selectedBranch.id === branch.id ? "fill-[#1D0A44]" : "fill-[#5949A7] group-hover:fill-[#1D0A44]"
                    }`}
                  >
                    <path d="M8.90664 0.0385742C13.3955 0.0385742 17.0348 3.79914 17.0348 8.43885C17.0348 11.0575 13.61 16.5273 11.0266 20.7317C10.1793 22.1109 9.42227 23.354 8.90664 24.3155C8.40801 23.3867 7.65449 22.14 6.8043 20.7414C4.23438 16.5158 0.777344 10.8983 0.777344 8.43885C0.777344 3.79914 4.4166 0.0385742 8.90664 0.0385742ZM12.5383 8.12219C12.5383 6.05391 10.907 4.36768 8.90664 4.36768C6.90508 4.36768 5.27383 6.05391 5.27383 8.12219C5.27383 10.1893 6.90508 11.8749 8.90664 11.8749C10.907 11.8749 12.5383 10.1893 12.5383 8.12219Z" />
                  </svg>
                </div>
                <div className="xl:w-[calc(100% - 30px)] w-[calc(100% - 25px)] px-[15px]">
                  <Heading size="heading6" as="h6" className="capitalize text-white mb-[15px]">
                    {branch.title}
                  </Heading>
                  <Text size="text2" as="p" className="max-w-full text-white mb-2">
                    <span>{branch.address}</span>
                  </Text>
                  <Text size="text2" as="p" className="max-w-full text-white mb-2">
                    Phone: <span>{branch.phone}</span>
                  </Text>
                  <Text size="text2" as="p" className="max-w-full text-white mb-2">
                    Email: <span>{branch.email}</span>
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[calc(100%-300px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-500px)] 3xl:w-[calc(100%-585px)] max-md:h-[850px]   relative">
        <MapContainer center={mapCenter} zoom={12} className="h-full w-full z-10" style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
          <MapController selectedBranch={selectedBranch} data={data} />
        </MapContainer>
      </div>
    </div>
  );
}

// 'use client';
// import { Heading } from "@/components/layout/Heading";
// import { Text } from "@/components/layout/Text";
// import { Img } from "@/components/layout/Img";
// import React, { useState, useRef, useEffect } from 'react';
// import dynamic from 'next/dynamic';

// // Dynamically import react-leaflet components
// const MapContainer = dynamic(
//     () => import('react-leaflet').then((mod) => mod.MapContainer),
//     { ssr: false }
// );
// const TileLayer = dynamic(
//     () => import('react-leaflet').then((mod) => mod.TileLayer),
//     { ssr: false }
// );
// const Marker = dynamic(
//     () => import('react-leaflet').then((mod) => mod.Marker),
//     { ssr: false }
// );
// const Popup = dynamic(
//     () => import('react-leaflet').then((mod) => mod.Popup),
//     { ssr: false }
// );

// // Leaflet CSS and icon configuration
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { useMap } from 'react-leaflet';

// // Create custom icon
// const mapPinIcon = L.icon({
//     iconUrl: '/images/map-pin.png', // Ensure this path is correct
//     iconSize: [41, 41],
//     iconAnchor: [13, 36]
// });

// const branchLocations = [
//     {
//         id: 1,
//         name: "Muscat Showroom",
//         address: "PO Box 3168, Ruwi,Postal Code 112, Sultanate of Oman.",
//         phone: "9072588911",
//         email: "info@Yangwang.com",
//         contactNumber: "+968 24578000",
//         image: "locationImg.jpg",
//         coordinates: [9.9312, 76.2673]
//     },
//     {
//         id: 2,
//         name: "Salala Showroom",
//         address: "PO Box 3168, Ruwi,Postal Code 112, Sultanate of Oman.",
//         phone: "9072588911",
//         email: "info@Yangwang.com ",
//         contactNumber: "+968 24578000",
//         image: "locationImg.jpg",
//         coordinates: [9.9412, 76.2773]
//     },
//     {
//         id: 3,
//         name: "Muscat Showroom",
//         address: "PO Box 3168, Ruwi,Postal Code 112, Sultanate of Oman.",
//         phone: "9072588911",
//         email: "info@Yangwang.com",
//         contactNumber: "+968 24578000",
//         image: "locationImg.jpg",
//         coordinates: [9.9312, 76.2673]
//     },
// ];

// // Custom popup content component
// const CustomPopup = ({ branch }) => {
//     return (
//         <div className="popup-content w-64 group">
//             <div className="w-full aspect-[255/110] overflow-hidden relative mb-[10px]">
//                 <Img
//                     src={branch.image}
//                     alt="faq"
//                     fill
//                     sizes="(max-width: 250px)"
//                     className="object-contain transition-transform duration-300 group-hover:scale-110"
//                 />
//             </div>
//             <h3 className="font-bold 3xl:text-[20px] 2xl:text-[18px] text-[16px] text-white mb-[20px] pb-[15px] relative after:content-[''] after:absolute after:bottom-0 after:left-[-1px] after:max-w-[350px] after:w-full after:h-[5px] after:bg-[#5949A7]">  {branch.name}</h3>
//             <Text size="text2" as="p" className="max-w-full text-white mb-2">
//                 {branch.address}
//             </Text>
//             <Text size="text2" as="p" className="max-w-full text-white mb-2">
//                 Email: {branch.email}
//             </Text>
//             <Text size="text2" as="p" className="max-w-full text-white mb-2">
//                 Phone: {branch.phone}
//             </Text>

//         </div>
//     );
// };

// // Map control component to update view when selected branch changes
// function MapController({ selectedBranch }) {
//     const map = useMap();
//     const markerRefs = useRef({});

//     useEffect(() => {
//         // Pan to the selected branch LocationMap
//         map.setView(selectedBranch.coordinates, 13);

//         // Open the popup for the selected branch
//         if (markerRefs.current[selectedBranch.id]) {
//             markerRefs.current[selectedBranch.id].openPopup();
//         }
//     }, [selectedBranch, map]);
//     // Add custom popup styles to document head
//     useEffect(() => {
//         const style = document.createElement('style');
//         style.innerHTML = `
//         .leaflet-popup-content-wrapper {
//             border-radius: 0px;
//             padding: 0;
//             overflow: hidden;
//             background-color: #000000;
//         }
//         .leaflet-popup-content {
//             margin: 0;
//             padding: 20px 25px;
//             width: auto !important;
//         }
//         .leaflet-popup-tip {
//             background-color: #000000;
//         }
//         .popup-content {
//             min-width: 300px;
//         }
//     `;
//         document.head.appendChild(style);

//         return () => {
//             document.head.removeChild(style);
//         };
//     }, []);
//     return (
//         <>
//             {branchLocations.map((branch) => (
//                 <Marker
//                     key={branch.id}
//                     position={branch.coordinates}
//                     icon={mapPinIcon}
//                     ref={(ref) => {
//                         if (ref) {
//                             markerRefs.current[branch.id] = ref;
//                         }
//                     }}
//                 >
//                     <Popup closeButton={false}>
//                         <CustomPopup branch={branch} />
//                     </Popup>
//                 </Marker>
//             ))}
//         </>
//     );
// }

// export default function LocationMap() {
//     const [selectedBranch, setSelectedBranch] = useState(branchLocations[0]);
//     const [mapCenter] = useState([9.9312, 76.2673]);

//     const handleBranchClick = (branch) => {
//         setSelectedBranch(branch);
//     };

//     return (
//         <div className="flex flex-wrap w-full h-[510px] 2xl:h-[670px] relative z-[1] overflow-hidden">
//             <div className="w-full md:w-[300px] xl:w-[350px] 2xl:w-[500px] 3xl:w-[585px] md:pr-[25px] 2xl:pr-[40px] max-md:max-h-[250px]
//             overflow-y-auto max-md:mb-[20px] text-white">
//                 <div className="realtive overflow-y-auto md:max-h-full text-left">
//                     {branchLocations.map((branch) => (
//                         <div
//                             key={branch.id}
//                             className={`3xl:px-[35px] 2xl:px-[30px] lg:px-[20px] px-[15px] 3xl:py-[30px] 2xl:py-[25px] lg:py-[20px] py-[15px]
//                                 relative cursor-pointer group  ${selectedBranch.id === branch.id
//                                     ? 'bg-[#5949A7] active'
//                                     : 'hover:bg-[#5949a7bd]'
//                                 }`}
//                             onClick={() => handleBranchClick(branch)}
//                         >
//                             <div
//                                 className={`w-fit absolute  3xl:top-[30px] 2xl:top-[20px] top-[10px]  3xl:right-[35px] 2xl:right-[25px]  right-[10px]
//                                     flex items-center justify-end ml-auto mb-[30px] transition-opacity duration-300
//                                     opacity-0 invisible group-hover:opacity-100 group-hover:visible ${selectedBranch.id === branch.id ? 'opacity-100 visible' : ''
//                                     }`}
//                             >
//                                 <div className="px-[5px]">
//                                     <a
//                                         href={`tel:${branch.phone}`}
//                                         target="_blank"
//                                         className="3xl:w-[33px] w-[25px] 3xl:h-[33px] h-[25px] rounded-full bg-[#6958B9] flex items-center justify-center"
//                                     >
//                                         <div className="3xl:w-[15px] w-[10px] 3xl:h-[15px] h-[10px] flex">
//                                             <svg viewBox="0 0 15 15"  >
//                                                 <g clipPath="url(#clip0_519_2721)">
//                                                     <path d="M13.7964 9.84578C12.878 9.84578 11.9763 9.70215 11.1218 9.41977C10.7031 9.27695 10.1884 9.40797 9.93285 9.67043L8.24625 10.9436C6.29027 9.89953 5.08543 8.69508 4.05559 6.75379L5.29133 5.11113C5.61238 4.79051 5.72754 4.32215 5.58957 3.8827C5.30598 3.02371 5.16191 2.12242 5.16191 1.20367C5.16195 0.539961 4.62199 0 3.95832 0H1.20363C0.539961 0 0 0.539961 0 1.20363C0 8.81105 6.18898 15 13.7964 15C14.4601 15 15 14.46 15 13.7964V11.0494C15 10.3857 14.46 9.84578 13.7964 9.84578Z" fill="white" />
//                                                 </g>
//                                             </svg>
//                                         </div>
//                                     </a>
//                                 </div>
//                                 <div className="px-[5px]">
//                                     <a
//                                         href={`mailto:${branch.email}`}
//                                         target="_blank"
//                                         className="3xl:w-[33px] w-[25px] 3xl:h-[33px] h-[25px] rounded-full bg-[#6958B9] flex items-center justify-center"
//                                     >
//                                         <div className="3xl:w-[15px] w-[10px] 3xl:h-[15px] h-[10px] flex">
//                                             <svg viewBox="0 0 18 18">
//                                                 <path
//                                                     d="M11.6632 9.74707L10.1556 11.2597C9.5443 11.8732 8.46866 11.8864 7.84411 11.2597L6.3365 9.74707L0.921875 15.1793C1.12343 15.2725 1.34565 15.3281 1.5819 15.3281H16.4178C16.6541 15.3281 16.8762 15.2725 17.0777 15.1793L11.6632 9.74707Z"
//                                                     fill="white"
//                                                 />
//                                                 <path
//                                                     d="M16.4178 2.67188H1.58183C1.34558 2.67188 1.12336 2.72749 0.921875 2.82069L6.70779 8.6258C6.70817 8.62618 6.70863 8.62625 6.70902 8.62664C6.7094 8.62703 6.70947 8.62755 6.70947 8.62755L8.59079 10.5151C8.79062 10.7149 9.20905 10.7149 9.40887 10.5151L11.2898 8.62787C11.2898 8.62787 11.2903 8.62703 11.2906 8.62664C11.2906 8.62664 11.2915 8.62618 11.2919 8.6258L17.0776 2.82066C16.8762 2.72742 16.654 2.67188 16.4178 2.67188Z"
//                                                     fill="white"
//                                                 />
//                                                 <path
//                                                     d="M0.168258 3.55835C0.0639844 3.76922 0 4.00329 0 4.25402V13.7462C0 13.9969 0.0639141 14.231 0.168223 14.4419L5.59223 9.00029L0.168258 3.55835Z"
//                                                     fill="white"
//                                                 />
//                                                 <path
//                                                     d="M17.8302 3.55811L12.4062 9.00012L17.8302 14.4418C17.9345 14.2309 17.9984 13.9968 17.9984 13.746V4.25385C17.9984 4.00304 17.9345 3.76897 17.8302 3.55811Z"
//                                                     fill="white"
//                                                 />
//                                             </svg>
//                                         </div>
//                                     </a>
//                                 </div>
//                             </div>

//                             <div className='w-full max-w-[380px] flex items-start'>
//                                 <div className='w-[25px] xl:w-[30px] xl:h-[30px] h-[25px] flex'>
//                                     <svg viewBox="0 0 18 25" className={`transition-colors duration-300 ${selectedBranch.id === branch.id
//                                         ? 'fill-[#1D0A44]'
//                                         : 'fill-[#5949A7] group-hover:fill-[#1D0A44]'
//                                         }`} >
//                                         <path d="M8.90664 0.0385742C13.3955 0.0385742 17.0348 3.79914 17.0348 8.43885C17.0348 11.0575 13.61 16.5273 11.0266 20.7317C10.1793 22.1109 9.42227 23.354 8.90664 24.3155C8.40801 23.3867 7.65449 22.14 6.8043 20.7414C4.23438 16.5158 0.777344 10.8983 0.777344 8.43885C0.777344 3.79914 4.4166 0.0385742 8.90664 0.0385742ZM12.5383 8.12219C12.5383 6.05391 10.907 4.36768 8.90664 4.36768C6.90508 4.36768 5.27383 6.05391 5.27383 8.12219C5.27383 10.1893 6.90508 11.8749 8.90664 11.8749C10.907 11.8749 12.5383 10.1893 12.5383 8.12219Z" />
//                                     </svg>
//                                 </div>
//                                 <div className='xl:w-[calc(100% - 30px)] w-[calc(100% - 25px)] px-[15px]'>
//                                     <Heading
//                                         size="heading6"
//                                         as="h6"
//                                         className="capitalize text-white mb-[15px]" >
//                                         {branch.name}
//                                     </Heading>
//                                     <Text size="text2" as="p" className="max-w-full text-white mb-2">
//                                         <span>{branch.address}</span>
//                                     </Text>
//                                     <Text size="text2" as="p" className="max-w-full text-white mb-2">
//                                         Phone: <span>{branch.phone}</span>
//                                     </Text>
//                                     <Text size="text2" as="p" className="max-w-full text-white mb-2">
//                                         Email: <span>{branch.email}</span>
//                                     </Text>

//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="w-full md:w-[calc(100%-300px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-500px)] 3xl:w-[calc(100%-585px)] max-md:h-[850px]   relative">

//                 <MapContainer
//                     center={mapCenter}
//                     zoom={12}
//                     className="h-full w-full z-10"
//                     style={{ height: '100%', width: '100%' }}
//                 >
//                     <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         attribution='&copy; OpenStreetMap contributors'
//                     />
//                     <MapController selectedBranch={selectedBranch} />
//                 </MapContainer>
//             </div>
//         </div>
//     );
// }
