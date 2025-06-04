import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import parse from "html-react-parser";
import Image from "next/image";

export default function PartsSection({ data }) {
  const {
    title,
    description,
    button_text,
    button_link,
    contact_title,
    email,
    email_text,
    mobile_banner,
    mobile_banner_alt,
    phone,
    phone_text,
    web_banner,
    web_banner_alt,
    address,
  } = data;
  return (
    <section className="w-full h-auto block relative z-0">
      <div className="flex flex-wrap">
        <div
          className="w-full md:w-1/2 ltr:3xl:pl-[75px] ltr:2xl:pl-[65px] ltr:xl:pl-[45px] ltr:pl-[25px] ltr:pr-[15px] ltr:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] 
                rtl:3xl:pl-[75px] rtl:2xl:pl-[65px] rtl:xl:pl-[45px] rtl:pl-[25px] rtl:pr-[15px] rtl:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] 3xl:py-[115px_120px] xl:py-[100px_90px] lg:py-[80px_70px] md:py-[65px_50px] py-[30px_35px]"
        >
          <div className="h-full flex flex-wrap items-center 2xl:pl-[50px] xl:pl-[20px] md:pl-[15px]">
            <div className="h-fit w-full">
              <Heading size="heading3" as="h3" className="capitalize text-black 2xl:mb-[35px] mb-[20px]">
                {title}
              </Heading>
              <Text size="text4" as="div" className="capitalize text-black mb-[15px]">
                {parse(description) || "No description"}
              </Text>

              <div className="w-full flex flex-wrap justify-between -m-[5px] 2xl:mt-[60px] mt-[30px]">
                <div className="p-[5px] flex items-end">
                  <LinkButton
                    href={button_link}
                    aria-label="Book Test Drive"
                    className="min-w-[70px] sm:min-w-[90px] xl:min-w-[95px] 3xl:min-w-[145px] hover:!bg-[#F1D1A8] hover:!border-none"
                    color="black"
                  >
                    {button_text}
                  </LinkButton>
                </div>
                <div className="w-fit p-[5px]">
                  <div className="flex">
                    <div className="2xl:w-[26px] w-[20px] h-fit flex item-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                        <path
                          d="M12.9204 1.77563C16.8107 1.77563 19.9648 5.05097 19.9648 9.092C19.9648 11.3728 16.9966 16.1368 14.7577 19.7987C14.0234 21 13.3673 22.0826 12.9204 22.92C12.4882 22.1111 11.8352 21.0253 11.0984 19.8071C8.87109 16.1268 5.875 11.2341 5.875 9.092C5.875 5.05097 9.02902 1.77563 12.9204 1.77563ZM16.0678 8.8162C16.0678 7.01479 14.6541 5.54614 12.9204 5.54614C11.1857 5.54614 9.77195 7.01479 9.77195 8.8162C9.77195 10.6166 11.1857 12.0847 12.9204 12.0847C14.6541 12.0847 16.0678 10.6166 16.0678 8.8162Z"
                          fill="#5949A7"
                        />
                      </svg>
                    </div>
                    <div className="2xl:pl-[8px] pl-[5px]">
                      <div className="text-[#1F1D1D] text-[13px] 2xl:text-[18px] font-bold not-italic leading-none capitalize mb-[6px]">
                        {contact_title}
                      </div>
                      <div className="text-[#1F1D1D] 2xl:text-[16px] text-[11px] font-normal not-italic leading-[22px] capitalize mb-[6px]">
                        {parse(address) || "No address"}
                      </div>
                      <div className="flex flex-wrap -my-[4px] -mx-[8px]">
                        <div className="flex text-[#1F1D1D] 2xl:text-[16px] text-[11px] font-medium leading-none px-[8px] py-[4px] relative after:content-[''] after:absolute after:right-0 after:top-0 after:m-auto after:w-[2px] after:h-full after:bg-[#F1D1A8]">
                          Email:
                          <a
                            href="mailto:info@Yangwang.com"
                            className="flex ml-[5px] duration-500 ease-in-out hover:text-[#5949A7]"
                          >
                            {" "}
                            {email}
                          </a>
                        </div>
                        <div className="flex text-[#1F1D1D] 2xl:text-[16px] text-[11px] font-medium leading-none px-[8px] py-[4px]">
                          Phone:
                          <a href="tel:+968 24578000" className="flex ml-[5px] duration-500 ease-in-out hover:text-[#5949A7]">
                            {" "}
                            {phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-md:min-h-[300px] group overflow-hidden relative z-0">
          <Image
            src={web_banner}
            alt={web_banner_alt}
            fill
            sizes="970px"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
