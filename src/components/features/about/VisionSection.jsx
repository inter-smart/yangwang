"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import parse, { domToReact } from "html-react-parser";

const options = {
  replace: (node) => {
    if (node.name === "li") {
      return (
        <li className="3xl:text-[18px] 2xl:text-[14px] text-[12px] font-normal leading-normal ltr:text-left rtl:text-right">
          {domToReact(node.children, options)}
        </li>
      );
    }
    // Optional: strip <ul> class and use your own outside
    if (node.name === "ul") {
      return (
        <ul className="text-left text-white list-disc px-5 mt-[20px] xl:mt-[30px] space-y-2">
          {domToReact(node.children, options)}
        </ul>
      );
    }
  },
};

export default function VisionSection({ locale, data }) {
  const { title, description, items, video } = data;
  console.log("items ==>", items);

  return (
    <section className="w-full h-auto block p-[40px_0_50px] md:p-[50px_0_70px] xl:p-[75px_0_100px] 3xl:p-[110px_0_150px] bg-[#262626]">
      <div className="container">
        <div className="text-center 3xl:max-w-[1070px] xl:max-w-[715px] md:max-w-[620px] mx-auto 3xl:mb-[60px] xl:mb-[40px] mb-[30px]">
          <Heading size="heading3" as="h3" className="text-white xl:mb-[25px] mb-[15px]">
            {title}
          </Heading>
          <Text
            as="p"
            className="3xl:text-[18px] 2xl:text-[14px] xl:text-[13px] md:text-[12px] text-[11px] font-normal leading-normal text-white"
          >
            {parse(description)}
          </Text>
        </div>
        <div className="w-full h-auto block aspect-[1460/675] max-md:h-[320px] relative z-0">
          <div className="w-full h-full md:px-[50px] xl:px-[120px] absolute -z-[1] inset-0 overflow-hidden">
            <video
              autoPlay
              playsInline
              preload="auto"
              width={1460}
              height={675}
              muted
              loop
              className="w-full h-full object-cover"
              aria-label="Background video"
              aria-hidden="true"
            >
              <source src={video?.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Swiper
              key={locale}
              dir={locale === "en" ? "ltr" : "rtl"}
              modules={[Autoplay, Pagination]}
              spaceBetween={120}
              slidesPerView={3}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                280: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1536: {
                  spaceBetween: 120,
                },
              }}
            >
              {items?.map((item, index) => (
                <SwiperSlide key={"lookupInfo" + index}>
                  <div className="w-full h-full block max-md:px-[15px]">
                    <Heading size="heading3" as="h3" className="text-white">
                      {item.title}
                    </Heading>
                    {/* <ul className="text-left text-white list-disc px-5 mt-[20px] xl:mt-[30px] space-y-2 [&>li]:3xl:text-[18px] [&>li]:2xl:text-[14px] [&>li]:text-[12px] [&>li]:font-normal [&>li]:leading-normal [&>li]:ltr:text-left [&>li]:rtl:text-right"> */}
                    <ul className="text-left text-white list-disc px-5 mt-[20px] xl:mt-[30px] space-y-2">
                      {/* {item?.description?.split(",")?.map((point, i) => (
                        <li
                          key={i}
                          className="3xl:text-[18px] 2xl:text-[14px] text-[12px] font-normal leading-normal ltr:text-left rtl:text-right"
                        >
                          {point}
                        </li>
                      ))} */}
                      {item?.description && parse(item?.description, options)}

                      {/* {parse(item?.description)} */}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
