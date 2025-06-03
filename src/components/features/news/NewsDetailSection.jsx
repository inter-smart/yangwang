import React from "react";
import Image from "next/image";
import parse from "html-react-parser";

export default function NewsDetailSection({ data, locale }) {
  return (
    <section className="w-full h-auto block 2xl:py-[120px_20px] xl:py-[80px_20px] md:py-[60px_20px] py-[40px_10px]">
      <div className="container">
        <div className="3xl:max-w-[940px] md:max-w-[630px] 3xl:mb-[70px] xl:mb-[50px] md:mb-[30px] mb-[20px]">
          <div className="xl:text-[11px] md:text-[10px] text-[9px] font-medium uppercase text-white w-fit bg-[#5949A7] xl:p-[10px_20px] md:p-[10px] p-[5px_10px] 3xl:mb-[40px] xl:mb-[25px] md:mb-[15px] mb-[10px]">
            {data?.category?.name}
          </div>
          <h2 className="text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[44px] 3xl:text-[40px] font-bold leading-tight text-black 2xl:mb-[20px] mb-[15px]">
            {data?.title}
          </h2>
          <span className="3xl:text-[18px] 2xl:text-[16px] xl:text-[12px] text-[12px] font-normal leading-normal text-black">
            {data?.published_on}
          </span>
        </div>
        <div className="w-full h-auto aspect-[1720/800] 3xl:mb-[90px] xl:mb-[60px] md:mb-[30px] mb-[20px] overflow-hidden block">
          <Image src={data?.thumbnail?.url} alt={data?.thumbnail?.alt} width={1720} height={800} />
        </div>
        <div className="typography [&>*]:md:my-[10px] [&>*]:my-[4px] [&:has(img)]:grid [&:has(img)]:gap-4 [&:has(img)]:grid-cols-1 sm:[&:has(img+img)]:grid-cols-2 lg:[&:has(img+img+img)]:grid-cols-3 [&>p]:col-span-full [&>p]:grid-cols-1 [&>p]:text-[12px] [&>p]:xl:text-[13px] [&>p]:2xl:text-[16px] [&>img]:col-span-1 space-y-4">
          <p>{parse(data?.description)}</p>
          {Object.entries(data?.images).map(([key, image]) => (
            <Image key={key} src={image?.url} alt={image?.alt} width={560} height={360} />
          ))}
          <p>{parse(data?.sub_description)}</p>
        </div>
      </div>
    </section>
  );
}
