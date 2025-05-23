"use client";
import CountDown from "@/components/common/CountDown";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";

export default function LaunchOffersSection() {
  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] flex items-center relative z-0">
      <Img
        src="launchOffers-bg-1.jpg"
        alt="launchOffers-bg"
        fill
        sizes="1920px"
        className="-z-1 object-cover"
      />

      <div className="container">
        <div className="flex justify-end">
          <div className="xl:max-w-[330px] 3xl:max-w-[500px]">
            <Heading
              as="h6"
              className="3xl:text-[25px] 2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[12px] font-normal leading-none capitalize text-white mb-[10px] xl:mb-[15px] 3xl:mb-[20px] flex items-center gap-[3px] xl:gap-[5px] 3xl:gap-[7px]"
            >
              Drive the Future Today
              <Img
                src="icon-left-arrow.svg"
                alt="icon-left-arrow"
                width={22}
                height={17}
                className="w-[12px] xl:w-[14px] 3xl:w-[22px]"
              />
            </Heading>
            <Heading
              size="heading3"
              as="h3"
              className="capitalize text-white mb-[6px] xl:mb-[8px] 3xl:mb-[10px]"
            >
              Drive the Future Today
            </Heading>
            <Text
              as="p"
              className="3xl:text-[25px] 2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[12px] font-normal leading-normal text-white mb-[15px] xl:mb-[30px] 3xl:mb-[40px]"
            >
              Complimentary premium upgrade package.
            </Text>
            <CountDown date="2025-06-22T00:00:00" />
          </div>
        </div>
      </div>
    </section>
  );
}
