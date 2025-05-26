
"use client";

import { useState } from "react";

import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";

export default function EnquirySection() {

    return (
        <section className="w-full pt-[40px] lg:pt-[60px] xl:pt-[110px] 3xl:pt-[130px] pb-[40px]">
            <div className="container mx-auto">
                <div className="w-full flex flex-wrap lg:flex-nowrap px-[30px] lg:px-[90px]">

                    {/* Left Column */}
                    <div className="w-full lg:w-[510px] mb-8 lg:mb-0">
                        <h2 className="text-[32px] lg:text-[40px] text-black font-medium max-w-[310px]">
                            Have questions? <br />
                            We’re ready to assist.
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-[calc(100%-510px)]">
                        <form className="w-full">
                            <div className="w-full flex flex-wrap m-[-25px]">

                                <div className="w-full md:w-1/2 p-[25px]">
                                    <input
                                        type="text" placeholder="First Name"
                                        className="text-[18px] text-black font-normal w-full h-[43px] border-b border-gray-300 placeholder:text-[18px] placeholder:text-black focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]"
                                    />
                                </div>

                                <div className="w-full md:w-1/2 p-[25px]">
                                      <input
                                        type="text" placeholder="Second Name"
                                        className="text-[18px] text-black font-normal w-full h-[43px] border-b border-gray-300 placeholder:text-[18px] placeholder:text-black focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]"
                                    />
                                </div>

                                <div className="w-full p-[25px]">
                                     <input
                                        type="text" placeholder="Email"
                                        className="text-[18px] text-black font-normal w-full h-[43px] border-b border-gray-300 placeholder:text-[18px] placeholder:text-black focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]"
                                    />
                                </div>

                                <div className="w-full p-[25px]">
                                     <input
                                        type="text" placeholder="Phone Number"
                                        className="text-[18px] text-black font-normal w-full h-[43px] border-b border-gray-300 placeholder:text-[18px] placeholder:text-black focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]"
                                    />
                                </div>

                                <div className="w-full p-[25px]">
                                    <textarea placeholder="Message"
                                         className="text-[18px] text-black font-normal w-full h-[95px] border-b border-gray-300 placeholder:text-[18px] placeholder:text-black focus:border-b-[#5949A7] focus:outline-none focus:placeholder:text-[#5949A7]"
                                        rows="3"
                                    ></textarea>
                                </div>

                                <div className="w-full p-[25px] flex justify-end">
                                    <button
                                        type="submit"
                                        className="w-full max-w-[200px] h-[50px] d-block bg-black text-[14px] text- text-white cursor-pointer  hover:bg-base1 hover:border-base1 hover:text-white transition-background duration-400 focus:text-[#5949A7]">
                                        <span>Send Message</span>
                                    </button>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}
