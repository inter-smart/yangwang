import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";
import OffersEnquiryForm from "./EnquiryForm";

export default function FollowusSection({ data }) {
  return (
    <section className="w-full 3xl:py-[130px_90px] 2xl:py-[80px_50px] xl:py-[50px] py-[40px] relative">
      <div className="container mx-auto relative z-10 h-full lg:mb-0 mb-[35px]">
        <div className="w-full flex flex-wrap">
          {/* Left Column */}
          <div className="w-full lg:w-[350px] xl:w-[400px] 2xl:w-[500px] ltr:pr-[50px] rtl:pl-[50px]">
            <Heading
              size="heading3"
              as="h3"
              className="text-black font-medium xl:mb-[60px] mb-[40px]"
            >
              {data?.enquiry_section_title}
            </Heading>
            <Text
              size="text4"
              as="p"
              className="capitalize text-black font-medium mb-[25px]"
            >
              {data?.enquiry_title}
            </Text>
            <div className="relative w-full max-w-[700px] aspect-[740/375] mb-[15px]">
              <Image
                src={data?.enquiry_image}
                alt={data?.enquiry_image_alt}
                fill
                sizes="(max-width: 700px) 100vw, 1050px"
                className="object-cover transition-transform duration-300 pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column */}

          <div className="w-full lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] 2xl:w-[calc(100%-500px)]">
            <OffersEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
