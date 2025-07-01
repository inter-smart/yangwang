"use client";

import EnquiryForm from "@/components/common/EnquiryForm";
import TestdriveBookingForm from "@/components/common/TestdriveBookingForm";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import parse from "html-react-parser";
import { useTranslations } from "next-intl";

export default function EnquirySection({ data, modelsData, locationData }) {
  const t = useTranslations("form");

  const TabsTriggerStyle =
    "text-[11px] sm-text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-medium text-left text-black max-w-[160px] xl:max-w-[240px] 2xl:max-w-[300px] 3xl:max-w-[340px] p-0 relative outline-none shadow-none h-full border-0 border-b border-gray-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-transparent data-[state=active]:after:bg-[#5949A7] data-[state=active]:shadow-none transition-all justify-start rounded-none cursor-pointer";

  return (
    <section className="w-full h-auto block py-[30px] lg:py-[40px] xl:py-[60px_50px] 2xl:py-[80px_70px] 3xl:py-[100px_75px] relative z-0">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between">
          <div className="3xl:w-[510px] 2xl:w-[410px] xl:w-[350px] lg:w-[240px] w-full">
            <Heading size="heading3" as="h3" className="text-black mb-[10px] xl:mb-[15px] 3xl:mb-[20px]">
              {data?.enq_title || "Enquire Now"}
            </Heading>
            <Text size="text1" as="div" className="text-black mb-[15px] xl:mb-[20px] 3xl:mb-[30px]">
              {parse(data?.enq_desc) ||
                "Fill out the form below to get in touch with us for more information about our models. Our team will respond to your enquiry as soon as possible."}
            </Text>
            <Image
              src={data?.enq_image?.url || "/images/models-enquiry-1.jpg"}
              alt={data?.enq_image?.alt_text || "Enquiry Image"}
              width={565}
              height={346}
            />
          </div>
          <div className="w-full 3xl:w-[calc(100%-510px)] 2xl:w-[calc(100%-410px)] xl:w-[calc(100%-350px)] lg:w-[calc(100%-240px)]">
            <Tabs
              defaultValue="enquire"
              className="w-full lg:max-w-[540px] xl:max-w-[660px] 2xl:max-w-[840px] 3xl:max-w-[960px] ltr:ml-auto rtl:mr-auto"
            >
              <TabsList className="flex justify-start items-center mr-[25px] relative w-full h-[60px] rounded-0 2xl:mb-[60px] xl:mb-[40px] mb-[30px]">
                <TabsTrigger value="enquire" className={TabsTriggerStyle}>
                  {t("enquire_now")}
                </TabsTrigger>
                <TabsTrigger value="book" className={TabsTriggerStyle}>
                  {t("book_a_test_drive")}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="enquire">
                <EnquiryForm />
              </TabsContent>
              <TabsContent value="book">
                <TestdriveBookingForm modelData={modelsData} locationData={locationData} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
