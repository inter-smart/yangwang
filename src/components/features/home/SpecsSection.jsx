import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const specsInfo = [
  {
    image: "specsInfo-1.svg",
    alt: "specsInfo",
    title: "Tank Turn Feature",
  },
  {
    image: "specsInfo-2.svg",
    alt: "specsInfo",
    title: "Floating SUV",
  },
  {
    image: "specsInfo-3.svg",
    alt: "specsInfo",
    title: "360° Camera",
  },
  {
    image: "specsInfo-4.svg",
    alt: "specsInfo",
    title: "Ultimate Safety",
  },
  {
    image: "specsInfo-5.svg",
    alt: "specsInfo",
    title: "Ultimate Performance",
  },
];

export default function SpecsSection() {
  const TabsTriggerStyle =
    "text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[40px] font-medium leading-none uppercase h-auto data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:border-black rounded-none focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0 px-[4px] pt-0 pb-[4px] xl:pb-[6px] 3xl:pb-[10px] border-0 border-b border-transparent text-[#b2b2b2] cursor-pointer";

  return (
    <section className="w-full h-auto block">
      <Tabs defaultValue="u8" className="gap-0 relative z-0">
        <TabsList className="gap-[10px] xl:gap-[15px] 3xl:gap-[20px] mb-[15px] xl:mb-[20px] 3xl:mb-[30px] lg:absolute z-0 top-0 lg:top-[40px] xl:top-[90px] 3xl:top-[140px] right-0 lg:right-[calc(((100vw-64rem)/2)+60px)] xl:right-[calc(((100vw-80rem)/2)+65px)] 2xl:right-[calc(((100vw-96rem)/2)+80px)] 3xl:right-[calc(((100vw-120rem)/2)+100px)]">
          <TabsTrigger value="u8" className={TabsTriggerStyle}>
            u8
          </TabsTrigger>
          <TabsTrigger value="u9" className={TabsTriggerStyle}>
            u9
          </TabsTrigger>
        </TabsList>
        <TabsContent value="u8" className="flex-auto">
          <div className="flex flex-wrap">
            <div className="w-[320px] xl:w-[490px] 3xl:w-[740px] relative z-0 overflow-hidden lg:pl-[calc(((100vw-64rem)/2)+60px)] xl:pl-[calc(((100vw-80rem)/2)+65px)] 2xl:pl-[calc(((100vw-96rem)/2)+80px)] 3xl:pl-[calc(((100vw-120rem)/2)+100px)] py-[40px_30px] xl:py-[90px_80px] 3xl:py-[140px_130px] gap-0">
              <Img
                src="specs-bg-1.png"
                alt="specs-bg-1" 
                fill
                sizes="420px"
                className="-z-1 object-cover opacity-[2%]"
              />
              <div className="xl:max-w-[300px] 3xl:max-w-[450px]">
                <Heading
                  size="heading3"
                  as="h3"
                  className="leading-none capitalize font-medium mb-[10px] xl:mb-[15px] 3xl:mb-[20px]"
                >
                  Where Art Meets Intelligence
                </Heading>
                <Text
                  as="p"
                  className="3xl:text-[25px] 2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[12px] font-normal leading-normal text-[#262626] mb-[15px] xl:mb-[30px] 3xl:mb-[40px]"
                >
                  Advanced Design. Revolutionary Technology. Uncompromised
                  Power.
                </Text>
                <ul>
                  {specsInfo?.map((item, index) => (
                    <li
                      key={"specsInfo" + index}
                      className="my-[20px] xl:my-[30px] 3xl:my-[40px] last:mb-0"
                    >
                      <div className="flex items-center gap-[15px] xl:gap-[20px] 3xl:gap-[30px]">
                        <Img
                          src={item.image}
                          alt={item.alt}
                          width={40}
                          height={40}
                          className="w-[20px] xl:w-[26px] 3xl:w-[40px]"
                        />
                        <div className="flex-1">
                          <Heading
                            size="heading6"
                            as="h6"
                            className="leading-tight capitalize font-medium text-black xl:max-w-[60px] 3xl:max-w-[100px]"
                          >
                            {item.title}
                          </Heading>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)] pl-[15px] xl:pl-[20px] 3xl:pl-[30px] lg:pr-[calc(((100vw-64rem)/2)+60px)] xl:pr-[calc(((100vw-80rem)/2)+65px)] 2xl:pr-[calc(((100vw-96rem)/2)+80px)] 3xl:pr-[calc(((100vw-120rem)/2)+100px)] py-[40px_30px] xl:py-[90px_80px] 3xl:py-[140px_130px]">
              <div className="w-full h-auto aspect-[1040/588] block relative z-0 overflow-hidden lg:mt-[40px] xl:mt-[50px] 3xl:mt-[80px]">
                <Img
                  src="specs-img-1.jpg"
                  alt="specs-img"
                  fill
                  sizes="1040px"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="u9">
          <div className="flex flex-wrap">
            <div className="w-[320px] xl:w-[490px] 3xl:w-[740px] relative z-0 overflow-hidden lg:pl-[calc(((100vw-64rem)/2)+60px)] xl:pl-[calc(((100vw-80rem)/2)+65px)] 2xl:pl-[calc(((100vw-96rem)/2)+80px)] 3xl:pl-[calc(((100vw-120rem)/2)+100px)] py-[40px_30px] xl:py-[90px_80px] 3xl:py-[140px_130px] gap-0">
              <Img
                src="specs-bg-1.png"
                alt="specs-bg-1"
                fill
                sizes="420px"
                className="-z-1 object-cover opacity-[2%]"
              />
              <div className="xl:max-w-[300px] 3xl:max-w-[450px]">
                <Heading
                  size="heading3"
                  as="h3"
                  className="leading-none capitalize font-medium mb-[10px] xl:mb-[15px] 3xl:mb-[20px]"
                >
                  Where Art Meets Intelligence
                </Heading>
                <Text
                  as="p"
                  className="3xl:text-[25px] 2xl:text-[20px] xl:text-[16px] lg:text-[14px] text-[12px] font-normal leading-normal text-[#262626] mb-[15px] xl:mb-[30px] 3xl:mb-[40px]"
                >
                  Advanced Design. Revolutionary Technology. Uncompromised
                  Power.
                </Text>
                <ul>
                  {specsInfo?.map((item, index) => (
                    <li
                      key={"specsInfo" + index}
                      className="my-[20px] xl:my-[30px] 3xl:my-[40px] last:mb-0"
                    >
                      <div className="flex items-center gap-[15px] xl:gap-[20px] 3xl:gap-[30px]">
                        <Img
                          src={item.image}
                          alt={item.alt}
                          width={40}
                          height={40}
                          className="w-[20px] xl:w-[26px] 3xl:w-[40px]"
                        />
                        <div className="flex-1">
                          <Heading
                            size="heading6"
                            as="h6"
                            className="leading-tight capitalize font-medium text-black xl:max-w-[60px] 3xl:max-w-[100px]"
                          >
                            {item.title}
                          </Heading>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)] pl-[15px] xl:pl-[20px] 3xl:pl-[30px] lg:pr-[calc(((100vw-64rem)/2)+60px)] xl:pr-[calc(((100vw-80rem)/2)+65px)] 2xl:pr-[calc(((100vw-96rem)/2)+80px)] 3xl:pr-[calc(((100vw-120rem)/2)+100px)] py-[40px_30px] xl:py-[90px_80px] 3xl:py-[140px_130px]">
              <div className="w-full h-auto aspect-[1040/588] block relative z-0 overflow-hidden lg:mt-[40px] xl:mt-[50px] 3xl:mt-[80px]">
                <Img
                  src="specs-img-1.jpg"
                  alt="specs-img"
                  fill
                  sizes="1040px"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
