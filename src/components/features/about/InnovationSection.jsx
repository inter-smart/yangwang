
"use client";
import { useState } from "react";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
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
        <section className="w-full h-auto block 2xl:p-[145px_0_190px] xl:p-[100px_0_110px] lg:p-[60px_0_70px] p-[40px_0_50px] bg-[#1D0A44]">
            <div className="container">
                <Heading
                    size="heading3"
                    as="h3"
                    className="text-white mb-[20px] md:mb-[30px] xl:mb-[50px] 2xl:mb-[70px]"
                >
                    Innovation Across the Lineup
                </Heading>
                <Swiper
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
                                <div className="w-full md:gap-[15px] gap-[10px] 2xl:p-[50px_35px] xl:p-[20px_15px] md:p-[15px_10px] p-[10px] absolute z-1 bottom-0 left-0 flex items-center">
                                    <div className="lg:w-[45px] w-[25px]">
                                        <Img
                                            src="inovation-play.png"
                                            alt="inovation-play"
                                            width={45}
                                            height={45}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="lg:w-[calc(100%-45px)] w-[calc(100%-25px)]">
                                        <Heading
                                            as="h4"
                                            className="text-white text-[14px] xl:text-[16px] 3xl:text-[26px] font-medium mb-[5px] xl:mb-[8px]"
                                        >
                                            {review.title}
                                        </Heading>
                                        <p className="3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] font-normal leading-normal text-white">
                                            {review.author}
                                        </p>
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