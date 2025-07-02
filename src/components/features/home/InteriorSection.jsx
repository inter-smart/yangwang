import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";
import parse from "html-react-parser";

export default function InteriorSection({ data }) {
  const delmtStyle =
    "3xl:text-[250px] 2xl:text-[220px] xl:text-[160px] lg:text-[130px] sm:text-[92px] text-[72px] leading-none uppercase font-medium text-white/10 pointer-events-none absolute -z-1 bottom-[-15px] lg:bottom-[-25px] xl:bottom-[-30px] 2xl:bottom-[-35px] 3xl:bottom-[-40px] ltr:right-0 rtl:left-0";

  return (
    <section className="w-full h-auto md:h-[468px] lg:h-[520px] xl:h-[550px] 2xl:h-[820px] 3xl:h-[940px] max-h-dvh md:min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block bg-base3">
      <div className="h-full flex flex-wrap">
        <div className="w-full lg:w-6/10 flex md:flex-col">
          <div className="w-full h-auto block py-[30px] md:py-[40px_30px] xl:py-[75px_60px] 3xl:py-[110px_90px] ltr:pl-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] ltr:3xs:pl-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] ltr:2xs:pl-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] ltr:xs:pl-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] ltr:pr-[10px] rtl:pr-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] rtl:3xs:pr-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] rtl:2xs:pr-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] rtl:xs:pr-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] rtl:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:pl-[10px]">
            <Heading size="heading3" as="h3" className="capitalize text-white mb-[6px] xl:mb-[8px] 3xl:mb-[10px]">
              {data?.title}
            </Heading>
            <Text
              size="text3"
              as="div"
              className="text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px] 3xl:max-w-[576px] 2xl:max-w-[500px] lg:max-w-[376px]"
            >
              {parse(data?.description)}
            </Text>
            <LinkButton
              href={`/contact?tab=book`}
              aria-label="Book Test Drive"
              className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px]"
            >
              {data?.button?.text}
            </LinkButton>
          </div>
          <div className="w-full h-auto flex-grow block overflow-hidden relative z-0">
            <Image
              src={data?.image_one}
              alt={data?.image_one_alt_text}
              fill
              sizes="1080px"
              className="-z-2 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className={delmtStyle}>u9</div>
          </div>
        </div>
        <div className="w-full lg:w-4/10">
          <div className="w-full h-auto max-md:aspect-[4/2] md:h-full block overflow-hidden relative z-0">
            <Image
              src={data?.image_two}
              alt={data?.image_two_alt_text}
              fill
              sizes="820px"
              className="-z-2 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className={delmtStyle}>u9</div>
          </div>
        </div>
      </div>
    </section>
  );
}
