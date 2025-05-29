
"use client";

import EnquiryForm from "@/components/common/EnquiryForm";
import ServiceEnquiryForm from "@/components/common/ServiceEnquiryForm";
import TestdriveBookingForm from "@/components/common/TestdriveBookingForm";
import { Img } from "@/components/layout/Img";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EnquirySection() {

    return (
        <section className="w-full pt-[40px] lg:pt-[60px] xl:pt-[110px] 3xl:pt-[130px] lg:pb-[40px] pb-[110px] relative min-h-[400px] md:min-h-[600px]">
            <div className="w-full 3xl:max-w-[900px] 2xl:max-w-[750] xl:max-w-[600] lg:max-w-[550] max-w-[250px] 3xl:h-[420px] 2xl:h-[350px] lg:h-[280px] h-[90px] absolute bottom-0 ltr:left-[-12%] rtl:right-[-12%] rtl:rotateY-180 z-0 transition-transform duration-300 animate-car-move">
                <Img
                    src="car.png"
                    alt="car"
                    fill
                    sizes="(max-width: 650px) 100vw, 1050px"
                    className="object-contain transition-transform duration-300"
                />
            </div>
            <div className="container mx-auto relative z-1">
                <div className="w-full flex flex-wrap lg:flex-nowrap lg:px-[30px] 2xl:px-[60px] 3xl:px-[90px]">

                    {/* Left Column */}
                    <div className="w-full 3xl:w-[510px] 2xl:w-[410px] xl:w-[350px] lg:w-[300px] mb-8 lg:mb-0">
                        <h2 className="text-[20px] lg:text-[24px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[40px] text-black font-medium 3xl:max-w-[310px] max-w-[250]">
                            Have questions? <br />
                            We’re ready to assist.
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="w-full 3xl:w-[calc(100%-510px)] 2xl:w-[calc(100%-410px)] xl:w-[calc(100%-350px)] lg:w-[calc(100%-300px)]">

                        <Tabs defaultValue="enquire" className="w-full">
                            <TabsList className="flex justify-between items-center mr-[25px] border-b border-gray-200 relative w-full h-[60px] rounded-0 2xl:mb-[60px] xl:mb-[40px] mb-[30px]">
                                <TabsTrigger
                                    value="enquire"
                                    className="relative text-black font-medium outline-none shadow-none
                                        text-[11px] sm-text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] p-[0] text-left h-full
                                        after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[3px] after:bg-transparent
                                        data-[state=active]:after:bg-[#5949A7] data-[state=active]:shadow-none transition-all justify-start rounded-0 cursor-pointer"
                                >
                                    Enquire Now
                                </TabsTrigger>

                                <TabsTrigger
                                    value="book"
                                    className="relative text-black font-medium outline-none shadow-none
                                        text-[11px] sm-text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-left h-full
                                        after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[3px] after:bg-transparent
                                        data-[state=active]:after:bg-[#5949A7]  data-[state=active]:shadow-none  transition-all rounded-0 cursor-pointer"
                                >
                                    Book a test drive
                                </TabsTrigger>

                                <TabsTrigger
                                    value="service"
                                    className="relative text-black font-medium outline-none shadow-none
                                        text-[11px] sm-text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] text-left h-full
                                        after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[3px] after:bg-transparent
                                        data-[state=active]:after:bg-[#5949A7] data-[state=active]:shadow-none  transition-all justify-end rounded-0 cursor-pointer"
                                >
                                    Service Enquiry
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="enquire" className="w-full">
                                <EnquiryForm />
                            </TabsContent>
                            <TabsContent value="book">
                                <TestdriveBookingForm />
                            </TabsContent>
                            <TabsContent value="service">
                                 <ServiceEnquiryForm />
                            </TabsContent>
                        </Tabs>


                    </div>
                </div>
            </div>
        </section>


    );
}
