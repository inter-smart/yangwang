import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Link from "next/link";
import parse from "html-react-parser";
import Image from "next/image";

export default function OfferInfoSection({ data, offersInfo }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[40px_30px] lg:py-[60px_40px] xl:py-[110px_0] 2xl:py-[130px_0]">
      <div className="container">
        <div className="text-center lg:max-w-[768px] xl:max-w-[880px] 2xl:max-w-[1140px] 3xl:max-w-[1330px] mx-auto mb-[30px] lg:mb-[40px] xl:mb-[70px] 2xl:mb-[90px] 3xl:mb-[120px]">
          <Heading
            size="heading3"
            as="h3"
            className="leading-tight !font-bold text-center text-black mb-[20px] xl:mb-[30px] 2xl:mb-[50px] 3xl:mb-[60px] lg:max-w-[90%] mx-auto"
          >
            {data?.title}
          </Heading>
          <Text size="text1" as="div" className="text-black">
            {parse(data?.description)}
          </Text>
        </div>
      </div>
      {offersInfo?.map((item, index) => (
        <div key={`offers-${index}`} className={`flex flex-wrap ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
          <div className={`w-full ${index % 2 === 0 ? "sm:w-50/100 md:w-48/100" : "sm:w-50/100 md:w-52/100"}`}>
            <div className="w-full h-auto sm:h-full overflow-hidden relative z-0 max-sm:aspect-video">
              <Image
                src={item?.image}
                alt={item?.image_alt || "Offer image"}
                fill
                sizes="900px"
                className="object-cover -z-1 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className={`w-full ${index % 2 === 0 ? "sm:w-50/100 md:w-52/100" : "sm:w-50/100 md:w-48/100"}`}>
            <div
              className={`w-full h-full p-[30px_40px] xl:p-[60px_80px] 2xl:p-[75px_100px] 3xl:p-[90px_120px] ${
                index % 2 === 0
                  ? "bg-[#5949a7] max-3xs:px-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] max-2xs:px-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] max-xs:px-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] max-sm:px-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]"
                  : "bg-[#262626] max-3xs:px-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] max-2xs:px-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] max-xs:px-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] max-sm:px-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]"
              }`}
            >
              <Heading size="heading3" as="h3" className="text-white mb-[3px] xl:mb-[4px] 2xl:mb-[6px] 3xl:mb-[10px]">
                {item?.title}
                {/* No data provided in api */}
              </Heading>
              <Heading size="heading3" as="h3" className="text-white mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                {item?.subtitle}
              </Heading>
              <Text size="text1" as="div" className="font-bold text-[#cb9576] mb-[4px] xl:mb-[6px] 3xl:mb-[10px]">
                <b> {parse(item?.warranty_title)}</b>
              </Text>
              <Text size="text1" as="div" className="font-normal text-white mb-[4px] xl:mb-[6px] 3xl:mb-[10px]">
                {parse(item?.warranty_description)}
              </Text>
              <ul className="mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                {item?.offer_points?.map((offer, index) => (
                  <li
                    key={`offersInfo-${index}`}
                    className="my-[15px] xl:my-[20px] 2xl:my-[25px] ltr:pl-[20px] ltr:xl:pl-[30px] ltr:2xl:pl-[40px] ltr:3xl:pl-[50px] rtl:pr-[20px] rtl:xl:pr-[30px] rtl:2xl:pr-[40px] rtl:3xl:pr-[50px] last:mb-0 relative z-0 before:content-[''] before:block before:w-[15px] before:xl:w-[20px] before:2xl:w-[25px] before:3xl:w-[30px] before:aspect-square before:absolute before:z-0 ltr:before:left-0 rtl:before:right-0 before:-top-[2px] before:xl:-top-[2px] before:3xl:-top-[5px] before:bg-[url(/images/offer-list-icon.svg)] before:bg-center before:bg-contain"
                  >
                    <Heading size="heading6" as="h6" className="font-normal text-white">
                      {parse(offer?.point)}
                    </Heading>
                  </li>
                ))}
              </ul>
              <LinkButton
                href="#"
                aria-label="Enquire Now"
                color="black"
                className="min-w-[80px] sm:min-w-[100px] xl:min-w-[127px] 2xl:min-w-[146px] 3xl:min-w-[167px]"
              >
                {item?.button_text}
              </LinkButton>
              <Text
                size="text4"
                as="p"
                className="text-white mt-[15px] xl:mt-[20px] 2xl:mt-[30px] transition-color duration-300 hover:text-base1"
              >
                <Link href={item?.terms_and_condition_link}>*Terms and Conditions Apply</Link>
              </Text>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
