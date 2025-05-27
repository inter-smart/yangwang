"use client";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
import { Suspense } from "react";

import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LinkButton } from "@/components/layout/Button";

const slide = [
  {
    background: "/videos/hero-1.mp4",
    title: "u8",
    description: "Pure Electric Performance Supercar",
    href: "/",
    button_title: "Explore Models",
  },
  {
    background: "/videos/hero-1.mp4",
    title: "u9",
    description: "Pure Electric Performance Supercar",
    href: "/",
    button_title: "Explore Models",
  },
];

export default function HeroSection() {
  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, A11y]}
        className="h-full [--swiper-pagination-bullet-width:25px] xl:[--swiper-pagination-bullet-width:30px] 3xl:[--swiper-pagination-bullet-width:43px] [--swiper-pagination-bullet-height:3px] [--swiper-pagination-color:#fff] [--swiper-pagination-bullet-border-radius:0] [--swiper-pagination-bullet-inactive-color:#d9d9d9] [--swiper-pagination-bullet-inactive-opacity:1] [--swiper-pagination-bottom:30px] xl:[--swiper-pagination-bottom:50px] 3xl:[--swiper-pagination-bottom:80px]"
      >
        <Suspense fallback={<div>Loading feed...</div>}>
          {slide?.map((item, index) => (
            <SwiperSlide
              key={"slide" + index}
              className="!flex items-end py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[100px] 3xl:py-[120px]"
            >
              <video
                // autoPlay 
                preload="auto"
                width={1920} 
                height={1080}
                muted
                loop
                className="w-full h-full absolute -z-1 inset-0 object-cover"
                aria-label="Video player"
              >
                <source src={item.background} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="container">
                <div className="w-full">
                  <Heading
                    size="heading1"
                    as="h1"
                    className="uppercase text-white mb-[4px] xl:mb-[6px] 3xl:mb-[10px]"
                  >
                    {item.title}
                  </Heading>
                  <Text
                    size="text1"
                    as="p"
                    className="capitalize leading-tight text-white mb-[15px] xl:mb-[25px] 3xl:mb-[35px]"
                  >
                    {item.description}
                  </Text>
                  <LinkButton
                    href={item.href}
                    aria-label="model"
                    className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 3xl:min-w-[146px]"
                  >
                    {item.button_title}
                  </LinkButton>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Suspense>
      </Swiper>
    </section>
  );
}
