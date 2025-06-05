"use client";
import { Heading } from "@/components/layout/Heading";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Button } from "@/components/layout/Button";

const colorVariants = {
  interior: {
    colors: [
      {
        color_name: "white",
        color_thumb: {
          url: "/images/u8-color-white.png",
          alt_text: "thumb white color",
        },
        images: [
          {
            url: "/images/404.jpg",
            alt_text: "Ebony Black interior color thumbnail",
          },
          {
            url: "/images/interior-2.jpg",
            alt_text: "Ebony Black interior color thumbnail",
          },
        ],
      },
      {
        color_name: "black",
        color_thumb: {
          url: "/images/u8-color-black.png",
          alt_text: "Pearl White exterior color thumbnail",
        },
        images: [
          {
            url: "/images/events-1.jpg",
            alt_text: "Ebony Black interior color thumbnail",
          },
          {
            url: "/images/events-2.jpg",
            alt_text: "Ebony Black interior color thumbnail",
          },
        ],
      },
      {
        color_name: "blackish green",
        color_thumb: {
          url: "/images/u8-color-blackishGreen.png",
          alt_text: "Pearl White exterior color thumbnail",
        },
        images: [
          {
            url: "/images/events-2.jpg",
            alt_text: "blackishgreen color",
          },
          {
            url: "/images/innovation-1.jpg",
            alt_text: "blackishgreen color",
          },
          {
            url: "/images/innovation-2.jpg",
            alt_text: "blackishgreen color",
          },
        ],
      },
    ],
  },
  exterior: {
    colors: [
      {
        color_name: "white",
        color_thumb: {
          url: "/images/u8-color-white.png",
          alt_text: "thumb white color",
        },
        images: [
          {
            url: "/images/u8-main-white-1.png",
            alt_text: "white color",
          },
        ],
      },
      {
        color_name: "black",
        color_thumb: {
          url: "/images/u8-color-black.png",
          alt_text: "Pearl White exterior color thumbnail",
        },
        images: [
          {
            url: "/images/u8-main-black-1.png",
            alt_text: "black color",
          },
          {
            url: "/images/u8-main-black-2.png",
            alt_text: "black color",
          },
          {
            url: "/images/u8-main-black-3.png",
            alt_text: "black color",
          },
          {
            url: "/images/u8-main-black-4.png",
            alt_text: "black color",
          },
        ],
      },
      {
        color_name: "blackish green",
        color_thumb: {
          url: "/images/u8-color-blackishGreen.png",
          alt_text: "Pearl White exterior color thumbnail",
        },
        images: [
          {
            url: "/images/u8-main-blackishgreen-1.png",
            alt_text: "blackishgreen color",
          },
          {
            url: "/images/u8-main-blackishgreen-2.png",
            alt_text: "blackishgreen color",
          },
          {
            url: "/images/u8-main-blackishgreen-3.png",
            alt_text: "blackishgreen color",
          },
          {
            url: "/images/u8-main-blackishgreen-4.png",
            alt_text: "blackishgreen color",
          },
        ],
      },
    ],
  },
};

const wheelsVariants = [
  {
    wheels_name: "22-inch sports forging wheel hub",
    wheels_thumb: {
      url: "/images/models-u8-wheels-1.png",
      alt_text: "wheels thumbnail",
    },
    images: {
      url: "/images/models-main-u8-wheels-1.png",
      alt_text: "wheels",
    },
  },
  {
    wheels_name: "22 inches simple forging wheels",
    wheels_thumb: {
      url: "/images/models-u8-wheels-2.png",
      alt_text: "wheels thumbnail",
    },
    images: {
      url: "/images/models-main-u8-wheels-2.png",
      alt_text: "wheels",
    },
  },
  {
    wheels_name: "20-inch sports forging wheel hub",
    wheels_thumb: {
      url: "/images/models-u8-wheels-3.png",
      alt_text: "wheels thumbnail",
    },
    images: {
      url: "/images/models-main-u8-wheels-3.png",
      alt_text: "wheels",
    },
  },
];

export default function DesignViewSection({ locale }) {
  const [thumbsExteriorSwiper, setThumbsExteriorSwiper] = useState(null);
  const [thumbsInteriorSwiper, setThumbsInteriorSwiper] = useState(null);
  const [wheelsThumbsSwiper, setWheelsThumbsSwiper] = useState(null);
  const [interiorView, setInteriorView] = useState(false);
  const [wheelsView, setWheelsView] = useState(false);
  const [activeExteriorIndex, setActiveExteriorIndex] = useState(0);
  const [activeInteriorIndex, setActiveInteriorIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const mainSwiperRef = useRef(null);
  const subSwiperRef = useRef(null);

  useEffect(() => {
    if (
      subSwiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      subSwiperRef.current.params?.navigation
    ) {
      subSwiperRef.current.params.navigation.prevEl = prevRef.current;
      subSwiperRef.current.params.navigation.nextEl = nextRef.current;
      subSwiperRef.current.navigation.destroy();
      subSwiperRef.current.navigation.init();
      subSwiperRef.current.navigation.update();
    }
  }, [interiorView]);

  // Swiper onSlideChange handler
  const handleSlideChangeExterior = (swiper) => {
    setActiveExteriorIndex(swiper.activeExteriorIndex);
  };
  const handleSlideChangeInterior = (swiper) => {
    setActiveInteriorIndex(swiper.activeInteriorIndex);
  };

  const handleInteriorViewClick = () => {
    setInteriorView((prev) => !prev);
  };
  const handleWheelsViewClick = () => {
    setWheelsView((prev) => !prev);
  };

  return (
    <section className="w-full h-[276px] 2xs:h-[368px] xs:h-[420px] sm:h-dvh sm:min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block py-[20px] sm:py-[30px] lg:py-[50px_60px] xl:py-[60px_70px] 2xl:py-[80px_90px] 3xl:py-[90px_100px] overflow-hidden relative z-0">
      <div className="3xl:text-[220px] 2xl:text-[200px] xl:text-[140px] lg:text-[120px] md:text-[100px] sm:text-[72px] text-[48px] leading-none uppercase font-medium bg-gradient-to-b from-[#cfcece] to-transparent bg-clip-text text-transparent absolute z-3 top-[15px] xl:top-[20px] 2xl:top-[30px] 3xl:top-[40px] ltr:right-[15%] rtl:left-[15%] mix-blend-darken pointer-events-none">
        u8
      </div>
      {!wheelsView ? (
        <>
          <div className="w-full h-full absolute inset-0 z-1">
            {!interiorView ? (
              <Swiper
                key={`exterior-${locale}`}
                dir={locale === "en" ? "ltr" : "rtl"}
                spaceBetween={0}
                navigation={false}
                thumbs={{
                  swiper:
                    thumbsExteriorSwiper && !thumbsExteriorSwiper.destroyed
                      ? thumbsExteriorSwiper
                      : null,
                }}
                modules={[Thumbs]}
                className="w-full h-full"
                onSlideChange={handleSlideChangeExterior}
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
              >
                {colorVariants.exterior.colors.map((colorItem, colorIndex) => (
                  <SwiperSlide key={`exterior-main-slide-${colorIndex}`}>
                    <Swiper
                      key={`exterior-sub-${locale}-${colorIndex}`}
                      dir={locale === "en" ? "ltr" : "rtl"}
                      effect={"fade"}
                      spaceBetween={10}
                      navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                      }}
                      ref={subSwiperRef}
                      modules={[EffectFade, Navigation]}
                      className="w-full h-full"
                    >
                      {colorItem.images.map((imgItem, imgIndex) => (
                        <SwiperSlide
                          key={`exterior-sub-slide-${imgIndex}`}
                          className="bg-white"
                        >
                          <div className="w-full h-full relative z-0">
                            <picture className="absolute z-0 inset-0">
                              <source
                                media="(max-width: 768px)"
                                srcSet={imgItem.url}
                              />
                              <Image
                                src={imgItem.url}
                                alt={imgItem.alt_text}
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority={imgIndex === 0}
                              />
                            </picture>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Swiper
                key={`interior-${locale}`}
                dir={locale === "en" ? "ltr" : "rtl"}
                spaceBetween={0}
                navigation={false}
                thumbs={{
                  swiper:
                    thumbsInteriorSwiper && !thumbsInteriorSwiper.destroyed
                      ? thumbsInteriorSwiper
                      : null,
                }}
                modules={[Thumbs]}
                className="w-full h-full"
                onSlideChange={handleSlideChangeInterior}
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
              >
                {colorVariants.interior.colors.map((colorItem, colorIndex) => (
                  <SwiperSlide key={`main-slide-${colorIndex}`}>
                    <Swiper
                      key={`interior-sub-${locale}-${colorIndex}`}
                      dir={locale === "en" ? "ltr" : "rtl"}
                      effect={"fade"}
                      spaceBetween={10}
                      navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                      }}
                      modules={[EffectFade, Navigation]}
                      className="w-full h-full"
                      ref={subSwiperRef}
                    >
                      {colorItem.images.map((imgItem, imgIndex) => (
                        <SwiperSlide
                          key={`interior-sub-slide-${imgIndex}`}
                          className="bg-white"
                        >
                          <div className="w-full h-full relative z-0">
                            <picture className="absolute z-0 inset-0">
                              <source
                                media="(max-width: 768px)"
                                srcSet={imgItem.url}
                              />
                              <Image
                                src={imgItem.url}
                                alt={imgItem.alt_text}
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority={imgIndex === 0}
                              />
                            </picture>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div className="container h-full">
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between gap-[20px] relative z-1">
                <div>
                  <Heading
                    size="heading3"
                    as="h3"
                    className={`
                ${!interiorView ? "text-black" : "text-white"}`}
                  >
                    Design and Dimensions
                  </Heading>
                </div>
                <div>
                  <button
                    onClick={handleInteriorViewClick}
                    className="3xl:w-[100px] 2xl:w-[88px] xl:w-[66px] sm:w-[60px] w-[40px] cursor-pointer relative z-0"
                  >
                    {interiorView ? (
                      <Image
                        src="/images/models-view-1.svg"
                        alt="models-view-1"
                        width={100}
                        height={64}
                      />
                    ) : (
                      <Image
                        src="/images/models-view-2.svg"
                        alt="models-view-2"
                        width={100}
                        height={64}
                      />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end gap-[20px] relative z-1">
                  {!interiorView ? (
                    <div>
                      <Heading
                        size="heading6"
                        as="h6"
                        className="capitalize text-black mb-[4px] xl:mb-[6px] 3xl:mb-[10px]"
                      >
                        {
                          colorVariants.exterior.colors[activeExteriorIndex]
                            ?.color_name
                        }
                      </Heading>
                      <Swiper
                        key={`exterior-thumbs-${locale}`}
                        dir={locale === "en" ? "ltr" : "rtl"}
                        onSwiper={setThumbsExteriorSwiper}
                        onSlideChange={handleSlideChangeExterior}
                        spaceBetween={5}
                        slidesPerView={"auto"}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        breakpoints={{
                          640: { spaceBetween: 10 },
                        }}
                        className="w-full h-full"
                      >
                        {colorVariants.exterior.colors.map((item, index) => (
                          <SwiperSlide
                            key={`exterior-thumb-${index}`}
                            className={`${
                              index === activeExteriorIndex
                                ? "scale-100"
                                : "scale-80"
                            } !w-[20px] lg:!w-[25px] xl:!w-[30px] 2xl:!w-[40px] 3xl:!w-[50px]  transition-transform`}
                          >
                            <div className="w-[20px] lg:w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[50px]  rounded aspect-square cursor-pointer relative z-0">
                              <Image
                                src={item.color_thumb.url}
                                alt={item.color_thumb.alt_text}
                                fill
                                sizes="50px"
                                title={item.color_name}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  ) : (
                    <div>
                      <Heading
                        size="heading6"
                        as="h6"
                        className="capitalize text-white mb-[4px] xl:mb-[6px] 3xl:mb-[10px]"
                      >
                        {
                          colorVariants.interior.colors[activeInteriorIndex]
                            ?.color_name
                        }
                      </Heading>
                      <Swiper
                        key={`interior-thumbs-${locale}`}
                        dir={locale === "en" ? "ltr" : "rtl"}
                        onSwiper={setThumbsInteriorSwiper}
                        onSlideChange={handleSlideChangeInterior}
                        spaceBetween={5}
                        slidesPerView={"auto"}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        breakpoints={{
                          640: { spaceBetween: 10 },
                        }}
                        className="w-full h-full"
                      >
                        {colorVariants.interior.colors.map((item, index) => (
                          <SwiperSlide
                            key={`interior-thumb-${index}`}
                            className={`${
                              index === activeInteriorIndex
                                ? "scale-100"
                                : "scale-80"
                            } !w-[20px] lg:!w-[25px] xl:!w-[30px] 2xl:!w-[40px] 3xl:!w-[50px] transition-transform`}
                          >
                            <div className="w-[20px] lg:w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[50px] rounded aspect-square cursor-pointer relative z-0">
                              <Image
                                src={item.color_thumb.url}
                                alt={item.color_thumb.alt_text}
                                fill
                                sizes="50px"
                                title={item.color_name}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  )}
                  <div className="flex gap-[4px] xl:gap-[6px] 3xl:gap-[10px]">
                    <div className="flex gap-x-[10px] xl:gap-x-[20px] 2xl:gap-x-[30px] 3xl:gap-x-[40px] px-[10px]">
                      <button
                        ref={prevRef}
                        className="w-[10px] xl:w-[12px] 3xl:w-[16px] cursor-pointer [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed transition-transform duration-300 scale-110"
                      >
                        <Image
                          src="/images/icon-arrow-left.svg"
                          alt="icon-arrow-left"
                          width={16}
                          height={16}
                          className={`${
                            !interiorView
                              ? "filter-[brightness(0)_saturate(100%)]"
                              : ""
                          } ltr:scale-x-100 rtl:-scale-x-100`}
                        />
                        <span className="sr-only">left</span>
                      </button>
                      <button
                        ref={nextRef}
                        className="w-[10px] xl:w-[12px] 3xl:w-[16px] cursor-pointer [&.swiper-button-disabled]:opacity-50 [&.swiper-button-disabled]:cursor-not-allowed transition-transform duration-300 scale-110"
                      >
                        <Image
                          src="/images/icon-arrow-right.svg"
                          alt="icon-arrow-right"
                          width={16}
                          height={16}
                          className={`${
                            !interiorView
                              ? "filter-[brightness(0)_saturate(100%)]"
                              : ""
                          } ltr:scale-x-100 rtl:-scale-x-100`}
                        />
                        <span className="sr-only">next</span>
                      </button>
                    </div>
                    <Button
                      color="white"
                      aria-label="View Interior"
                      className="min-w-[70px] sm:min-w-[100px] xl:min-w-[110px] 2xl:min-w-[150px] 3xl:min-w-[170px] !border-[#cecece]"
                      onClick={handleInteriorViewClick}
                    >
                      {!interiorView ? "View Interior" : "View Exterior"}
                    </Button>
                    <Button
                      color="black"
                      aria-label="View Wheels"
                      className="min-w-[70px] sm:min-w-[100px] xl:min-w-[110px] 2xl:min-w-[150px] 3xl:min-w-[170px]"
                      onClick={handleWheelsViewClick}
                    >
                      View Wheels
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-full absolute inset-0 z-0">
            <Swiper
              key={`wheels-${locale}`}
              dir={locale === "en" ? "ltr" : "rtl"}
              effect={"fade"}
              spaceBetween={0}
              navigation={false}
              thumbs={{
                swiper:
                  wheelsThumbsSwiper && !wheelsThumbsSwiper.destroyed
                    ? wheelsThumbsSwiper
                    : null,
              }}
              modules={[EffectFade, Thumbs]}
              className="w-full h-full"
            >
              {wheelsVariants.map((item, index) => (
                <SwiperSlide key={`wheels-slide-${index}`} className="bg-white">
                  <div className="w-full h-full relative z-0">
                    <picture className="absolute z-0 inset-0">
                      <source
                        media="(max-width: 768px)"
                        srcSet={item.images.url}
                      />
                      <Image
                        src={item.images.url}
                        alt={item.images.alt_text}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </picture>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="container h-full">
            <div className="h-full flex flex-col justify-between">
              <div className="w-full flex justify-end">
                <button
                  onClick={handleWheelsViewClick}
                  className="3xl:w-[100px] 2xl:w-[88px] xl:w-[66px] sm:w-[60px] w-[40px]  cursor-pointer relative z-0"
                >
                  <Image
                    src="/images/models-view-1.svg"
                    alt="models-view-2"
                    width={100}
                    height={64}
                    className="filter-[brightness(0)_saturate(100%)]"
                  />
                </button>
              </div>
              <Swiper
                key={`wheels-thumbs-${locale}`}
                dir={locale === "en" ? "ltr" : "rtl"}
                onSwiper={setWheelsThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="w-full"
              >
                {wheelsVariants.map((item, index) => (
                  <SwiperSlide
                    key={`wheels-thumb-${index}`}
                    className="group cursor-pointer"
                  >
                    <div className="w-[20px] lg:w-[25px] xl:w-[30px] 2xl:w-[40px] 3xl:w-[50px]  aspect-square rounded relative z-0 mb-[4px] xl:mb-[6px] 3xl:mb-[10px] mx-auto">
                      <Image
                        src={item.wheels_thumb.url}
                        alt={item.wheels_thumb.alt_text}
                        fill
                        sizes="50px"
                        title={item.wheels_name}
                      />
                    </div>
                    <h6 className="text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-medium leading-tight capitalize text-center text-black/50 transition-color group-hover:text-black group-[&.swiper-slide-thumb-active]:text-black">
                      {item.wheels_name}
                    </h6>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
