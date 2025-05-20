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
// import required modules

export default function HeroSection() {
  return (
    <section className="w-full h-auto block">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, A11y]}
      >
        <SwiperSlide className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] flex items-center pt-[70px] lg:pt-[80px] xl:pt-[90px] 2xl:pt-[100px] 3xl:pt-[120px] relative z-0">
          <Suspense fallback={<p>Loading video...</p>}>
            <video
              autoPlay
              preload="auto"
              width={1920}
              height={1080}
              muted
              loop
              className="w-full h-full absolute -z-1 inset-0 object-cover"
              aria-label="Video player"
            >
              <source src="/videos/hero-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Suspense>
          <div className="container">
            <div className="w-full lg:max-w-[540px] 2xl:max-w-[620px] 3xl:max-w-[690px]">
              <Heading
                size="heading1"
                as="h1"
                className="uppercase text-white mb-[15px] 2xl:mb-[20px]"
              >
                U9
              </Heading>
              <Text
                as="p"
                className="text-white font-medium w-full max-w-[80%] mb-[20px] xl:mb-[40px] 3xl:mb-[60px]"
              >
                Pure Electric Performance Supercar
              </Text>
              <LinkButton
                href="/"
                className="min-w-[100px] sm:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[204px]"
              >
                Explore Models
              </LinkButton>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
