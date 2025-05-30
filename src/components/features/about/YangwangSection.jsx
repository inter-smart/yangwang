import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";

export default function YangwangSection({ data }) {
  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block relative z-0">
      <Image
        src={data?.images?.web?.url}
        alt={data?.images?.web?.alt}
        width={1920}
        height={1080}
        className="object-cover w-full h-full"
        priority
      />
      <div className="container">
        <div className="w-full 3xl:max-w-[1070px] max-sm:px-[10px] md:max-w-[715px] max-w-full h-full 3xl:pt-[125px] xl:pt-[80px] pt-[50px] m-auto text-center text-white absolute z-1 inset-0 flex flex-col items-center justify-start">
          <Heading size="heading3" as="h3" className="3xl:mb-[40px] xl:mb-[30px] mb-[20px]">
            {data?.title}
          </Heading>
          <Text
            as="p"
            className="3xl:text-[18px] 2xl:text-[16px] xl:text-[13px] md:text-[12px] text-[11px] font-normal leading-normal"
          >
            {data?.description}
          </Text>
        </div>
      </div>
    </section>
  );
}
