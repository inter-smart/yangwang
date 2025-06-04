import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import ServiceEnquiryForm from "@/components/common/ServiceEnquiryForm";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Image from "next/image";

export default function FollowusSection({ data }) {
  return (
    <section className="w-full 3xl:py-[130px_90px] 2xl:py-[80px_50px] xl:py-[50px] py-[40px] relative">
      <div className="container mx-auto relative z-10 h-full lg:mb-0 mb-[35px]">
        <div className="w-full flex flex-wrap">
          {/* Left Column */}
          <div className="w-full lg:w-[350px] xl:w-[400px] 2xl:w-[500px] ltr:pr-[50px] rtl:pl-[50px]">
            <Heading size="heading3" as="h3" className="text-black font-medium xl:mb-[60px] mb-[40px]">
              {data?.enquiry_section_title}
            </Heading>
            <Text size="text4" as="p" className="capitalize text-black font-medium mb-[25px]">
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
            <div className="w-full 2xl:mb-[45px] lg:mb-[30px] mb-[20px]">
              <Select>
                <SelectTrigger
                  className="w-full h-[70px] min-h-[70px] px-6  border border-[#CCCCCC]
                                     rounded-none bg-white text-[16px] text-[#B3B3B3] 
                                    font-medium outline-none shadow-none transition-all cursor-pointer 
                                    flex items-center justify-between relative"
                >
                  <div className="flex items-center gap-2 flex-1 overflow-hidden ">
                    <span className="font-semibold text-black  ">Select Service Offer:</span>
                    <SelectValue
                      placeholder="Yangwang U9 Electric Supercar Powertrain Warranty"
                      className="truncate text-[#999999] font-semibold"
                    />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[16px] font-medium text-[#1D0A44]">
                  <SelectItem
                    value="warranty"
                    className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                  >
                    Yangwang U9 Electric Supercar Powertrain Warranty
                  </SelectItem>
                  <SelectItem
                    value="maintenance"
                    className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                  >
                    Annual Maintenance Package
                  </SelectItem>
                  <SelectItem
                    value="insurance"
                    className="py-[10px] px-4 hover:bg-[#F5F4FD] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                  >
                    Extended Insurance Plan
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <ServiceEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
