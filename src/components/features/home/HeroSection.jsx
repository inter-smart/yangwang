"use client";
import { Text } from "../../layout/Text";
import { Heading } from "../../layout/Heading";
import { Suspense, useEffect, useRef, useState } from "react";

import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LinkButton } from "@/components/layout/Button";
import { Img } from "@/components/layout/Img";
import Image from "next/image";

export default function HeroSection({ data, locale }) {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current && swiperInstance.params) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const nextSlideThumb = data[(activeIndex + 1) % data?.length]?.media?.thumbnail;
  const nextSlideTitle = data[(activeIndex + 1) % data?.length]?.title;

  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block relative z-0">
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiperInstance(swiper);
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        dir={locale === "en" ? "ltr" : "rtl"}
        key={locale}
        pagination={{ clickable: true }}
        rewind={true}
        modules={[Navigation, Pagination, A11y]}
        className="h-full [--swiper-pagination-bullet-width:25px] xl:[--swiper-pagination-bullet-width:30px] 3xl:[--swiper-pagination-bullet-width:43px] [--swiper-pagination-bullet-height:3px] [--swiper-pagination-color:#fff] [--swiper-pagination-bullet-border-radius:0] [--swiper-pagination-bullet-inactive-color:#d9d9d9] [--swiper-pagination-bullet-inactive-opacity:40%] [--swiper-pagination-bottom:15px] sm:[--swiper-pagination-bottom:30px] xl:[--swiper-pagination-bottom:50px] 3xl:[--swiper-pagination-bottom:80px] overflow-hidden"
      >
        <Suspense fallback={<div>Loading feed...</div>}>
          {data?.map((item, index) => (
            <SwiperSlide
              key={"slide" + index}
              className="!flex items-end py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[100px] 3xl:py-[120px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/20 before:pointer-events-none"
            >
              {item.media.type === "image" ? (
                <Image
                  src={item.media?.web_banner?.url}
                  alt={item.media?.web_banner?.alt_text}
                  width={1920}
                  height={1080}
                  className="w-full h-full absolute -z-2 inset-0 object-cover"
                  aria-label="Image"
                  priority
                />
              ) : (
                <video
                  autoPlay
                  preload="auto"
                  width={1920}
                  height={1080}
                  muted
                  loop
                  className="w-full h-full absolute -z-2 inset-0 object-cover"
                  aria-label="Video player"
                  poster={item.media.url}
                  priority="true"
                >
                  <source src={item.media.web_banner.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className="container">
                <div className="w-full">
                  <Heading size="heading1" as="h1" className="uppercase text-white mb-[4px] xl:mb-[6px] 3xl:mb-[10px]">
                    {item.title}
                  </Heading>
                  <Text
                    size="text1"
                    as="p"
                    className="capitalize leading-tight text-white mb-[15px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]"
                  >
                    {item.description}
                  </Text>
                  <LinkButton
                    href={item.button.link}
                    aria-label="model"
                    className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px]"
                  >
                    {item.button.text}
                  </LinkButton>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Suspense>
      </Swiper>
      <div className="absolute z-1 bottom-[40px] lg:bottom-[60px] xl:bottom-[80px] 2xl:bottom-[100px] 3xl:bottom-[120px] ltr:right-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] ltr:3xs:right-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] ltr:2xs:right-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] ltr:xs:right-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:right-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:right-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:right-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:right-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:right-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:right-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:left-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] rtl:3xs:left-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] rtl:2xs:left-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] rtl:xs:left-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] rtl:sm:left-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:left-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:left-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:left-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:left-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:left-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]">
        <div
          onClick={handleNext}
          className="group bg-white/10 rounded-full backdrop-blur-3xl p-[4px] xl:p-[6px] 3xl:p-[10px] overflow-hidden"
        >
          <div className="w-[50px] sm:w-[80px] xl:w-[100px] 2xl:w-[110px] 3xl:w-[155px] aspect-square bg-white/10 backdrop-blur-3xl rounded-full relative z-0">
            <div className="text-[24px] lg:text-[32px] xl:text-[53px] 2xl:text-[66px] 3xl:text-[80px] font-medium leading-none text-center uppercase bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent absolute z-0 inset-0 top-[15%] lg:top-[10%]">
              {nextSlideTitle}
            </div>
            {nextSlideThumb && (
              // <Img
              //   src={nextSlideThumb}
              //   alt="hero-thumb-1"
              //   width={120}
              //   height={80}
              //   className={
              //     "w-[50px] sm:w-[70px] xl:w-[90px] 3xl:w-[110px] absolute z-1 bottom-[10%] left-0 right-0 mx-auto transition-transform duration-300 group-hover:scale-110"
              //   }
              //   aria-label="Image"
              // />

              <Image
                src={nextSlideThumb}
                alt="hero-thumb-1"
                width={120}
                height={80}
                className={
                  "w-[50px] sm:w-[70px] xl:w-[90px] 3xl:w-[110px] absolute z-1 bottom-[10%] left-0 right-0 mx-auto transition-transform duration-300 group-hover:scale-110"
                }
                aria-label="Image"
              />
            )}
          </div>
        </div>
        <div
          className="w-full max-w-[40px] xl:max-w-[60px] 3xl:max-w-[70px] flex justify-between mx-auto mt-[4px] xl:mt-[6px] 3xl:mt-[10px]"
          dir="ltr"
        >
          <button
            ref={prevRef}
            type="button"
            className="w-[10px] xl:w-[12px] 3xl:w-[16px] cursor-pointer transition-transform duration-300 scale-110"
          >
            <Img src="icon-arrow-left.svg" alt="icon-arrow-left" width={16} height={16} />
            <span className="sr-only">left</span>
          </button>
          <button
            type="button"
            ref={nextRef}
            className="w-[10px] xl:w-[12px] 3xl:w-[16px] cursor-pointer transition-transform duration-300 scale-110"
          >
            <Img src="icon-arrow-right.svg" alt="icon-arrow-right" width={16} height={16} />
            <span className="sr-only">next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
