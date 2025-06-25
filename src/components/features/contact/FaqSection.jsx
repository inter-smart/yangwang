import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import parse from "html-react-parser";

export default function FaqSection({ faqData, socialData }) {
  return (
    <section className="w-full relative min-h-[400px] md:min-h-[600px] pt-[40px] lg:pt-[60px] xl:pt-[80px] 3xl:pt-[100px] pb-[40px] lg:pb-[60px] xl:pb-[80px] 3xl:pb-[150px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full 3xl:[width:calc(100%-700px)] xl:[width:calc(100%-550px)] lg:[width:calc(100%-450px)] lg:mb-0 mb-[25px]">
            <div className="w-full 3xl:mb-[50px]">
              <Heading
                size="heading3"
                as="h3"
                className="capitalize text-black mb-[6px] xl:mb-[8px] 3xl:mb-[10px]"
              >
                {faqData?.header?.faq_title}
              </Heading>
            </div>

            <Accordion
              type="button"
              collapsible
              defaultValue="item-0"
              className="w-full"
            >
              {faqData?.faqs?.map((item, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index}`}
                  className="border-b border-[#CCCCCC] py-[5px] xl:py-[10px] 3xl:py-[12px] last:border-b"
                >
                  <AccordionTrigger
                    className="group cursor-pointer flex justify-between items-start transition-colors duration-300 
                                        hover:text-[#5949A7] data-[state=open]:text-[#5949A7]"
                  >
                    <Heading
                      size="heading6"
                      as="h6"
                      className="xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium transition-colors duration-300 leading-3"
                    >
                      {item?.question}
                    </Heading>
                  </AccordionTrigger>

                  <AccordionContent>
                    <p className="3xl:text-[16px] 2xl:text-[14px] xl:text-[10px] lg:text-[10px] text-[10px] font-normal leading-normal max-w-full text-[#2d2929]">
                      {parse(item?.answer)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div className="w-full 3xl:w-[700px] xl:w-[550px] lg:w-[450px]">
            <div className="w-full h-full 3xl:max-w-[500px] 2xl:max-w-[450px] xl:max-w-[400px] lg:max-w-[350px]   mx-auto">
              <div className="w-full 3xl:mb-[50px] 2xl:mb-[40px] mb-[30px] aspect-square relative group overflow-hidden">
                <Image
                  src={faqData?.header?.faq_image}
                  alt={faqData?.header?.faq_image_alt}
                  fill
                  sizes="(max-width: 510px) 100vw, 1050px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="text-[15px] sm:text-[18px] lg:text-[22px] xl:text-[30px] 2xl:text-[35px] 3xl:text-[40px] text-black font-normal capitalize max-w-[330px] 2xl:mb-[40px] md:mb-[30px] mb-[15px]">
                {/* Follow us to <br /> get updates */}
                {socialData?.header?.social_link_title}
              </div>

              <div className="flex gap-4">
                {socialData?.social_media_links?.map(
                  ({ icon, name, url, icon_alt }, idx) => (
                    <a
                      key={idx}
                      href={url}
                      title={name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group 3xl:w-[77px] 2xl:w-[65px] xl:w-[55px] w-[40px] 3xl:h-[77px] 2xl:h-[65px] xl:h-[55px] h-[40px] rounded-full flex items-center justify-center border border-[#dadada] transition-all duration-300 hover:bg-[#5949A7] cursor-pointer"
                    >
                      {/* <div className="w-[12px] xl:w-[21px] h-[12px] xl:h-[18px] [&>icon]:w-full [&>svg]:h-full [&>svg]:fill-current"> */}
                      <Image
                        src={icon}
                        alt={icon_alt}
                        width={12}
                        height={12}
                        className="w-[10px] xl:w-[15px] 3xl:w-[20px] aspect-square object-contain filter-[brightness(0)_saturate(100%)] group-hover:filter-none"
                      />
                      {/* </div> */}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
