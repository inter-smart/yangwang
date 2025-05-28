"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const lookupInfo = [
    {
        title: "龙 (Phoenix) – Fèng",
        points: [
            "Represents rebirth, grace, and high virtue",
            "Ideal to associate with U8 for its majestic, protective character",
            "Consider a phoenix-like star arrangement or feathery cloud pattern"
        ]
    },
    {
        title: "山 (Mountain) – Shān",
        points: [
            "Symbol of stability, grounded power",
            "Use as part of star-aligned mountain shapes in the background — ties beautifully to U8's off-road identity"
        ]
    },
    {
        title: "气 (Qi / Energy) – Qì",
        points: [
            "Symbol of vital life force",
            "Can be subtly used in the sky like energy waves or light ripples"
        ]
    }
];
export default function LookupSection() {
    return (
        <section className="w-full h-auto block p-[40px_0_50px] md:p-[50px_0_70px] xl:p-[75px_0_100px] 3xl:p-[110px_0_150px] bg-[#262626]">
            <div className="container">
                <div className="text-center 3xl:max-w-[1070px] xl:max-w-[715px] md:max-w-[620px] mx-auto 3xl:mb-[60px] xl:mb-[40px] mb-[30px]">
                    <Heading
                        size="heading3"
                        as="h3"
                        className="text-white xl:mb-[25px] mb-[15px]"
                    >
                        Look up
                    </Heading>
                    <Text
                        as="p"
                        className="3xl:text-[18px] 2xl:text-[14px] xl:text-[13px] md:text-[12px] text-[11px] font-normal leading-normal text-white"
                    >
                        Yongwang J.A. High-Eval New Energy Vehicle Brand Under BFD Group. Relying On BFD Group's Innovative Automotive Technology, Top Industrial System Strength And Forward Looking Design, It Provides Users With High-Eval Vehicle Products Beyond Imagination.
                    </Text>
                </div>
                <div className="w-full h-auto block aspect-[1460/675] max-md:h-[320px] relative z-0">
                    <div className="w-full h-full md:px-[50px] xl:px-[120px] absolute -z-[1] inset-0 overflow-hidden">
                        <video
                            autoPlay
                            playsInline
                            preload="auto"
                            width={1460}
                            height={675}
                            muted
                            loop
                            className="w-full h-full object-cover"
                            aria-label="Background video"
                            aria-hidden="true"
                        >
                            <source src="/videos/lookupsection.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={120}
                            slidesPerView={3}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            breakpoints={{
                                280: {
                                    slidesPerView: 1,
                                    spaceBetween: 0
                                },
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                },
                                1536: {
                                    spaceBetween: 120
                                }
                            }}
                            className="lookupsectionSlider"
                        >
                            {lookupInfo?.map((item, index) => (
                                <SwiperSlide key={"lookupInfo" + index}>
                                    <div className="w-full h-full block max-md:pl-[15px]">
                                        <Heading
                                            size="heading3"
                                            as="h3"
                                            className="text-white"
                                        >
                                            {item.title}
                                        </Heading>
                                        <ul className="text-left text-white list-disc pl-5 mt-[20px] xl:mt-[30px] space-y-2">
                                            {item.points.map((point, i) => (
                                                <li key={i} className="3xl:text-[18px] 2xl:text-[14px] md:text-[12px] text-[12px] font-normal leading-normal">
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
} 