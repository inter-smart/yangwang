
"use client";
import { useState } from "react";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const videoReviews = [
    {
        thumbnail: "innovation-1.jpg",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "2024 BYD Yangwang U8 review",
        author: "MR. Ahamed Riyas, Azaiba, Oman"
    },
    {
        thumbnail: "innovation-2.jpg",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
        title: "2024 BYD Yangwang U8 review",
        author: "MR. Ahamed Riyas, Azaiba, Oman"
    },
    {
        thumbnail: "innovation-3.jpg",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
        title: "2024 BYD Yangwang U8 review",
        author: "MR. Ahamed Riyas, Azaiba, Oman"
    }
];

export default function InovationSection() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const openVideoModal = (video) => {
        setSelectedVideo(video);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    return (
        <section className="w-full h-auto block 3xl:p-[145px_0_190px] xl:p-[100px_0_110px] bg-[#1D0A44]">
            <div className="container">
                <Heading
                    size="heading3"
                    as="h3"
                    className="capitalize text-white mb-[6px] xl:mb-[50px] 3xl:mb-[70px]"
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
                            <div
                                className="w-full h-full block overflow-hidden relative z-0 before:content-[''] before:absolute before:z-1 before:bottom-0 before:w-full before:h-[50%] before:bg-gradient-to-b before:from-[rgba(34,34,34,0)] before:to-[rgba(21,20,20,0.9)] group"
                                onClick={() => openVideoModal(review)}
                                role="button"
                                aria-label={`Play video: ${review.title}`}
                            >
                                <Img
                                    src={review.thumbnail}
                                    alt={review.title}
                                    width={550}
                                    height={415}
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="w-full gap-[15px] 3xl:p-[50px_35px] xl:p-[20px_15px] absolute z-1 bottom-0 left-0 flex items-center">
                                    <div className="3xl:w-[45px] xl:w-[35px]">
                                        <Img
                                            src="inovation-play.png"
                                            alt="inovation-play"
                                            width={45}
                                            height={45}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="3xl:w-[calc(100%-45px)] xl:w-[calc(100%-35px)]">
                                        <Heading
                                            as="h4"
                                            className="text-white text-[14px] xl:text-[16px] 3xl:text-[26px] font-medium mb-[5px] xl:mb-[8px]"
                                        >
                                            {review.title}
                                        </Heading>
                                        <Text
                                            size="text1"
                                            as="p"
                                            className="text-white"
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

            {selectedVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={closeVideoModal}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Video player modal"
                >
                    <div
                        className="relative w-full max-w-4xl mx-4 bg-black rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors duration-200"
                            onClick={closeVideoModal}
                            aria-label="Close video modal"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="relative aspect-video">
                            <video
                                className="w-full h-full object-contain"
                                src={selectedVideo.videoUrl}
                                controls
                                autoPlay
                                aria-label={selectedVideo.title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}