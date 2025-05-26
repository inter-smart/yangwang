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

gsap.registerPlugin(ScrollTrigger);

export default function ModelSection() {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const scrollVideo1 = useRef(null);
  const scrollVideo2 = useRef(null);

  const isEnglish = true;

  useEffect(() => {
    const setupScrollVideo = (videoRef, containerRef) => {
      const video = videoRef;
      const container = containerRef;

      if (!video || !container) return;

      gsap.to(video, {
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: true,
          // markers: true,
        },
        currentTime: video.duration,
        ease: "none",
      });
    };

    setupScrollVideo(scrollVideo1.current, containerRef1.current);
    setupScrollVideo(scrollVideo2.current, containerRef2.current);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full h-auto block relative overflow-hidden">
      <div
        ref={containerRef1}
        className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block overflow-hidden"
      >
        <div className="h-full flex flex-wrap">
          <div className="w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)]">
            <div className="w-full h-full relative bg-black z-0 p-[20px_25px] xl:p-[35px_45px] 3xl:p-[50px_70px] ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="meta"
                className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
              >
                <source src="/videos/hero-1.mp4" type="video/mp4" />
              </video>
              <div className="w-full h-full flex flex-col justify-between text-white">
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
                    className="font-normal text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
                  >
                    Command the Elements
                  </Heading>
                  <LinkButton
                    href="#"
                    aria-label="Explore Models"
                    className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 3xl:min-w-[146px]"
                  >
                    Explore Models
                  </LinkButton>
                </div>
                <div className="flex flex-wrap gap-[20px] xl:gap-[30px] 3xl:gap-[50px]">
                  <Stat label="Quad-Motor System" value={1200} suffix=" ps" />
                  <Stat
                    label="0 to 100 Kmph"
                    value={3.6}
                    suffix=" Sec"
                    decimals={1}
                  />
                  <Stat label="Impressive Range" value={1000} suffix=" km" />
                  <div className="flex gap-[10px] xl:gap-[15px] 3xl:gap-[20px] ltr:ml-auto rtl:mr-auto">
                    <div>
                      <Link
                        href={"#"}
                        aria-label="model-2"
                        className="w-[30px] xl:w-[40px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
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
                        className="w-[30px] xl:w-[40px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
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
          <div className="w-[320px] xl:w-[490px] 3xl:w-[740px]">
            <div className="w-full h-full block relative z-0">
              <video
                ref={scrollVideo1}
                preload="meta"
                muted
                playsInline
                className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
              >
                <source src="/videos/timer-2.mp4" type="video/mp4" />
              </video>
              <Img
                src="icon-model-u8.svg"
                alt="model-u8"
                width={170}
                height={100}
                className="w-[80px] xl:w-[110px] 3xl:w-[170px] block absolute top-[70%] left-1/2 transform -translate-x-1/2"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={containerRef2}
        className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block overflow-hidden"
      >
        <div className="h-full flex flex-wrap flex-row-reverse">
          <div className="w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)]">
            <div className="w-full h-full relative bg-black z-0 p-[20px_25px] xl:p-[35px_45px] 3xl:p-[50px_70px] ltr:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="meta"
                className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
              >
                <source src="/videos/hero-1.mp4" type="video/mp4" />
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
                    className="font-normal text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
                  >
                    Command the Elements
                  </Heading>
                  <LinkButton
                    href="#"
                    aria-label="Explore Models"
                    className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 3xl:min-w-[146px]"
                  >
                    Explore Models
                  </LinkButton>
                </div>
                <div className="flex flex-wrap gap-[20px] xl:gap-[30px] 3xl:gap-[50px]">
                  <Stat label="Quad-Motor System" value={1200} suffix=" ps" />
                  <Stat
                    label="0 to 100 Kmph"
                    value={3.6}
                    suffix=" Sec"
                    decimals={1}
                  />
                  <Stat label="Impressive Range" value={1000} suffix=" km" />
                  <div className="flex gap-[10px] xl:gap-[15px] 3xl:gap-[20px] ltr:ml-auto rtl:mr-auto">
                    <div>
                      <Link
                        href={"#"}
                        aria-label="model-2"
                        className="w-[30px] xl:w-[40px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
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
                        className="w-[30px] xl:w-[40px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
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
          <div className="w-[320px] xl:w-[490px] 3xl:w-[740px]">
            <div className="w-full h-full block relative z-0">
              <video
                ref={scrollVideo2}
                preload="meta"
                muted
                playsInline
                className="w-full h-full absolute -z-1 inset-0 object-cover"
              >
                <source src="/videos/timer.mp4" type="video/mp4" />
              </video>
              <Img
                src="icon-model-u9.svg"
                alt="model-u9"
                width={170}
                height={100}
                className="w-[80px] xl:w-[110px] 3xl:w-[170px] block absolute top-[70%] left-1/2 transform -translate-x-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, suffix, decimals = 0 }) {
  return (
    <div>
      <Text size="text2" as="p" className="leading-none text-white">
        {label}
      </Text>
      <Heading size="heading3" as="h3" className="font-medium text-white" dir="ltr">
        <CountUp
          end={value}
          duration={3}
          decimals={decimals}
          suffix={` ${suffix}`}
          enableScrollSpy
        />
      </Heading>
    </div>
  );
}
