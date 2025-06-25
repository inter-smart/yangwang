import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { LinkButton } from "@/components/layout/Button";
import Image from "next/image";
import parse from "html-react-parser";

export default function GlobalSection({ data, featuresData }) {
  const {
    title,
    description,
    web_banner,
    web_banner_alt,
    mobile_banner,
    mobile_banner_alt,
    enquire_button_title,
    enquire_button_link,
    offer_button_title,
    offer_button_link,
  } = data;
  return (
    <section className="w-full 3xl:py-[130px_90px] 2xl:py-[80px_50px] xl:py-[50px] py-[40px] relative z-0 after:content-[''] after:absolute after:-z-1 after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)]  ">
      <Image
        src={web_banner}
        alt={web_banner_alt}
        fill
        sizes="(max-width: 1920px) 100vw, 1050px"
        className="-z-2 object-cover transition-transform duration-300 pointer-events-none"
      />
      <div className="container h-full">
        <Heading
          size="heading3"
          as="h3"
          className="text-white font-medium 2xl:mb-[25px] lg:max-w-[750px] max-w-[450px] mx-auto mb-[20px] text-center"
        >
          {title}
        </Heading>
        <Text size="text4" as="div" className="capitalize text-white text-center max-w-[1400px] mx-auto ">
          {parse(description)}
        </Text>
        <div className="flex flex-wrap justify-center w-fit mx-auto 3xl:mb-[430px] lg:mb-[250px] md:mb-[100px] mb-[75px]">
          <div className="xl:px-[13px] px-[4px]">
            <LinkButton
              href={"#service-form"}
              aria-label="Book Test Drive"
              className="text-white bg-black min-w-[100px] sm:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[170px] mt-[35px]  hover:!bg-[#F1D1A8] hover:text-black"
              color="black"
            >
              <span> {enquire_button_title}</span>
            </LinkButton>
          </div>
          <div className="xl:px-[13px] px-[4px]">
            <LinkButton
              href={offer_button_link}
              aria-label="Book Test Drive"
              className="text-black bg-white min-w-[100px] sm:min-w-[120px] xl:min-w-[140px] 3xl:min-w-[170px] mt-[35px]  hover:!bg-[#F1D1A8]"
            >
              <span className="text-black">{offer_button_title}</span>
            </LinkButton>
          </div>
        </div>
        <div className="realtive ">
          <ul className="flex flex-wrap justify-center w-full">
            {featuresData?.map((feature, index) => (
              <li
                key={index}
                className="3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] text-white font-normal leading-normal relative px-[15px_25px] after:content-[] after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-white after:left-0 after:top-0 after:bottom-0 after:m-auto   "
              >
                {feature?.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
