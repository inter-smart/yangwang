"use client";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const videoReviews = [
    {
        thumbnail: "review-1.jpg",
        title: "2024 BYD Yangwang U8 review",
        author: "MR. Ahamed Riyas, Azaiba, Oman"
    },
    {
        thumbnail: "review-2.jpg",
        title: "2024 BYD Yangwang U8 review",
        author: "MR. Ahamed Riyas, Azaiba, Oman"
    },
    {
        thumbnail: "review-3.jpg",
        title: "2024 BYD Yangwang U8 review",
        author: "MR. Ahamed Riyas, Azaiba, Oman"
    }
];

export default function InovationSection() {
    return (
        <section className="w-full h-auto block p-[145px_0_190px] bg-[#1D0A44]">
            <div className="container">
                <Heading
                    size="heading3"
                    as="h3"
                    className="capitalize text-white mb-[6px] xl:mb-[8px] 3xl:mb-[70px]"
                >
                    Innovation Across the Lineup
                </Heading>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    className="innovationSlider"
                >
                    {videoReviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="group cursor-pointer">
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/50">
                                    {/* Video Thumbnail */}
                                    <Img
                                        src={review.thumbnail}
                                        alt={review.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] 3xl:w-[80px] 3xl:h-[80px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                                            <div className="w-0 h-0 border-l-[20px] xl:border-l-[24px] 3xl:border-l-[28px] border-l-white border-y-[12px] xl:border-y-[14px] 3xl:border-y-[16px] border-y-transparent ml-1"></div>
                                        </div>
                                    </div>

                                    {/* Video Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-[15px] xl:p-[20px] 3xl:p-[25px]">
                                        <Heading
                                            as="h4"
                                            className="text-white text-[14px] xl:text-[16px] 3xl:text-[18px] font-medium mb-[5px] xl:mb-[8px]"
                                        >
                                            {review.title}
                                        </Heading>
                                        <Text
                                            as="p"
                                            className="text-white/80 text-[12px] xl:text-[14px] 3xl:text-[16px] font-light"
                                        >
                                            {review.author}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}