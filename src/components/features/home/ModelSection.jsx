"use client";
import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";
import Link from "next/link"; 
import CountUp from "react-countup";
 
export default function ModelSection() {
  return (
    <section className="w-full h-auto block">
      <div className="flex flex-wrap">
        <div className="w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)]">
          <div className="w-full h-auto aspect-[1180/900] bg-black relative z-0 p-[20px_25px] xl:p-[35px_45px] 3xl:p-[50px_70px] lg:pl-[calc(((100vw-64rem)/2)+60px)] xl:pl-[calc(((100vw-80rem)/2)+65px)] 2xl:pl-[calc(((100vw-96rem)/2)+80px)] 3xl:pl-[calc(((100vw-120rem)/2)+100px)]">
            <video
              autoPlay
              preload="auto"
              width={1180}
              height={940}
              muted
              loop
              className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
              aria-label="Video player"
            >
              <source src="/videos/hero-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="w-full h-full flex flex-col justify-between">
              <div>
                <Heading
                  size="heading2"
                  as="h2"
                  className="text-white mb-[6px] xl:mb-[8px] 3xl:mb-[10px]"
                >
                  U8
                </Heading>
                <Heading
                  size="heading5"
                  as="h5"
                  className="font-normal text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
                >
                  Command the Elements
                </Heading>
                <LinkButton
                  href="#"
                  aria-label="Explore Models"
                  className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 3xl:min-w-[146px]"
                >
                  Explore Models
                </LinkButton>
              </div>
              <div className="flex flex-wrap gap-[20px] xl:gap-[30px] 3xl:gap-[50px]">
                <div>
                  <Text size="text1" as="p" className="leading-none text-white">
                    Quad-Motor System
                  </Text>
                  <Heading
                    size="heading3"
                    as="h3"
                    className="font-medium text-white"
                  >
                    <CountUp
                      end={1200}
                      duration={3}
                      enableScrollSpy={true}
                      suffix=" ps" 
                    />
                  </Heading>
                </div>
                <div>
                  <Text size="text1" as="p" className="leading-none text-white">
                    0 to 100 Kmph
                  </Text>
                  <Heading
                    size="heading3"
                    as="h3"
                    className="font-medium text-white"
                  >
                    <CountUp
                      end={3.6}
                      duration={3}
                      enableScrollSpy={true}
                      decimals={1}
                      suffix=" Sec"
                    />
                  </Heading>
                </div>
                <div>
                  <Text size="text1" as="p" className="leading-none text-white">
                    Impressive Range
                  </Text>
                  <Heading
                    size="heading3"
                    as="h3"
                    className="font-medium text-white"
                  >
                    <CountUp
                      end={1000}
                      duration={3}
                      enableScrollSpy={true}
                      suffix=" km"
                    />
                  </Heading>
                </div>
                <div className="flex gap-[10px] xl:gap-[15px] 3xl:gap-[20px] ml-auto">
                  <div>
                    <Link
                      href={"#"}
                      aria-label="model-2"
                      className="w-[30px] xl:w-[40px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
                    >
                      <Img
                        src="icon-model-1.svg"
                        alt="model-1"
                        width={60}
                        height={60}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"#"}
                      aria-label="model-2"
                      className="w-[30px] xl:w-[40px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
                    >
                      <Img
                        src="icon-model-2.svg"
                        alt="model-2"
                        width={60}
                        height={60}
                        className="block"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[320px] xl:w-[490px] 3xl:w-[740px]">
          <div className="w-full h-full block relative z-0">
            <Img src="model-u8-2.jpg" alt="model-u8" fill />
            <Img
              src="icon-model-u8.svg"
              alt="model-u8"
              width={170}
              height={100}
              className="w-[80px] xl:w-[110px] 3xl:w-[170px] block absolute z-0 top-[70%] left-0 right-0 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row-reverse">
        <div className="w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)]">
          <div className="w-full h-auto aspect-[1180/900] bg-black relative z-0 p-[20px_25px] xl:p-[35px_45px] 3xl:p-[50px_70px] lg:pr-[calc(((100vw-64rem)/2)+60px)] xl:pr-[calc(((100vw-80rem)/2)+65px)] 2xl:pr-[calc(((100vw-96rem)/2)+80px)] 3xl:pr-[calc(((100vw-120rem)/2)+100px)]">
            <video
              autoPlay
              preload="auto"
              width={1180}
              height={940}
              muted
              loop
              className="w-full h-full absolute -z-1 inset-0 object-cover opacity-80"
              aria-label="Video player"
            >
              <source src="/videos/hero-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="w-full h-full flex flex-col justify-between">
              <div>
                <Heading
                  size="heading2"
                  as="h2"
                  className="text-white mb-[6px] xl:mb-[8px] 3xl:mb-[10px]"
                >
                  U8
                </Heading>
                <Heading
                  size="heading5"
                  as="h5"
                  className="font-normal text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
                >
                  Command the Elements
                </Heading>
                <LinkButton
                  href="#"
                  aria-label="Explore Models"
                  className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 3xl:min-w-[146px]"
                >
                  Explore Models
                </LinkButton>
              </div>
              <div className="flex flex-wrap gap-[20px] xl:gap-[30px] 3xl:gap-[50px]">
                <div>
                  <Text size="text1" as="p" className="leading-none text-white">
                    Quad-Motor System
                  </Text>
                  <Heading
                    size="heading3"
                    as="h3"
                    className="font-medium text-white"
                  >
                    <CountUp
                      end={1200}
                      duration={3}
                      enableScrollSpy={true}
                      suffix=" ps"
                    />
                  </Heading>
                </div>
                <div>
                  <Text size="text1" as="p" className="leading-none text-white">
                    0 to 100 Kmph
                  </Text>
                  <Heading
                    size="heading3"
                    as="h3"
                    className="font-medium text-white"
                  >
                    <CountUp
                      end={3.6}
                      duration={3}
                      enableScrollSpy={true}
                      decimals={1}
                      suffix=" Sec"
                    />
                  </Heading>
                </div>
                <div>
                  <Text size="text1" as="p" className="leading-none text-white">
                    Impressive Range
                  </Text>
                  <Heading
                    size="heading3"
                    as="h3"
                    className="font-medium text-white"
                  >
                    <CountUp
                      end={1000}
                      duration={3}
                      enableScrollSpy={true}
                      suffix=" km"
                    />
                  </Heading>
                </div>
                <div className="flex gap-[10px] xl:gap-[15px] 3xl:gap-[20px] ml-auto">
                  <div>
                    <Link
                      href={"#"}
                      aria-label="model-2"
                      className="w-[30px] xl:w-[40px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
                    >
                      <Img
                        src="icon-model-1.svg"
                        alt="model-1"
                        width={60}
                        height={60}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"#"}
                      aria-label="model-2"
                      className="w-[30px] xl:w-[40px] 3xl:w-[60px] h-auto block rounded-full hover:bg-base1/40 transition-background duration-300"
                    >
                      <Img
                        src="icon-model-2.svg"
                        alt="model-2"
                        width={60}
                        height={60}
                        className="block"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[320px] xl:w-[490px] 3xl:w-[740px]">
          <div className="w-full h-full block relative z-0">
            <Img src="model-u9-2.jpg" alt="model-u8" fill />
            <Img
              src="icon-model-u9.svg"
              alt="model-u8"
              width={170}
              height={100}
              className="w-[80px] xl:w-[110px] 3xl:w-[170px] block absolute z-0 top-[70%] left-0 right-0 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
