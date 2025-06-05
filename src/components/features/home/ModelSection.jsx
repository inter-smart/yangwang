"use client";
import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";
import CountUp from "react-countup";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ModelSection({ data, locale }) {
  console.log("model data : ", data);
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const scrollVideo1 = useRef(null);
  const scrollVideo2 = useRef(null);

  useEffect(() => {
    const setupScrollVideo = (videoRef, containerRef) => {
      const video = videoRef;
      const container = containerRef;

      if (!video || !container) return;

      gsap.to(video, {
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=500",
          scrub: true,
          pin: true,
          // markers: true,
          onEnter: () => {
            video.play();
          },
          onLeave: () => {
            video.pause();
          },
          onEnterBack: () => {
            video.play();
          },
          onLeaveBack: () => {
            video.pause();
          },
        },
        ease: "none",
      });
    };

    ScrollTrigger.matchMedia({
      all: () => {
        setupScrollVideo(scrollVideo1.current, containerRef1.current);
        setupScrollVideo(scrollVideo2.current, containerRef2.current);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full h-auto block relative overflow-hidden">
      {data?.map((item, index) => (
        <div
          ref={containerRef1}
          key={index}
          className="w-full h-dvh lg:min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block overflow-hidden"
        >
          {/* <div className="h-full flex flex-wrap flex-row-reverse"> */}
          <div className={`h-full flex flex-wrap ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"}`}>
            <div className="w-full lg:w-[calc(100%-420px)] xl:w-[calc(100%-490px)] 2xl:w-[calc(100%-650px)] 3xl:w-[calc(100%-740px)] max-lg:h-[40dvh]">
              <div className="w-full h-full relative bg-black z-0 p-[20px_25px] xl:p-[35px_45px] 2xl:p-[45px_65px] 3xl:p-[50px_70px] ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]">
                <div className="h-full max-lg:container max-lg:mx-auto max-lg:px-[var(--breakpoint-gap)]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={item?.home_vid_left_vid_thumb}
                    className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
                  >
                    <source src={item?.home_vid_left_vid || "/videos/vdo-model-1.mp4"} type="video/mp4" />
                  </video>
                  <div className="w-full h-full flex flex-col justify-between text-white">
                    <div>
                      <Heading size="heading2" as="h2" className="text-white mb-[6px] xl:mb-[8px] 3xl:mb-[10px]">
                        {item?.name}
                      </Heading>
                      <Heading size="heading5" as="h5" className="font-normal text-white mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
                        {item?.title}
                      </Heading>
                      <LinkButton
                        href={item?.button?.link || "#"}
                        aria-label="Explore Models"
                        className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px]"
                      >
                        {item?.button?.text || "Explore Models"}
                      </LinkButton>
                    </div>
                    <div className="flex flex-wrap gap-[15px] sm:gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                      {item?.specification?.map((spec, specIndex) => (
                        <Stat
                          key={specIndex}
                          label={spec?.title || "Quad-Motor System"}
                          value={parseInt(spec?.value) || 10}
                          suffix={spec?.sufix || " ps"}
                          // decimals={spec?.decimals || 0}
                        />
                      ))}
                      {/* <Stat label="Quad-Motor System" value={1200} suffix=" ps" />
                      <Stat label="0 to 100 Kmph" value={3.6} suffix=" Sec" decimals={1} />
                      <Stat label="Impressive Range" value={1000} suffix=" km" /> */}
                      <div className="flex gap-[5px] sm:gap-[10px] xl:gap-[15px] 2xl:gap-[20px] ltr:ml-auto rtl:mr-auto">
                        <div>
                          <Link
                            href={"#"}
                            aria-label="model-2"
                            className="w-[25px] sm:w-[30px] xl:w-[40px] 2xl:w-[52px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
                          >
                            <Img src="icon-model-1.svg" alt="model-1" width={60} height={60} />
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={"#"}
                            aria-label="model-2"
                            className="w-[25px] sm:w-[30px] xl:w-[40px] 2xl:w-[52px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
                          >
                            <Img src="icon-model-2.svg" alt="model-2" width={60} height={60} className="block" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[420px] xl:w-[490px] 2xl:w-[650px] 3xl:w-[740px] max-lg:h-[60dvh]">
              <div className="w-full h-full bg-black block relative z-0">
                <video
                  ref={scrollVideo1}
                  preload="metadata"
                  muted
                  loop
                  playsInline
                  poster={item?.home_vid_right_vid_thumb || "images/poster-model-1.jpg"}
                  className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
                >
                  <source src={data?.home_vid_right_vid || "/videos/vdo-model-1.mp4"} type="video/mp4" />
                </video>
                <Image
                  src={item?.home_vid_right_icon || "icon-model-u8.svg"}
                  alt="model-u8"
                  width={170}
                  height={100}
                  className="w-[80px] xl:w-[110px] 2xl:w-[140px] 3xl:w-[170px] block absolute top-[70%] left-1/2 transform -translate-x-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* <div
        ref={containerRef2}
        className="w-full h-dvh lg:min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block overflow-hidden"
      >
        <div className="h-full flex flex-wrap flex-row-reverse">
          <div className="w-full lg:w-[calc(100%-420px)] xl:w-[calc(100%-490px)] 2xl:w-[calc(100%-650px)] 3xl:w-[calc(100%-740px)] max-lg:h-[40dvh]">
            <div className="w-full h-full relative bg-black z-0 p-[20px_25px] xl:p-[35px_45px] 2xl:p-[45px_65px] 3xl:p-[50px_70px] ltr:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]">
              <div className="h-full max-lg:container max-lg:mx-auto max-lg:px-[var(--breakpoint-gap)]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
                >
                  <source src="/videos/vdo-model-2.mp4" type="video/mp4" />
                </video>
                <div className="w-full h-full flex flex-col justify-between">
                  <div>
                    <Heading
                      size="heading2"
                      as="h2"
                      className="text-white mb-[6px] xl:mb-[8px] 3xl:mb-[10px]"
                    >
                      U8
                    </Heading>
                    <Heading
                      size="heading5"
                      as="h5"
                      className="font-normal text-white mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                    >
                      Born to Outpace the Future
                    </Heading>
                    <LinkButton
                      href="#"
                      aria-label="Explore Models"
                      className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px]"
                    >
                      Explore Models
                    </LinkButton>
                  </div>
                  <div className="flex flex-wrap gap-[15px] sm:gap-[20px] xl:gap-[30px] 2xl:gap-[50px]">
                    <Stat label="Quad-Motor System" value={1200} suffix=" ps" />
                    <Stat
                      label="0 to 100 Kmph"
                      value={3.6}
                      suffix=" Sec"
                      decimals={1}
                    />
                    <Stat label="Impressive Range" value={1000} suffix=" km" />
                    <div className="flex gap-[5px] sm:gap-[10px] xl:gap-[15px] 2xl:gap-[20px] ltr:ml-auto rtl:mr-auto">
                      <div>
                        <Link
                          href={"#"}
                          aria-label="model-2"
                          className="w-[25px] sm:w-[30px] xl:w-[40px] 2xl:w-[52px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
                        >
                          <Img
                            src="icon-model-1.svg"
                            alt="model-1"
                            width={60}
                            height={60}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link
                          href={"#"}
                          aria-label="model-2"
                          className="w-[25px] sm:w-[30px] xl:w-[40px] 2xl:w-[52px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
                        >
                          <Img
                            src="icon-model-2.svg"
                            alt="model-2"
                            width={60}
                            height={60}
                            className="block"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[420px] xl:w-[490px] 2xl:w-[650px] 3xl:w-[740px] max-lg:h-[60dvh]">
            <div className="w-full h-full block bg-black relative z-0">
              <video
                ref={scrollVideo2}
                preload="metadata"
                muted
                loop
                playsInline
                className="w-full h-full absolute -z-1 inset-0 object-cover"
                poster="images/poster-model-2.jpg"
              >
                <source src="/videos/vdo-model-jumbing.mp4" type="video/mp4" />
              </video>
              <Img
                src="icon-model-u9.svg"
                alt="model-u9"
                width={170}
                height={100}
                className="w-[80px] xl:w-[110px] 2xl:w-[140px] 3xl:w-[170px] block absolute top-[70%] left-1/2 transform -translate-x-1/2"
              />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

function Stat({ label, value, suffix, decimals = 0 }) {
  return (
    <div>
      <Text size="text1" as="p" className="max-sm:text-[8px] font-medium leading-none text-white">
        {label}
      </Text>
      <Heading size="heading3" as="h3" className="max-sm:text-[14px] font-medium text-white" dir="ltr">
        <CountUp end={value} duration={3} decimals={decimals} suffix={` ${suffix}`} enableScrollSpy />
      </Heading>
    </div>
  );
}
