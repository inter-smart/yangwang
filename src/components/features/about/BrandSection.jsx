import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import Image from "next/image";
import parse from "html-react-parser";

export default function BrandSection({ data }) {
  const { images, description } = data;

  return (
    <section className="w-full h-auto 2xl:py-[145px_120px] xl:py-[95px_80px] md:py-[60px_60px] py-[40px_50px] bg-black block relative z-0">
      <div className="container">
        <div className="w-full h-auto aspect-[1720/575] overflow-hidden block">
          <Image
            src={images?.web?.url}
            alt={images?.web?.alt}
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full 2xl:max-w-[1560px] xl:max-w-[1040px] md:max-w-[740px] h-full 2xl:pt-[50px] md:pt-[30px] pt-[20px] m-auto text-center text-white">
          <Text size="text1" as="div">
            {parse(description)}
          </Text>
        </div>
      </div>
    </section>
  );
}
