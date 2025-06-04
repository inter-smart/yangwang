"use client";
import { Heading } from "@/components/layout/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function FutureSection({ data, locale }) {
  const { title, items } = data;

  return (
    <section className="w-full h-auto block p-[40px_0_50px] md:p-[60px_0_70px] xl:p-[90px_0_100px] 2xl:p-[100px_0_110px] 3xl:p-[135px_0_150px]">
      <div className="container">
        <Heading size="heading3" as="h3" className="text-black 3xl:mb-[85px] 2xl:mb-[70px] xl:mb-[55px] md:mb-[40px] mb-[30px]">
          {title}
        </Heading>
        <div className="w-full h-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={1.3}
            breakpoints={{
              576: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            key={locale}
            dir={locale === "en" ? "ltr" : "rtl"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="FutureSectionSlider"
          >
            {items?.map((item, index) => (
              <SwiperSlide key={"vehicleInfo" + index}>
                <div className="w-full h-full aspect-[340/540] block overflow-hidden relative z-0 before:content-[''] before:absolute before:z-1 before:bottom-0 before:left-0 before:w-full before:h-[50%] before:bg-gradient-to-b before:from-transparent before:to-black group">
                  <Image
                    fill
                    src={item?.image}
                    alt={item?.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="w-full h-full 2xl:p-[30px] xl:p-[20px] md:p-[15px] p-[10px] absolute z-1 bottom-0 flex items-end">
                    <p className="3xl:text-[18px] 2xl:text-[16px] md:text-[14px] text-[12px] font-normal leading-normal text-white">
                      {item?.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
