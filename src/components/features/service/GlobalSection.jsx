import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import parse from "html-react-parser";
export default function GlobalSection({ data }) {
  const { title, description } = data;
  return (
    <section className="w-full 3xl:py-[130px] 2xl:py-[80px] xl:py-[50px] py-[40px] relative">
      <div className="container mx-auto">
        <Heading
          size="heading3"
          as="h3"
          className="text-black font-medium 2xl:mb-[25px] lg:max-w-[750px] max-w-[450px] mx-auto mb-[20px] text-center"
        >
          {title}
        </Heading>
        <Text size="text4" as="div" className="capitalize text-black text-center 2xl:max-w-[1150px] max-w-[850px] mx-auto ">
          {parse(description)}
        </Text>
      </div>
    </section>
  );
}
