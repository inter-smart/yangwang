"use client";
import NewsCard from "./NewsCard";
import { Heading } from "@/components/layout/Heading";
import { LinkButton } from "@/components/layout/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function RelatedPostSection({ locale, data }) {
  return (
    <section className="w-full h-auto block p-[20px_0_50px] md:p-[20px_0_50px] 2xl:p-[50px_0_110px] 3xl:p-[60px_0_100px]">
      <div className="container">
        <Heading size="heading3" as="h3" className="text-black 2xl:mb-[45px] xl:mb-[55px] md:mb-[40px] mb-[30px]">
          Related Post
        </Heading>
        <div className="w-full h-auto 2xl:mb-[60px] xl:mb-[40px] mb-[30px]">
          <Swiper
            key={locale}
            dir={locale === "en" ? "ltr" : "rtl"}
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1.3}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1536: {
                slidesPerView: 3,
                spaceBetween: 55,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="RelatedPostSectionSlider"
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full block">
                  <NewsCard item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center">
          <LinkButton
            href="#"
            aria-label="load More"
            className="min-w-[70px] sm:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[145px] m-auto hover:!bg-[#F1D1A8]"
            color="black"
          >
            Load More
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
