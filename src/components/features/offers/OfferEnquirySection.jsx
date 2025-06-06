import EnquiryForm from "@/components/common/EnquiryForm";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";
import OfferEnquiryForm from "./OfferEnquiryForm";

export default function OfferEnquirySection({ data, offerData }) {
  console.log("data ===> ", data);
  console.log("offerData ===> ", offerData);
  
  
  return (
    <section className="w-full h-auto block py-[30px] lg:py-[40px] xl:py-[60px_50px] 2xl:py-[80px_70px] 3xl:py-[100px_75px] relative z-0">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between">
          <div className="3xl:w-[510px] 2xl:w-[410px] xl:w-[350px] lg:w-[240px] w-full">
            <Heading
              size="heading3"
              as="h3"
              className="leading-tight text-black mb-[15px] xl:mb-[20px] 2xl:mb-[40px] 3xl:mb-[50px]"
            >
              {data?.enquiry_section_title || "Get in Touch for Offers"}
            </Heading>
            <Text size="text1" as="p" className="!font-mediumtext-black">
              {data?.enquiry_title}
            </Text>
            <Image
              src={data?.enquiry_image || "/images/offer-enquiry-1.png"}
              alt={data?.enquiry_image_alt || "Offer Enquiry Image"}
              width={565}
              height={346}
              className="mt-[-15px] xl:mt-[-20px] 3xl:mt-[-30px] relative -z-1"
            />
          </div>
          <div className="w-full 3xl:w-[calc(100%-510px)] 2xl:w-[calc(100%-410px)] xl:w-[calc(100%-350px)] lg:w-[calc(100%-240px)]">
            <div className="w-full lg:max-w-[540px] xl:max-w-[660px] 2xl:max-w-[840px] 3xl:max-w-[960px] ltr:ml-auto rtl:mr-auto">
              <OfferEnquiryForm offerData={offerData} serviceTitle={data?.service_offer_selection_title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
