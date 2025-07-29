import CountDown from "@/components/common/CountDown";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export default function LaunchOffersSection({ data }) {
  return (
    <section className="w-full h-[60dvh] md:h-auto min-h-[368px] py-[40px] md:py-[160px_140px] lg:py-[200px_280px] xl:py-[220px_190px] 2xl:py-[290px_260px] 3xl:py-[330px_290px] flex md:items-center relative z-0">
      <picture className="absolute -z-1 inset-0">
        <source
          media="(max-width: 768px)"
          srcSet="/images/mob-launchOffers-bg-1.jpg"
        />
        <Image
          src={data?.web_banner}
          alt={data?.web_banner_alt_text || "Launch Offers banner"}
          fill
          sizes="100vw"
          className="-z-1 object-cover"
        />
      </picture>
      <div className="container">
        <div className="flex ltr:md:justify-end">
          <div className="xl:max-w-[330px] 2xl:max-w-[440px] 3xl:max-w-[500px]">
            <Link
              href={data?.button_link}
              className="3xl:text-[25px] 2xl:text-[21px] xl:text-[16px] lg:text-[14px] text-[12px] font-normal leading-none capitalize text-white mb-[10px] xl:mb-[15px] 2xl:mb-[25px] flex items-center gap-[3px] xl:gap-[5px] 3xl:gap-[7px]"
            >
              {data?.title}
              <Img
                src="icon-left-arrow.svg"
                alt="icon-left-arrow"
                width={22}
                height={17}
                className="w-[12px] xl:w-[14px] 3xl:w-[22px] rtl:-scale-x-100 animate-right"
              />
            </Link>
            <Heading
              size="heading3"
              as="h3"
              className="capitalize text-white mb-[6px] xl:mb-[8px] 3xl:mb-[10px]"
            >
              {data?.subtitle}
            </Heading>
            <Text
              size="text3"
              as="div"
              className="text-white mb-[15px] xl:mb-[30px] 2xl:mb-[50px] 3xl:mb-[60px]"
            >
              {parse(data?.description)}
            </Text>
            <CountDown
              date={data?.date_time}
              link={data?.button_link}
              text={data?.button_text}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
