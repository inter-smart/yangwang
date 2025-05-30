"use client";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const slides = [
  {
    src: "about-banner-1.jpg",
    alt: "about-banner-1",
  },
  {
    src: "about-banner-2.jpg",
    alt: "about-banner-2",
  },
  {
    src: "about-banner-3.jpg",
    alt: "about-banner-3",
  },
];
export default function AboutSection({ data }) {
    console.log("data ===>", data);
    
  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block relative z-0">
      <Swiper spaceBetween={0} slidesPerView={3} className="innovationSlider h-full">
        {data?.images?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full block">
              <Image src={slide.url} alt={slide.alt} width={640} height={920} className="object-cover w-full h-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <div className="absolute z-1 inset-0 flex items-center justify-center">
          <Heading size="heading3" as="h3" className="text-white">
            {data?.title}
          </Heading>
        </div>
      </div>
    </section>
  );
}
