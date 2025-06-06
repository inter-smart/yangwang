"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text } from "@/components/layout/Text";
import dynamic from "next/dynamic";
import Image from "next/image";
const LocationMap = dynamic(() => import("../../common/LocationMap"), {
  ssr: false, // This ensures the component only loads on the client
});

const customerSupport = [
  {
    type: null,
    title: "Customer Support",
    value: "Reach Us Directly",
    image: null,
    image_alt: null,
  },
  {
    type: "phone",
    title: "Toll Free number",
    value: "008968 24578000",
    image: "/images/icon-csupport-phone.svg",
    image_alt: "alt",
  },
  {
    type: "mail",
    title: "mail us",
    value: "support@yangwang.com",
    image: "/images/icon-csupport-phone.svg",
    image_alt: "alt",
  },
  {
    type: "whatsapp",
    title: "WhatsApp",
    value: "+968 24578000",
    image: "/images/icon-csupport-whatsapp.svg",
    image_alt: "alt",
  },
];

export default function LocationSection({
  variant,
  showRooms,
  serviceCentres,
}) {
  console.log("showRooms, serviceCentres", showRooms, serviceCentres);

  const hasVariantService = variant === "findshowroom";
  const tabs = [
    {
      key: "showroom",
      label: showRooms?.header?.find_a_showroom_title || "Find a Showroom",
      icon: showRooms?.header?.showroom_image || "/images/carIcon.svg",
      width: "w-[35px] md:w-[50px]",
      height: "h-[35px] md:h-[50px]",
      show: true,
    },
    {
      key: "service",
      label:
        serviceCentres?.header?.find_a_service_centre_title ||
        "Find a Service Centre",
      icon: serviceCentres?.header?.service_centre_image || "/images/serviceIcon.svg",
      width: "w-[20px] md:w-[30px]",
      height: "h-[20px] md:h-[30px]",
      show: hasVariantService,
    },
  ];
  return (
    <section className="w-full block bg-[#1D0A44] 3xl:py-[100px] 2xl:py-[80px] py-[40px]">
      <div className="container">
        {/* <LocationMap /> */}
        <Tabs defaultValue="showroom" className="w-full">
          <TabsList className="md:w-[calc(100%-300px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-500px)] 3xl:w-[calc(100%-580px)] flex justify-between items-center ml-auto border-b border-gray-200 relative w-full p-0 rounded-0 2xl:mb-[60px] xl:mb-[40px] mb-[30px]">
            {tabs?.map(
              (tab) =>
                tab.show && (
                  <TabsTrigger
                    key={tab.key}
                    value={tab.key}
                    className="relative text-white font-medium outline-none shadow-none text-[11px] sm-text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-left h-full pb-[20px] after:content-[''] after:absolute after:bottom-[-4px] after:left-[-1px] after:md:w-[350px] after:w-full after:h-[5px] after:bg-transparent data-[state=active]:after:bg-[#5949A7] data-[state=active]:shadow-none transition-all justify-start rounded-0 cursor-pointer"
                  >
                    <div className={`${tab.width} ${tab.height} flex relative`}>
                      <Image
                        src={tab.icon}
                        alt={tab.label}
                        fill
                        sizes="(max-width: 50px)"
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span className="px-[10px]">{tab.label}</span>
                  </TabsTrigger>
                )
            )}
          </TabsList>

          <TabsContent value="showroom" className="w-full">
            <LocationMap
              data={showRooms?.showroom || showRooms}
              key="showroom"
            />
          </TabsContent>
          <TabsContent value="service" className="w-full">
            <LocationMap
              data={serviceCentres?.service_centres || serviceCentres}
              key="service"
            />
          </TabsContent>
        </Tabs>
        {!hasVariantService && (
          <div className="w-full md:w-[calc(100%-300px)] xl:w-[calc(100%-350px)] 2xl:w-[calc(100%-500px)] 3xl:w-[calc(100%-580px)] ml-auto mt-[15px] lg:mt-[50px]">
            <div className="flex flex-wrap justify-between">
              {customerSupport.map((item, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-auto lg:max-w-[1/4] p-[8px]"
                >
                  <div className="w-full h-auto flex flex-wrap">
                    {item.image && (
                      <div className="3xl:w-[30px] w-[25px] aspect-square block transition-transform hover:scale-105">
                        {item.type === "phone" ? (
                          <Image
                            src="/images/icon-csupport-phone.svg"
                            alt="phone"
                            width={30}
                            height={30}
                            className="block"
                          />
                        ) : item.type === "mail" ? (
                          <Image
                            src="/images/icon-csupport-mail.svg"
                            alt="mail"
                            width={30}
                            height={30}
                            className="block"
                          />
                        ) : item.type === "whatsapp" ? (
                          <Image
                            src="/images/icon-csupport-whatsapp.svg"
                            alt="whatsapp"
                            width={30}
                            height={30}
                            className="block"
                          />
                        ) : null}
                      </div>
                    )}

                    <div
                      className={
                        item.image &&
                        "w-[calc(100%-25px)] 3xl:w-[calc(100%-30px)] ltr:pl-[10px] ltr:3xl:pl-[15px] rtl:pr-[10px] rtl:3xl:pr-[15px]"
                      }
                    >
                      <div className="3xl:text-[20px] 2xl:text-[17px] xl:text-[13px] lg:text-[12px] text-[12px] font-normal capitalize leading-tight text-[#5949A7] mb-[4px] xl:mb-[6px]">
                        {item.title}
                      </div>
                      {item.type === "phone" ? (
                        <a
                          href={`tel:${item.value}`}
                          className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] text-[12px] font-normal leading-none text-white transition-color block hover:text-base3"
                        >
                          {item.value}
                        </a>
                      ) : item.type === "mail" ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] text-[12px] font-normal leading-none text-white transition-color block hover:text-base3"
                        >
                          {item.value}
                        </a>
                      ) : item.type === "whatsapp" ? (
                        <a
                          href={`https://wa.me/${item.value}`}
                          className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] text-[12px] font-normal leading-none text-white transition-color block hover:text-base3"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] text-[12px] font-normal leading-none text-white">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
