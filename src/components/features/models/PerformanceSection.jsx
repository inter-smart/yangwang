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

const accordionData = [
  {
    title: "Ultimate Performance",
    description:
      "<ul><li>Over 1,000 horsepower</li><li>Millisecond - level wheel - end status recognition, precise four - wheel torque distribution, easily challenge a 100% gradient,</li><li>No need for “pendulum” assistance and run - up, directly climb to the top of the Alxa Big V - ditch</li><li>Premium sound system</li></ul>",
  },
  {
    title: "ultimate Safe",
    description:
      "<ul><li>Over 1,000 horsepower</li><li>Millisecond - level wheel - end status recognition, precise four - wheel torque distribution, easily challenge a 100% gradient,</li><li>No need for “pendulum” assistance and run - up, directly climb to the top of the Alxa Big V - ditch</li><li>Premium sound system</li></ul>",
  },
  {
    title: "ultimate experience",
    description:
      "<ul><li>Over 1,000 horsepower</li><li>Millisecond - level wheel - end status recognition, precise four - wheel torque distribution, easily challenge a 100% gradient,</li><li>No need for “pendulum” assistance and run - up, directly climb to the top of the Alxa Big V - ditch</li><li>Premium sound system</li></ul>",
  },
];

export default function PerformanceSection() {
  const [activeItemIndexes, setActiveItemIndexes] = useState(
    accordionData.map(() => 0)
  );

  const handleItemClick = (sectionIndex, itemIndex) => {
    setActiveSectionIndex(sectionIndex);
    setActiveItemIndexes((prev) =>
      prev.map((val, i) => (i === sectionIndex ? itemIndex : val))
    );
  };

  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[100px] 3xl:py-[120px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/20 before:pointer-events-none">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/mob-u8-performance-bg.jpg"
        />
        <Image
          src="/images/u8-performance-bg.jpg"
          alt="u8-performance-bg"
          fill
          sizes="100vw"
          className="-z-2 object-cover"
        />
      </picture>
      <div className="container h-full">
        <div className="h-full flex flex-wrap flex-col justify-between gap-[20px]">
          <Heading size="heading3" as="h3" className="text-center text-white">
            Ultimate Performance
          </Heading>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {accordionData.map((item, index) => (
              <AccordionItem
                key={`accordion-${index}`}
                value={`item-${index}`}
                className="border-none"
              >
                <AccordionTrigger
                  className="3xl:text-[30px] 2xl:text-[26px] xl:text-[20px] lg:text-[16px] sm:text-[14px] text-[12px] font-medium leading-none capitalize text-white [&[data-state=open]]:text-base1 3xl:max-w-[376px] flex items-center [&>span]:before:content-[''] [&>span]:before:w-[10px] [&>span]:before:h-[18px] [&>span]:before:block [&>span]:before:bg-[url(/images/acco-down.svg)] [&>span]:before:bg-center [&>span]:before:bg-contain [&[data-state=open]>span]:before:rotate-90 [&[data-state=open]>span]:before:filter-[brightness(0)_saturate(100%)_invert(91%)_sepia(12%)_saturate(1115%)_hue-rotate(330deg)_brightness(99%)_contrast(91%)] [&>span]:transition-all duration-300"
                  onClick={() => handleItemClick(sectionIndex, descIndex)}
                >
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="3xl:max-w-[680px] ltr:pl-[5px] ltr:lg:pl-[10px] ltr:2xl:pl-[15px]">
                  <div
                    className="typography ltr:border-l-[1px] rtl:border-r-[1px] border-white/50 border-dashed mx-[5px] [&>ul>li]:text-white [&>ul>li]:list-none [&>ul]:p-0 [&>ul>li]:pl-[15px] [&>ul>li]:lg:pl-[20px] [&>ul>li]:2xl:pl-[30px] [&>ul>li]:relative [&>ul>li]:z-0 [&>ul>li]:before:content-[''] [&>ul>li]:before:block [&>ul>li]:before:absolute [&>ul>li]:before:-z-1 [&>ul>li]:before:top-[6px] [&>ul>li]:before:lg:top-[6px] [&>ul>li]:before:2xl:top-[10px] [&>ul>li]:before:left-0 [&>ul>li]:before:-translate-x-1/2 [&>ul>li]:before:w-[5px] [&>ul>li]:before:lg:w-[7px] [&>ul>li]:before:2xl:w-[9px] [&>ul>li]:before:h-auto [&>ul>li]:before:aspect-square [&>ul>li]:before:rounded-full [&>ul>li]:before:bg-white [&>ul>li]:before:shadow-[0_0_0_4px_rgba(217,217,217,0.2)] [&>ul>li]:before:lg:shadow-[0_0_0_6px_rgba(217,217,217,0.2)] [&>ul>li]:before:2xl:shadow-[0_0_0_8px_rgba(217,217,217,0.2)] [&>ul>li]:before:pointer-events-none [&>ul>li]:before:opacity-0 [&>ul>li:hover]:before:opacity-100 [&>ul>li]:hover:font-bold [&>ul>li:first-child]:before:opacity-100 [&>ul>li:first-child]:font-bold [&>ul>li]:before:transition-all [&>ul>li]:transition-all [&>ul>li]:duration-300"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
