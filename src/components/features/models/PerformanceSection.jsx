"use client";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import parse from "html-react-parser";

export default function PerformanceSection({ performanceData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = performanceData[activeIndex];

  console.log("performanceData", performanceData);
  console.log("activeItem", activeItem);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full h-auto lg:h-dvh lg:min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[100px] 3xl:py-[120px] bg-black overflow-hidden relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/20 before:pointer-events-none">
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
              playsInline
              width={1920}
              height={1080}
              muted
              loop
              className="w-full h-full object-cover"
              aria-label="Video player"
              poster={activeItem?.media?.banner_video?.thumbnail}
            >
              <source
                src={activeItem?.media?.banner_video?.url}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <picture className="absolute -z-2 inset-0">
              <source
                media="(max-width: 768px)"
                srcSet={activeItem?.media?.mobile_banner?.url}
              />
              <Image
                src={activeItem?.media?.web_banner?.url}
                alt={activeItem?.media?.web_banner?.alt_text}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </picture>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="container h-full">
        <div className="h-full flex flex-col justify-between">
          <Heading
            size="heading3"
            as="h3"
            className="text-center capitalize text-white mb-[60px] xl:mb-[40px] 3xl:mb-[60px]"
          >
            {activeItem?.title}
          </Heading>
          <Accordion
            type="button"
            collapsible
            className="w-full"
            defaultValue={`item-${activeIndex}`}
          >
            {performanceData?.map((item, index) => {
              return (
                <AccordionItem
                  key={`accordion-${index}`}
                  value={`item-${index}`}
                  className="border-none"
                >
                  <AccordionTrigger
                    onClick={() => handleItemClick(index)}
                    className="3xl:text-[30px] 2xl:text-[26px] xl:text-[20px] lg:text-[16px] sm:text-[14px] text-[12px] font-medium leading-none capitalize text-white [&[data-state=open]]:text-base1 max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] 2xl:max-w-[310px] 3xl:max-w-[376px] max-lg:py-2 flex items-center [&>span]:before:content-[''] [&>span]:before:w-[10px] [&>span]:before:h-[18px] [&>span]:before:block [&>span]:before:bg-[url(/images/acco-down.svg)] [&>span]:before:bg-center [&>span]:before:bg-contain [&[data-state=open]>span]:before:rotate-90 [&[data-state=open]>span]:before:filter-[brightness(0)_saturate(100%)_invert(91%)_sepia(12%)_saturate(1115%)_hue-rotate(330deg)_brightness(99%)_contrast(91%)] rtl:[&>span]:before:rotate-180 [&>span]:transition-all duration-300"
                  >
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-[400px] xl:max-w-[430px] 2xl:max-w-[560px] 3xl:max-w-[660px] lg:max-h-[200px] 2xl:max-h-[250px] 3xl:max-h-[300px] overflow-y-auto scrollbar-hide ltr:pl-[5px] ltr:lg:pl-[10px] ltr:2xl:pl-[15px] rtl:pr-[5px] rtl:lg:pr-[10px] rtl:2xl:pr-[15px]">
                    <div
                      className="typography ltr:border-l-[1px] rtl:border-r-[1px] border-white/50 border-dashed mx-[5px] [&>ul>li]:text-white [&>ul>li]:list-none [&>ul]:p-0 ltr:[&>ul>li]:pl-[15px] ltr:[&>ul>li]:lg:pl-[20px] ltr:[&>ul>li]:2xl:pl-[30px] rtl:[&>ul>li]:pr-[15px] rtl:[&>ul>li]:lg:pr-[20px] rtl:[&>ul>li]:2xl:pr-[30px] [&>ul>li]:relative [&>ul>li]:z-0 [&>ul>li]:before:content-[''] [&>ul>li]:before:block [&>ul>li]:before:absolute [&>ul>li]:before:-z-1 [&>ul>li]:before:top-[6px] [&>ul>li]:before:lg:top-[6px] [&>ul>li]:before:2xl:top-[8px] [&>ul>li]:before:3xl:top-[10px] ltr:[&>ul>li]:before:left-0 rtl:[&>ul>li]:before:right-0 ltr:[&>ul>li]:before:-translate-x-1/2 rtl:[&>ul>li]:before:translate-x-1/2 [&>ul>li]:before:w-[5px] [&>ul>li]:before:lg:w-[7px] [&>ul>li]:before:2xl:w-[9px] [&>ul>li]:before:h-auto [&>ul>li]:before:aspect-square [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-white [&>ul>li]:before:shadow-[0_0_0_4px_rgba(217,217,217,0.2)] [&>ul>li]:before:lg:shadow-[0_0_0_6px_rgba(217,217,217,0.2)] [&>ul>li]:before:2xl:shadow-[0_0_0_8px_rgba(217,217,217,0.2)] [&>ul>li]:before:pointer-events-none [&>ul>li]:before:opacity-0 [&>ul>li:hover]:before:opacity-100 [&>ul>li]:hover:font-bold [&>ul>li:first-child]:before:opacity-100 [&>ul>li:first-child]:font-bold [&>ul>li:not(:hover)]:before:opacity-0 [&>ul>li:not(:hover)]:font-normal [&>ul>li]:before:transition-all [&>ul>li]:transition-all [&>ul>li]:duration-300"
                      // dangerouslySetInnerHTML={{ __html: item.description }}
                    >
                      {parse(item.points)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
