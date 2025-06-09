import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import { Text } from "@/components/layout/Text";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export default function EventsSection({ data }) {
  return (
    <section className="w-full h-auto block bg-[#f6f6f6] py-[30px] sm:py-[40px_30px] lg:py-[60px_40px] xl:py-[80px_60px] 3xl:py-[120px_80px]">
      <div className="container">
        <div className="flex flex-wrap lg:-mx-[10px] xl:-mx-[15px] 3xl:-mx-[25px] max-lg:[&>*]:py-[10px] lg:[&>*]:px-[10px] xl:[&>*]:px-[15px] 3xl:[&>*]:px-[25px]">
          <div className="w-full lg:w-[280px] xl:w-[300px] 2xl:w-[380px] 3xl:w-[440px]">
            <Heading
              size="heading3"
              as="h3"
              className="leading-tight capitalize font-medium mb-[10px] xl:mb-[15px] 3xl:mb-[20px]"
            >
              {data?.header?.title}
            </Heading>
            <Text size="text3" as="div" className="text-[#262626] mb-[15px] xl:mb-[30px] 3xl:mb-[40px]">
              {parse(data?.header?.description)}
            </Text>
            <LinkButton
              href={data?.header?.button?.link}
              color="black"
              aria-label="View All"
              className="min-w-[70px] sm:min-w-[80px] xl:min-w-[97px] 2xl:min-w-[127px] 3xl:min-w-[146px]"
            >
              {data?.header?.button?.text}
            </LinkButton>
          </div>
          <div className="w-full lg:w-[calc(100%-280px)] xl:w-[calc(100%-300px)] 2xl:w-[calc(100%-380px)] 3xl:w-[calc(100%-440px)]">
            <div className="-m-[5px] sm:-m-[10px] xl:-m-[15px] 3xl:-m-[20px] [&>*]:p-[5px] sm:[&>*]:p-[10px] xl:[&>*]:p-[15px] 3xl:[&>*]:p-[20px]">
              {data?.news_and_events?.map((item, index) => (
                <div
                  key={"slide" + index}
                  className={`${
                    index === 0
                      ? "w-[180px] 3xs:w-[220px] sm:w-[320px] lg:w-[400px] xl:w-[540px] 2xl:w-[640px] 3xl:w-[780px]"
                      : "w-[calc(100%-180px)] 3xs:w-[calc(100%-220px)] sm:w-[calc(100%-320px)] lg:w-[calc(100%-400px)] xl:w-[calc(100%-540px)] 2xl:w-[calc(100%-640px)] 3xl:w-[calc(100%-780px)]"
                  } ltr:float-left rtl:float-right`}
                >
                  <Link href={`/news/${item.slug}`}>
                    <Card className="w-full h-auto block rounded-none border-0 shadow-none p-0 overflow-hidden relative z-0">
                      <CardContent
                        className={`${
                          index === 0
                            ? "h-[220px] sm:h-[320px] lg:h-[400px] xl:h-[490px] 2xl:h-[560px] 3xl:h-[740px]"
                            : "h-[86px] sm:h-[220px] lg:h-[168px] xl:h-[200px] 2xl:h-[231px] 3xl:h-[306px]"
                        } "w-full block overflow-hidden relative z-0 mb-[5px] sm:mb-[10px] xl:mb-[15px] 3xl:mb-[20px]"`}
                      >
                        <Image
                          src={item.thumbnail}
                          alt={item.thumbnail_alt}
                          fill
                          sizes="460px"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </CardContent>
                      <CardHeader className="max-w-full block p-0 gap-0">
                        <CardTitle>
                          <h5 className="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-tight capitalize font-medium truncate text-black mb-[2px] sm:mb-[4px] xl:mb-[6px] 3xl:mb-[10px]">
                            {item.title}
                          </h5>
                        </CardTitle>
                        <CardDescription>
                          <p className="3xl:text-[16px] 2xl:text-[12px] xl:text-[10px] lg:text-[10px] text-[10px] font-normal leading-normal text-base3">
                            {item.published_date}
                          </p>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
