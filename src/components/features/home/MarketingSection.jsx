"use client";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import Link from "next/link";

import { A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Suspense } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const slide = [
  {
    type: "image",
    image: "insta-img-1.jpg",
    alt: "u8",
  },
  {
    type: "video",
    image: "/videos/hero-1.mp4",
    alt: "u9",
  },
  {
    type: "image",
    image: "insta-img-3.jpg",
    alt: "u8",
  },
  {
    type: "video",
    image: "/videos/hero-1.mp4",
    alt: "u9",
  },
  {
    type: "image",
    image: "insta-img-1.jpg",
    alt: "u8",
  },
  {
    type: "video",
    image: "/videos/hero-1.mp4",
    alt: "u9",
  },
];

export default function MarketingSection() {
  return (
    <section className="w-full h-auto block py-[30px_30px] lg:py-[60px_50px] xl:py-[80px_100px] 3xl:py-[120px_140px]">
      <div className="container">
        <div className="flex justify-between mb-[15px] xl:mb-[20px] 3xl:mb-[30px]">
          <Heading
            size="heading3"
            as="h3"
            className="capitalize text-black mb-[5px]"
          >
            Feel the Drive
          </Heading>
          <Link
            href="#"
            aria-label="Instagram"
            className="flex items-center gap-[4px] xl:gap-[6px] 3xl:gap-[10px] min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 3xl:min-w-[146px]"
          >
            <Img src="icon-btn-insta.svg" alt="insta" width={12} height={12} />
            View on Instagram
          </Link>
        </div>
        <Swiper
          modules={[A11y]}
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 6,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <Suspense fallback={<div>Loading feed...</div>}>
            {slide?.map((item, index) => (
              <SwiperSlide key={"slide" + index}>
                <Card className="w-full h-auto aspect-[420/580] block rounded-none border-[#ccc] overflow-hidden relative z-0">
                  <CardHeader className="sr-only">
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {item.type === "image" ? (
                      <Img
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="420px"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <video
                        preload="meta"
                        width={420}
                        height={590}
                        muted
                        loop
                        className="w-full h-full absolute -z-1 inset-0 object-cover"
                        aria-label="Video player"
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => {
                          e.target.pause();
                          // e.target.currentTime = 0;
                        }}
                      >
                        <source src={item.image} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Suspense>
        </Swiper>
      </div>
    </section>
  );
}
