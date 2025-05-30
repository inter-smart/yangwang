"use client";
import { useState } from "react";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import "swiper/css";
import Image from "next/image";

const videoReviews = [
  {
    thumbnail: "innovation-1.jpg",
    videoUrl: "/videos/lookupsection.mp4",
    title: "2024 BYD Yangwang U8 review",
    author: "MR. Ahamed Riyas, Azaiba, Oman",
  },
  {
    thumbnail: "innovation-2.jpg",
    videoUrl: "/videos/lookupsection.mp4",
    title: "2024 BYD Yangwang U8 review",
    author: "MR. Ahamed Riyas, Azaiba, Oman",
  },
  {
    thumbnail: "innovation-3.jpg",
    videoUrl: "/videos/lookupsection.mp4",
    title: "2024 BYD Yangwang U8 review",
    author: "MR. Ahamed Riyas, Azaiba, Oman",
  },
];

export default function InovationSection({ locale, data }) {
  console.log("data inovation =====>", data);
  const { items, title } = data;

  const [videoUrl, setVideoUrl] = useState(null);
  return (
    <section className="w-full h-auto block 2xl:p-[145px_0_190px] xl:p-[100px_0_110px] lg:p-[60px_0_70px] p-[40px_0_50px] bg-[#1D0A44]">
      <div className="container">
        <Heading size="heading3" as="h3" className="text-white mb-[20px] md:mb-[30px] xl:mb-[50px] 2xl:mb-[70px]">
          {title}
        </Heading>
        <Swiper
          key={locale}
          dir={locale === "en" ? "ltr" : "rtl"}
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {items?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full block overflow-hidden relative z-0 before:content-[''] before:absolute before:z-1 before:bottom-0 before:w-full before:h-[50%] before:bg-gradient-to-b before:from-[rgba(34,34,34,0)] before:to-[rgba(21,20,20,0.9)] group"
                onClick={() => setVideoUrl(item.video)}
                role="button"
                aria-label={`Play video: ${item.title}`}
              >
                <Image
                  src={item.video_thumbnail}
                  alt={item.alt}
                  width={550}
                  height={415}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="w-full md:gap-[15px] gap-[10px] 2xl:p-[50px_35px] xl:p-[20px_15px] md:p-[15px_10px] p-[10px] absolute z-1 bottom-0 left-0 flex items-center">
                  <div className="lg:w-[45px] w-[25px]">
                    <Image
                      src={item?.video_thumbnail}
                      alt="inovation-play"
                      width={45}
                      height={45}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="lg:w-[calc(100%-45px)] w-[calc(100%-25px)]">
                    <h4 className="text-white text-[14px] xl:text-[16px] 3xl:text-[26px] font-medium mb-[5px] xl:mb-[8px]">
                      {item.title}
                    </h4>
                    <p className="3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] font-normal leading-normal text-white">
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ModalVideo
        channel="custom"
        url={videoUrl}
        isOpen={!!videoUrl}
        onClose={() => setVideoUrl(null)}
        autoplay
        allowFullScreen
        aria={{
          openMessage: `Video player opened`,
          closeMessage: "Video player closed",
        }}
      />
    </section>
  );
}
