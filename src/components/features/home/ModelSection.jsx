"use client";
import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";
import CountUp from "react-countup";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ModelSection() {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const scrollVideo1 = useRef(null);
  const scrollVideo2 = useRef(null);

  useEffect(() => {
    const setupScrollVideo = (videoRef, containerRef) => {
      const video = videoRef;
      const container = containerRef;

      if (!video || !container) return;

      const onLoadedMetadata = () => {
        gsap.to(video, {
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true,
            markers: false,
          },
          currentTime: video.duration,
          ease: "none",
        });
      };

      if (video.readyState >= 1) {
        onLoadedMetadata();
      } else {
        video.addEventListener("loadedmetadata", onLoadedMetadata, {
          once: true,
        });
      }
    };

    setupScrollVideo(scrollVideo1.current, containerRef1.current);
    setupScrollVideo(scrollVideo2.current, containerRef2.current);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full h-auto block relative overflow-hidden">
      {/* --- Section 1 --- */}
      <div ref={containerRef1} className="flex flex-wrap">
        <div className="w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)]">
          <div className="relative aspect-[1180/900] bg-black z-0 p-[20px_25px] xl:p-[35px_45px] 3xl:p-[50px_70px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
            >
              <source src="/videos/hero-1.mp4" type="video/mp4" />
            </video>
            {/* Text Content */}
            <div className="w-full h-full flex flex-col justify-between text-white">
              <div>
                <Heading size="heading2" as="h2">
                  U8
                </Heading>
                <Heading
                  size="heading5"
                  as="h5"
                  className="font-normal mb-[20px]"
                >
                  Command the Elements
                </Heading>
                <LinkButton href="#">Explore Models</LinkButton>
              </div>
              <div className="flex flex-wrap gap-[30px]">
                <Stat label="Quad-Motor System" value={1200} suffix=" ps" />
                <Stat
                  label="0 to 100 Kmph"
                  value={3.6}
                  suffix=" Sec"
                  decimals={1}
                />
                <Stat label="Impressive Range" value={1000} suffix=" km" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[320px] xl:w-[490px] 3xl:w-[740px] relative">
          <video
            ref={scrollVideo1}
            preload="metadata"
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

      {/* --- Section 2 --- */}
      <div ref={containerRef2} className="flex flex-wrap flex-row-reverse">
        <div className="w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)]">
          <div className="relative aspect-[1180/900] bg-black z-0 p-[20px_25px] xl:p-[35px_45px] 3xl:p-[50px_70px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
            >
              <source src="/videos/hero-1.mp4" type="video/mp4" />
            </video>
            <div className="w-full h-full flex flex-col justify-between text-white">
              <div>
                <Heading size="heading2" as="h2">
                  U8
                </Heading>
                <Heading
                  size="heading5"
                  as="h5"
                  className="font-normal mb-[20px]"
                >
                  Command the Elements
                </Heading>
                <LinkButton href="#">Explore Models</LinkButton>
              </div>
              <div className="flex flex-wrap gap-[30px]">
                <Stat label="Quad-Motor System" value={1200} suffix=" ps" />
                <Stat
                  label="0 to 100 Kmph"
                  value={3.6}
                  suffix=" Sec"
                  decimals={1}
                />
                <Stat label="Impressive Range" value={1000} suffix=" km" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[320px] xl:w-[490px] 3xl:w-[740px] relative">
          <video
            ref={scrollVideo2}
            preload="metadata"
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
    </section>
  );
}

function Stat({ label, value, suffix, decimals = 0 }) {
  return (
    <div>
      <Text size="text1" as="p" className="leading-none text-white">
        {label}
      </Text>
      <Heading size="heading3" as="h3" className="font-medium text-white">
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
