import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import parse from "html-react-parser";
import Image from "next/image";

export default function ServiceSection({ data, partsData }) {
  const {
    button_link,
    button_text,
    contact_number,
    contact_title,
    description,
    mobile_banner,
    mobile_banner_alt,
    title,
    web_banner,
    web_banner_alt,
    ownership_highlights,
  } = data;

  return (
    <section className="w-full h-auto block relative z-0">
      <div className="flex flex-wrap max-md:flex-col-reverse">
        <div className="w-full md:w-1/2 max-md:min-h-[300px] group overflow-hidden relative z-0">
          <Image
            src={web_banner}
            alt={web_banner_alt}
            fill
            sizes="970px"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 ltr:3xl:pl-[75px] ltr:2xl:pl-[65px] ltr:xl:pl-[45px] ltr:pl-[25px] ltr:pr-[15px] ltr:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:3xl:pl-[75px] rtl:2xl:pl-[65px] rtl:xl:pl-[45px] rtl:pl-[25px] rtl:pr-[15px] rtl:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] 3xl:py-[115px_120px] xl:py-[100px_90px] lg:py-[80px_70px] md:py-[65px_50px] py-[30px_35px]">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Heading size="heading3" as="h3" className="capitalize text-black 2xl:mb-[35px] mb-[20px]">
                {title}
              </Heading>
              <Text size="text4" as="div" className="capitalize text-black">
                {parse(description) || "No description"}
              </Text>

              {/* find in from the api docs */}
              <div className="w-full 2xl:mt-[40px] mt-[24px]">
                <div className="relative z-1 flex flex-wrap items-center -my-[5px] 2xl:-my-[8px] -mx-[10px] 3xl:-mx-[13px]">
                  {ownership_highlights?.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 xl:w-1/3 py-[5px] 2xl:py-[8px] px-[10px] 3xl:px-[13px]">
                      <ServiceBx item={item} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-wrap items-center justify-between -m-[5px] 2xl:mt-[60px] mt-[35px]">
                <div className="p-[5px]">
                  <LinkButton
                    href={button_link}
                    aria-label="Book Test Drive"
                    className="min-w-[70px] sm:min-w-[90px] xl:min-w-[120px] 3xl:min-w-[145px] hover:!bg-[#F1D1A8] hover:!border-none"
                    color="black"
                  >
                    {button_text}
                  </LinkButton>
                </div>
                <Text size="text4" as="p" className="capitalize text-center text-black p-[5px]">
                  {contact_title}:
                  <a
                    href="tel: 400-039-6666"
                    className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] text-[12px] text-[#5949A7] underline font-medium not-italic leading-none"
                  >
                    {contact_number}
                  </a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBx({ item }) {
  return (
    <div className="w-full h-fit">
      <div className="flex items-center">
        <div className="group 2xl:w-[50px] xl:w-[30px] w-[20px] 2xl:h-[50px] xl:h-[30px] h-[20px] 2xl:aspect-50/50 aspect-30/30">
          <Image
            src={item?.image}
            alt={item?.image_alt}
            width={50}
            height={50}
            className="w-full h-full object-contain transition-transform duration-600 group-hover:scale-[1.05]"
          />
        </div>
        <div className="text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[18px] leading-[1.4] 2xl:font-normal font-medium text-[#151515] 2xl:w-[calc(100%-50px)] xl:w-[calc(100%-30px)] w-[calc(100%-20px)] ltr:pl-[10px] ltr:2xl:pl-[15px] rtl:pr-[10px] rtl:2xl:pr-[15px]">
          {item.title}
        </div>
      </div>
    </div>
  );
}
