"use client";

import { Heading } from "@/components/layout/Heading";
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
import Image from "next/image";

const slide = [
  {
    title: "Energy tower on pillar D, irregular wheel arch",
    media: "/images/models-u8-bodyFeatures-1.jpg",
    alt: "models-u8-bodyFeatures-1",
  },
  {
    title: "Roof - Mounted detection system",
    media: "/images/models-u8-bodyFeatures-2.jpg",
    alt: "models-u8-bodyFeatures-2",
  },
  {
    title: "Octagonal full - size spare - tire cover",
    media: "/images/models-u8-bodyFeatures-3.jpg",
    alt: "models-u8-bodyFeatures-3",
  },
  {
    title: "Energy tower on pillar D, irregular wheel arch",
    media: "/images/models-u8-bodyFeatures-1.jpg",
    alt: "models-u8-bodyFeatures-1",
  },
];

export default function BodyFeaturesSection({ locale, data }) {
  return (
    <section className="w-full h-auto block py-[30px] lg:py-[40px_50px] xl:py-[50px_70px] 2xl:py-[60px_90px] 3xl:py-[70px_100px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/70 before:pointer-events-none">
      <picture className="absolute -z-2 inset-0">
        <source media="(max-width: 768px)" srcSet={data?.mobile_banner?.url} />
        <Image
          src={data?.web_banner?.url}
          alt={data?.web_banner?.alt_text || "Body Features Background"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="-z-2 object-cover"
        />
      </picture>
      <div className="container">
        <Heading
          size="heading3"
          as="h3"
          className="text-center text-white mb-[20px] xl:mb-[40px] 3xl:mb-[50px]"
        >
          {data?.title || "Body Features"}
        </Heading>
        <Swiper
          key={locale}
          dir={locale === "en" ? "ltr" : "rtl"}
          modules={[A11y]}
          slidesPerView={2}
          spaceBetween={15}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
          className="xl:px-[40px] 2xl:px-[50px] 3xl:px-[60px]"
        >
          <Suspense fallback={<div>Loading feed...</div>}>
            {data?.body_feature?.map((item, index) => (
              <SwiperSlide key={"slide" + index}>
                <Card className="w-full h-auto block rounded-none border-none">
                  <CardHeader className="p-0 aspect-[476/576] relative z-0 overflow-hidden mb-[15px] xl:mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]">
                    {item.media.type === "video" ? (
                      <video
                        autoPlay
                        preload="auto"
                        playsInline
                        width={1920}
                        height={1080}
                        muted
                        loop
                        className="w-full h-full object-cover"
                        aria-label="Video player"
                        poster={item.media.url}
                      >
                        <source
                          src={item.media.web_banner.url}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <picture>
                        <source
                          media="(max-width: 768px)"
                          srcSet={item.media?.mobile_banner?.url}
                        />
                        <Image
                          src={item?.media?.web_banner?.url}
                          alt={item?.alt_text || "Body Feature"}
                          width={476}
                          height={576}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </picture>
                    )}
                  </CardHeader>
                  <CardContent className="max-lg:px-2">
                    <CardTitle className="text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal leading-tight text-center text-white lg:max-w-[160px] 2xl:max-w-[200px] 3xl:max-w-[240px] mx-auto">
                      {item?.title}
                    </CardTitle>
                    <CardDescription className="sr-only">
                      {item.title}
                    </CardDescription>
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
