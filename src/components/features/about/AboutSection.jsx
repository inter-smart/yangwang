"use client";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slides = [
    {
        src: "about-banner-1.jpg",
        alt: "about-banner-1"
    },
    {
        src: "about-banner-2.jpg",
        alt: "about-banner-2"
    },
    {
        src: "about-banner-3.jpg",
        alt: "about-banner-3"
    }
];

export default function AboutSection() {
    return (
        <section className="w-full max-md:h-[420px] md:h-dvh md:min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block relative z-0">
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                className="innovationSlider h-full"
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full block">
                            <Img
                                src={item.src}
                                alt={item.alt}
                                width={640}
                                height={920}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="container">
                <div className="absolute z-1 inset-0 flex items-center justify-center">
                    <Heading
                        size="heading3"
                        as="h3"
                        className="text-white"
                    >
                        Driven By Vision, Powered by Innovation
                    </Heading>
                </div>
            </div>
        </section>
    );
}