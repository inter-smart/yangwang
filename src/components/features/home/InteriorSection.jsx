import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";

export default function InteriorSection() {
  return (
    <section className="w-full h-auto md:h-dvh md:min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block bg-base3">
      <div className="h-full flex flex-wrap">
        <div className="w-full lg:w-6/10 flex md:flex-col">
          <div className="w-full h-auto block py-[30px] md:py-[40px_30px] xl:py-[75px_60px] 3xl:py-[110px_90px] ltr:pl-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] ltr:3xs:pl-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] ltr:2xs:pl-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] ltr:xs:pl-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] ltr:pr-[10px] rtl:pr-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] rtl:3xs:pr-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] rtl:2xs:pr-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] rtl:xs:pr-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] rtl:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:pl-[10px]">
            <Heading
              size="heading3"
              as="h3"
              className="capitalize text-white mb-[6px] xl:mb-[8px] 3xl:mb-[10px]"
            >
              Feel the Drive
            </Heading>
            <Text
              size="text3"
              as="p"
              className="text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
            >
              Reserve your test drive and experience Yangwang <br /> innovation
              from the driver's seat.
            </Text>
            <LinkButton
              href="#"
              aria-label="Book Test Drive"
              className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px] hover:border-white"
            >
              Book Test Drive
            </LinkButton>
          </div>
          <div className="w-full h-auto flex-grow block overflow-hidden relative z-0">
            <Img
              src="interior-1.jpg"
              alt="interior"
              fill
              sizes="1080px"
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
        <div className="w-full lg:w-4/10">
          <div className="w-full h-auto max-md:aspect-[4/2] md:h-full block overflow-hidden relative z-0">
            <Img
              src="interior-2.jpg"
              alt="interior"
              fill
              sizes="820px"
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
