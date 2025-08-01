"use client";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import CountUp from "react-countup";
import parse from "html-react-parser";

export default function RangeSection({ data }) {
  return (
    <section className="w-full h-auto block bg-[#2b2b2b] overflow-hidden relative z-0 py-[20px] lg:py-[10px_30px]">
      <picture className="3xl:w-[740px] xl:w-[610px] lg:w-[576px] w-[576px] h-full absolute top-0 left-0 bottom-0 -z-1">
        <source
          media="(max-width: 768px)"
          srcSet={data?.distance_mobile_banner?.url}
        />
        <Image
          src={data?.distance_web_banner?.url}
          alt={data?.distance_web_banner?.alt_text}
          width={648}
          height={806}
          className="3xl:w-[740px] xl:w-[610px] lg:w-[576px] w-[576px] h-full block object-conta
           object-left absolute top-0 left-0 bottom-0 -z-1"
        />
      </picture>
      <div className="3xl:text-[12px] 2xl:text-[10px] xl:text-[8px] text-[6px] font-normal leading-normal text-white absolute z-0 bottom-[15px] xl:bottom-[20px] 3xl:bottom-[25px] ltr:right-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] ltr:3xs:right-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] ltr:2xs:right-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] ltr:xs:right-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:right-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:right-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:right-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:right-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:right-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:right-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:left-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] rtl:3xs:left-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] rtl:2xs:left-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] rtl:xs:left-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] rtl:sm:left-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:left-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:left-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:left-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:left-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:left-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]">
        * This is an estimate
      </div>
      <div className="container">
        <div className="flex flex-wrap gap-y-[20px] items-center justify-between [&>*]:px-[20px] xl:[&>*]:px-[60px] 3xl:[&>*]:px-[80px]">
          <div className="max-w-[40%]">
            <Image
              src={data?.distance_map_image?.url}
              alt={data?.distance_map_image?.alt_text || "Distance map image"}
              width={590}
              height={590}
            />
          </div>
          <div className="max-w-[60%]">
            <div className="relative z-0 inline-block lg:translate-y-2/5">
              <Heading
                as="h2"
                className="text-[32px] sm:text-[48px] lg:text-[72px] xl:text-[150px] 2xl:text-[200px] 3xl:text-[220px] font-medium leading-none text-transparent bg-gradient-to-b from-white via-80% via-white/10 to-transparent bg-clip-text"
              >
                <CountUp
                  end={parseInt(data?.distance_range_km) || 1000}
                  duration={3}
                  useGrouping={false}
                  enableScrollSpy
                />
              </Heading>
              <Heading
                size="heading5"
                as="h5"
                className="text-white absolute z-1 top-[50%] left-[90%] lg:left-[88%] -translate-y-1/2"
              >
                {data?.distance_range_km_title || "Kilometres"}
              </Heading>
            </div>
            <Heading
              size="heading3"
              as="h3"
              className="max-sm:text-[12px] max-lg:text-[14px] leading-tight font-medium text-white mx-[5px] lg:mx-[10px] xl:mx-[15px] 3xl:mx-[20px] my-[15px] xl:my-[20px] 3xl:my-[30px]"
            >
              {parse(data?.distance_range_km_desc) ||
                "Go the Distance on a Single Charge"}
            </Heading>
            <Image
              src={data?.distance_right_image?.url}
              alt={
                data?.distance_right_image?.alt_text || "Distance right image"
              }
              width={608}
              height={305}
              className="3xl:w-[370px] 2xl:w-[340px] xl:w-[260px] sm:w-[240px] w-[200px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
