import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/layout/Text";
import parse from "html-react-parser";

export default function NewsCard({ item }) {
  return (
    <div className="w-full h-auto block transition-all duration-500 hover:-translate-y-2 group">
      <div className="w-full h-auto aspect-[540/400] block 2xl:mb-[30px] md:mb-[20px] mb-[15px] overflow-hidden">
        <Image
          src={item?.thumbnail?.url}
          alt={item?.thumbnail?.alt || "news"}
          width={640}
          height={920}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="md:mb-[25px] mb-[15px]">
        <Text
          as="p"
          className="3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] font-medium leading-normal md:mb-[15px] mb-[10px]"
        >
          {item?.title}
        </Text>
        <Text size="text4" as="div" className="line-clamp-4 overflow-hidden text-ellipsis">
          {parse(item?.description)}
        </Text>
      </div>
      <div className="flex items-center justify-between">
        <div className="3xl:text-[16px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] text-[10px] font-normal leading-normal">
          <span>{item?.published_on}</span>
        </div>
        <Link
          href={`/news/${item?.slug}`}
          aria-label="news"
          className="3xl:text-[16px] 2xl:text-[15px] xl:text-[14px] lg:text-[12px] text-[10px] font-normal leading-normal underline transition-colors duration-300 hover:text-[#CB9576]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
