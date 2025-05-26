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

export default function AboutSection() {
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

    // Vehicle animation: move from left to right
    gsap.fromTo(
      carRef1.current,
      { xPercent: -100 },
      {
        xPercent: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      carRef2.current,
      { xPercent: -100 },
      {
        xPercent: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 4,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-auto block pt-[40px] lg:pt-[60px] xl:pt-[110px] 3xl:pt-[160px]"
    >
      <div className="container">
        <div className="3xl:max-w-[1320px] 2xl:max-w-[1080px] xl:max-w-[870px] lg:max-w-[768px] mx-auto">
          <Heading
            size="heading6"
            as="h6"
            className="capitalize mb-[6px] xl:mb-[8px] 3xl:mb-[10px]"
          >
            Yangwang
          </Heading>
          <Heading
            size="heading3"
            as="h2"
            className="uppercase mb-[15px] xl:mb-[20px] 3xl:mb-[40px]"
          >
            U8 & U9
          </Heading>
          <Text
            as="p"
            className="3xl:text-[35px] 2xl:text-[28px] xl:text-[23px] lg:text-[20px] text-[16px] leading-normal font-bold"
          >
            {splitTextToSpans(
              "At Yangwang, we redefine the boundaries of luxury and performance with cutting-edge electric vehicles designed for the future. Born from innovation and driven by excellence, our mission is to deliver an unparalleled driving experience through advanced technology, sustainable design, and uncompromising craftsmanship. Join us as we shape a new era of intelligent mobility."
            )}
          </Text>
        </div>
      </div>

      <div className="w-full h-auto flex justify-between relative z-0 -mt-[20px] xl:-mt-[40px] 3xl:-mt-[60px]" dir="ltr">
        <Img
          src="about-bg-1.png"
          alt="about-bg-1"
          width={603}
          height={295}
          className="3xl:w-[680px] xl:w-[460px] lg:w-[320px]"
        />
        <Img
          src="about-bg-2.png"
          alt="about-bg-2"
          width={494}
          height={266}
          className="3xl:w-[700px] xl:w-[460px] lg:w-[320px]"
        />
        <Img
          ref={carRef1}
          src="about-vehicle-1.png"
          alt="about-vehicle-1"
          width={207}
          height={89}
          className="3xl:w-[309px] xl:w-[206px] lg:w-[120px] aspect-[207/89] object-contain absolute z-0 bottom-[4px] xl:bottom-[6px] 3xl:bottom-[10px] left-[30%]"
        />
        <Img
          ref={carRef2}
          src="about-vehicle-2.png"
          alt="about-vehicle-2"
          width={219}
          height={60}
          className="3xl:w-[330px] xl:w-[220px] lg:w-[140px] aspect-[219/60] object-contain absolute z-0 bottom-[4px] xl:bottom-[6px] 3xl:bottom-[10px] left-[52%]"
        />
      </div>
    </section>
  );
}
