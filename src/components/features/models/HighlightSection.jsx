"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HighlightSection({ interiorData, exteriorHighlights }) {
  const highlightData = [interiorData, exteriorHighlights];
  const containerRefs = useRef([]);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeItemIndexes, setActiveItemIndexes] = useState(highlightData?.map(() => 0));

  useEffect(() => {
    const triggers = highlightData?.map((section, sectionIndex) => {
      const container = containerRefs?.current[sectionIndex];
      if (!container) return null;

      const totalItems = section?.highlights?.length;

      return ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${totalItems * 600}`,
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(Math.floor(progress * totalItems), totalItems - 1);
          setActiveItemIndexes((prev) => prev?.map((v, i) => (i === sectionIndex ? index : v)));
        },
      });
    });

    return () => {
      triggers.forEach((trigger) => trigger && trigger.kill());
    };
  }, []);

  const handleItemClick = (sectionIndex, itemIndex) => {
    setActiveSectionIndex(sectionIndex);
    setActiveItemIndexes((prev) => prev.map((val, i) => (i === sectionIndex ? itemIndex : val)));
  };

  return (
    <section className="w-full h-auto block bg-black overflow-hidden">
      {highlightData?.map((section, sectionIndex) => {
        const activeIndex = activeItemIndexes[sectionIndex];
        const activeItem = section?.highlights[activeIndex];

        return (
          <div
            key={`section-${sectionIndex}`}
            ref={(el) => (containerRefs.current[sectionIndex] = el)}
            className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] flex items-end py-[40px] lg:py-[60px] xl:py-[90px] 2xl:py-[140px] 3xl:py-[160px] overflow-hidden relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/40 before:pointer-events-none"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem?.media?.web_banner?.url}
                initial={{ opacity: 0.6, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.06 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full -z-2"
              >
                {activeItem?.media?.type === "video" ? (
                  <video
                    autoPlay
                    preload="auto"
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    aria-label="Video player"
                    poster={activeItem?.media?.banner_video?.thumbnail}
                  >
                    <source src={activeItem?.media?.banner_video?.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <picture>
                    <source media="(max-width: 768px)" srcSet={activeItem?.media?.banner_mobile?.url} />
                    <Image
                      src={activeItem?.media?.banner_web?.url}
                      alt={activeItem?.media?.banner_web?.alt_text}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </picture>
                )}
              </motion.div>
            </AnimatePresence>
            <div className="container">
              <div>
                <Heading
                  size="heading3"
                  as="h3"
                  className="!font-normal text-white mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]"
                >
                  {section?.title}
                </Heading>
                <div className="ltr:border-l-[1px] rtl:border-r-[1px] border-white/50 border-dashed mx-[5px]">
                  {section?.highlights?.map((desc, idx) => (
                    <div
                      key={`desc-${idx}`}
                      className={`cursor-pointer mb-[15px] lg:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[45px] last:m-0 ltr:pl-[15px] ltr:lg:pl-[20px] ltr:2xl:pl-[30px] rtl:pr-[15px] rtl:lg:pr-[20px] rtl:2xl:pr-[30px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:top-[6px] before:lg:top-[6px] before:2xl:top-[10px] ltr:before:left-0 rtl:before:right-0 ltr:before:-translate-x-1/2 rtl:before:translate-x-1/2 before:w-[5px] before:lg:w-[7px] before:2xl:w-[9px] before:h-auto before:aspect-square before:rounded-full before:shadow-[0_0_0_4px_rgba(217,217,217,0.2)] before:lg:shadow-[0_0_0_6px_rgba(217,217,217,0.2)] before:2xl:shadow-[0_0_0_10px_rgba(217,217,217,0.2)] before:pointer-events-none ${
                        activeIndex === idx ? "before:bg-white" : "before:bg-[#d9d9d9]"
                      }`}
                      onClick={() => handleItemClick(sectionIndex, idx)}
                    >
                      <Text size="text1" as="p" className={` ${activeIndex === idx ? "!font-bold text-base1 " : "text-white"}`}>
                        {desc.title}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
