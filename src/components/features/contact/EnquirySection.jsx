
"use client";

import { Img } from "@/components/layout/Img";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EnquirySection() {

    return (
        <section className="w-full pt-[40px] lg:pt-[60px] xl:pt-[110px] 3xl:pt-[130px] lg:pb-[40px] pb-[110px] relative min-h-[400px] md:min-h-[600px]">
            <div className="w-full 3xl:max-w-[900px] 2xl:max-w-[750] xl:max-w-[600] lg:max-w-[550] max-w-[250px] 3xl:h-[420px] 2xl:h-[350px] lg:h-[280px] h-[90px] absolute bottom-0 left-[-12%] z-0 transition-transform duration-300 animate-car-move">
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

                                <form className="w-full">
                                    <div className="w-full flex flex-wrap md:mx-[-25px] 3xl:my-[-36px] 2xl:my-[-25px] my-[-15px]">

                                        <div className="w-full md:w-1/2  md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="fname" id="fname"
                                            />
                                        </div>
                                        <div className="w-full  md:w-1/2 md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="Second Name"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="sname" id="sname"
                                            />
                                        </div>
                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="Email"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="email" id="email"
                                            />
                                        </div>
                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="Mobile Numer"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="mobile" id="mobile"
                                            />
                                        </div>


                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <textarea
                                                placeholder="Message"
                                                rows="3"
                                                className="w-full h-[95px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]"
                                            ></textarea>
                                        </div>


                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px] flex justify-end">
                                            <button
                                                type="submit"
                                                className="w-full max-w-[200px] 3xl:h-[50px] h-[45px] bg-black text-white text-[14px] cursor-pointer 
                                                    hover:bg-base1 hover:border-base1 hover:text-white transition-all duration-400 focus:text-[#5949A7]"
                                            >
                                                <span>Send Message</span>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </TabsContent>
                            <TabsContent value="book">
                                <form className="w-full">
                                    <div className="w-full flex flex-wrap md:mx-[-25px] 3xl:my-[-36px] 2xl:my-[-25px] my-[-15px]">


                                        <div className="w-full md:w-1/2 md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="fname" id="fname"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="Second Name"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="sname" id="sname"
                                            />
                                        </div>
                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="Email"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="email" id="email"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="Mobile Numer"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="mobile" id="mobile"
                                            />
                                        </div>

                                        <div className="w-full 3xs:w-1/2 md:w-1/4  3xs:px-[5px] md:px-[10px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <select name="" id="" className="w-full 3xl:h-[70px] h-[43px] border-1  border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px] px-[20px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]">
                                                <option value="">select option</option>
                                            </select>
                                        </div>
                                        <div className="w-full 3xs:w-1/2 md:w-1/4 3xs:px-[5px] md:px-[10px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="Date"
                                                placeholder="Select Date"
                                                className="w-full 3xl:h-[70px] h-[43px] border-1  border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px] px-[20px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="mobile" id="mobile"
                                            />
                                        </div>


                                        {/** Message */}
                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <textarea
                                                placeholder="Message"
                                                rows="3"
                                                className="w-full h-[95px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]"
                                            ></textarea>
                                        </div>

                                        {/** Button */}
                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px] flex justify-end">
                                            <button
                                                type="submit"
                                                className="w-full max-w-[200px] 3xl:h-[50px] h-[45px] bg-black text-white text-[14px] cursor-pointer 
                                        hover:bg-base1 hover:border-base1 hover:text-white transition-all duration-400 focus:text-[#5949A7]"
                                            >
                                                <span>Send Message</span>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </TabsContent>
                            <TabsContent value="service">
                                <form className="w-full">
                                    <div className="w-full flex flex-wrap md:mx-[-25px] 3xl:my-[-36px] 2xl:my-[-25px] my-[-15px]">


                                        <div className="w-full md:w-1/2 md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="fname" id="fname"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="Second Name"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="sname" id="sname"
                                            />
                                        </div>
                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="Email"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="email" id="email"
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="text"
                                                placeholder="Mobile Numer"
                                                className="w-full 3xl:h-[70px] h-[43px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="mobile" id="mobile"
                                            />
                                        </div>

                                        <div className="w-full 3xs:w-1/2 md:w-1/4  3xs:px-[5px] md:px-[10px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <select name="" id="" className="w-full 3xl:h-[70px] h-[43px] border-1  border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px] px-[20px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]">
                                                <option value="">select option</option>
                                            </select>
                                        </div>
                                        <div className="w-full 3xs:w-1/2 md:w-1/4 3xs:px-[5px] md:px-[10px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <input
                                                type="Date"
                                                placeholder="Select Date"
                                                className="w-full 3xl:h-[70px] h-[43px] border-1  border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px] px-[20px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]" name="mobile" id="mobile"
                                            />
                                        </div>


                                        {/** Message */}
                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px]">
                                            <textarea
                                                placeholder="Message"
                                                rows="3"
                                                className="w-full h-[95px] border-b border-gray-300 text-black font-normal text-[14px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[18px]
                                                placeholder:text-black placeholder:text-[14px] placeholder:lg:text-[14px] placeholder:2xl:text-[16px] placeholder:3xl:text-[18px]
                                                focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]"
                                            ></textarea>
                                        </div>

                                        {/** Button */}
                                        <div className="w-full md:px-[25px] 3xl:py-[36px] 2xl:py-[25px] py-[15px] flex justify-end">
                                            <button
                                                type="submit"
                                                className="w-full max-w-[200px] 3xl:h-[50px] h-[45px] bg-black text-white text-[14px] cursor-pointer 
                                                hover:bg-base1 hover:border-base1 hover:text-white transition-all duration-400 focus:text-[#5949A7]"
                                            >
                                                <span>Send Message</span>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </TabsContent>
                        </Tabs>


                    </div>
                </div>
            </div>
        </section>


    );
}
