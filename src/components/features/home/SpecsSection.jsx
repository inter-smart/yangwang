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
    "text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[40px] font-medium leading-none uppercase h-auto data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:border-black rounded-none focus-visible:outline-0 focus-visible:ring-0 focus-visible:border-0 px-[4px] pt-0 pb-[2px] sm:pb-[4px] xl:pb-[6px] 3xl:pb-[10px] border-0 border-b border-transparent text-[#b2b2b2] cursor-pointer";

  const isEnglish = true;

  return (
    <section className="w-full h-auto block">
      <Tabs
        dir={isEnglish ? "ltr" : "rtl"}
        defaultValue="u8"
        className="gap-0 relative z-0"
      >
        <TabsList className="gap-[10px] xl:gap-[15px] 3xl:gap-[20px] mb-[15px] xl:mb-[20px] 3xl:mb-[30px] absolute z-1 top-[15px] sm:top-[40px] xl:top-[90px] 3xl:top-[140px] ltr:right-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] ltr:3xs:right-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] ltr:2xs:right-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] ltr:xs:right-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:right-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:right-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:right-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:right-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:right-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:right-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:left-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] rtl:3xs:left-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] rtl:2xs:left-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] rtl:xs:left-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] rtl:sm:left-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:left-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:left-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:left-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:left-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:left-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]">
          <TabsTrigger value="u8" className={TabsTriggerStyle}>
            u8
          </TabsTrigger>
          <TabsTrigger value="u9" className={TabsTriggerStyle}>
            u9
          </TabsTrigger>
        </TabsList>
        <TabsContent value="u8" className="flex-auto">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-[300px] lg:w-[320px] xl:w-[490px] 3xl:w-[740px] relative z-0 overflow-hidden px-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] 3xs:px-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] 2xs:px-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] xs:px-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pr-[10px] ltr:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:sm:pl-[10px] rtl:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] py-[50px_10px] sm:py-[40px_30px] xl:py-[90px_80px] 3xl:py-[140px_130px] gap-0">
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
                  size="text3"
                  as="p"
                  className="text-[#262626] mb-[15px] xl:mb-[30px] 3xl:mb-[40px]"
                >
                  Advanced Design. Revolutionary Technology. Uncompromised
                  Power.
                </Text>
                <ul>
                  {specsInfo?.map((item, index) => (
                    <li
                      key={"specsInfo" + index}
                      className="my-[10px] sm:my-[20px] xl:my-[30px] 3xl:my-[40px] last:mb-0"
                    >
                      <div className="flex items-center gap-[10px] sm:gap-[15px] xl:gap-[20px] 3xl:gap-[30px]">
                        <Img
                          src={item.image}
                          alt={item.alt}
                          width={40}
                          height={40}
                          className="w-[15px] sm:w-[20px] xl:w-[26px] 3xl:w-[40px]"
                        />
                        <div className="flex-1">
                          <h6 className="text-[10px] sm:text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] 3xl:text-[20px] font-medium leading-tight capitalize text-black xl:max-w-[60px] 3xl:max-w-[100px]">
                            {item.title}
                          </h6>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-[calc(100%-300px)] lg:w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)] ltr:sm:pl-[15px] ltr:xl:pl-[20px] ltr:3xl:pl-[30px] rtl:sm:pr-[15px] rtl:xl:pr-[20px] rtl:3xl:pr-[30px] px-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] 3xs:px-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] 2xs:px-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] xs:px-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] py-[10px_30px] sm:py-[40px_30px] xl:py-[90px_80px] 3xl:py-[140px_130px]">
              <div className="w-full h-auto aspect-[1040/588] block relative z-0 overflow-hidden sm:mt-[40px] xl:mt-[50px] 3xl:mt-[80px]">
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
            <div className="w-full sm:w-[300px] lg:w-[320px] xl:w-[490px] 3xl:w-[740px] relative z-0 overflow-hidden px-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] 3xs:px-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] 2xs:px-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] xs:px-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pr-[10px] ltr:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:sm:pl-[10px] rtl:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] py-[50px_10px] sm:py-[40px_30px] xl:py-[90px_80px] 3xl:py-[140px_130px] gap-0">
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
                  size="text3"
                  as="p"
                  className="text-[#262626] mb-[15px] xl:mb-[30px] 3xl:mb-[40px]"
                >
                  Advanced Design. Revolutionary Technology. Uncompromised
                  Power.
                </Text>
                <ul>
                  {specsInfo?.map((item, index) => (
                    <li
                      key={"specsInfo" + index}
                      className="my-[10px] sm:my-[20px] xl:my-[30px] 3xl:my-[40px] last:mb-0"
                    >
                      <div className="flex items-center gap-[10px] sm:gap-[15px] xl:gap-[20px] 3xl:gap-[30px]">
                        <Img
                          src={item.image}
                          alt={item.alt}
                          width={40}
                          height={40}
                          className="w-[15px] sm:w-[20px] xl:w-[26px] 3xl:w-[40px]"
                        />
                        <div className="flex-1">
                          <h6 className="text-[10px] sm:text-[12px] lg:text-[12px] xl:text-[13px] 2xl:text-[16px] 3xl:text-[20px] font-medium leading-tight capitalize text-black xl:max-w-[60px] 3xl:max-w-[100px]">
                            {item.title}
                          </h6>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="w-full sm:w-[calc(100%-300px)] lg:w-[calc(100%-320px)] xl:w-[calc(100%-490px)] 3xl:w-[calc(100%-740px)] ltr:sm:pl-[15px] ltr:xl:pl-[20px] ltr:3xl:pl-[30px] rtl:sm:pr-[15px] rtl:xl:pr-[20px] rtl:3xl:pr-[30px] px-[calc(((100vw-var(--breakpoint-4xs))/2)+var(--breakpoint-gap))] 3xs:px-[calc(((100vw-var(--breakpoint-3xs))/2)+var(--breakpoint-gap))] 2xs:px-[calc(((100vw-var(--breakpoint-2xs))/2)+var(--breakpoint-gap))] xs:px-[calc(((100vw-var(--breakpoint-xs))/2)+var(--breakpoint-gap))] ltr:sm:pr-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] ltr:md:pr-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] ltr:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] ltr:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] rtl:sm:pl-[calc(((100vw-var(--breakpoint-sm))/2)+var(--breakpoint-gap))] rtl:md:pl-[calc(((100vw-var(--breakpoint-md))/2)+var(--breakpoint-gap))] rtl:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))] rtl:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] py-[10px_30px] sm:py-[40px_30px] xl:py-[90px_80px] 3xl:py-[140px_130px]
              "
            >
              <div className="w-full h-auto aspect-[1040/588] block relative z-0 overflow-hidden sm:mt-[40px] xl:mt-[50px] 3xl:mt-[80px]">
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
