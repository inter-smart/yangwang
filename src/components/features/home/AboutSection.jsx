"use client";

import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function splitTextToSpans(text) {
  return text.split("").map((char, i) => (
    <span key={i} className="inline-block text-[#aaaaaa] will-change-transform">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export default function AboutSection({ data }) {

  const sectionRef = useRef(null);
  const carRef1 = useRef(null);
  const carRef2 = useRef(null);

  useEffect(() => {
    const targets = sectionRef.current?.querySelectorAll("span");
    if (!targets || !carRef1.current) return;
    if (!targets || !carRef2.current) return;

    // Character animation
    gsap.to(targets, {
      color: "#000",
      stagger: 0.02,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });
    gsap.fromTo(
      carRef1.current,
      { xPercent: -100 },
      {
        xPercent: 0,
        ease: "power2.out",
        duration: 2,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          toggleActions: "play reset play none",
        },
      }
    );
    gsap.fromTo(
      carRef2.current,
      { xPercent: -100 },
      {
        xPercent: 0,
        ease: "power1.out",
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          toggleActions: "play reset play none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-auto block pt-[40px] lg:pt-[60px] xl:pt-[110px] 3xl:pt-[160px] overflow-hidden">
      <div className="container">
        <div className="3xl:max-w-[1320px] 2xl:max-w-[1080px] xl:max-w-[870px] lg:max-w-[768px] sm:max-w-[576px] mx-auto">
          <Heading size="heading6" as="h6" className="font-normal capitalize text-[#4c4c4c] mb-[6px] xl:mb-[8px] 3xl:mb-[10px]">
            {data?.name}
          </Heading>
          <Heading size="heading3" as="h2" className="uppercase text-black mb-[15px] xl:mb-[20px] 3xl:mb-[40px]">
            {data?.modal}
          </Heading>
          <Text
            as="p"
            className="3xl:text-[35px] 2xl:text-[30px] xl:text-[23px] lg:text-[20px] sm:text-[16px] text-[14px] leading-normal font-bold"
          >
            {splitTextToSpans(data?.description)}
          </Text>
        </div>
      </div>

      <div className="w-full h-auto flex justify-between relative z-0 -mt-[20px] xl:-mt-[40px] 3xl:-mt-[60px]" dir="ltr">
        <Img
          src="about-bg-1.png"
          alt="about-bg-1"
          width={603}
          height={295}
          className="3xl:w-[740px] xl:w-[560px] lg:w-[320px] sm:w-[220px] w-[180px]"
        />
        <Img
          src="about-bg-2.png"
          alt="about-bg-2"
          width={494}
          height={266}
          className="3xl:w-[790px] xl:w-[540px] lg:w-[320px] sm:w-[220px] w-[180px]"
        />
        <Img
          ref={carRef1}
          src="about-vehicle-1.png"
          alt="about-vehicle-1"
          width={207}
          height={89}
          className="3xl:w-[309px] xl:w-[206px] lg:w-[120px] w-[80px] aspect-[207/89] object-contain absolute z-0 bottom-[4px] xl:bottom-[6px] 3xl:bottom-[10px] left-[26%] lg:left-[30%]"
        />
        <Img
          ref={carRef2}
          src="about-vehicle-2.png"
          alt="about-vehicle-2"
          width={219}
          height={60}
          className="3xl:w-[330px] xl:w-[220px] lg:w-[140px] w-[80px] aspect-[219/60] object-contain absolute z-0 bottom-[4px] xl:bottom-[6px] 3xl:bottom-[10px] left-[56%] lg:left-[52%]"
        />
      </div>
    </section>
  );
}
