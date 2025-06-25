import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";
import Image from "next/image";
import parse from "html-react-parser";

export default function FollowusSection({ data }) {
  return (
    <section className="w-full 3xl:py-[130px_90px] 2xl:py-[80px_50px] xl:py-[50px] py-[40px] relative z-0 after:content-[''] after:absolute after:-z-1 after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.8)]">
      <Img
        src="follow-Banner.jpg"
        alt="follow-Banner"
        fill
        sizes="100vw"
        className="-z-2 object-cover transition-transform duration-300 pointer-events-none"
      />
      <div className="container h-full">
        <div className="w-full xl:mb-[45px] mb-[30px]">
          <Heading
            size="heading3"
            as="h3"
            className="text-white font-medium 2xl:mb-[25px] lg:max-w-[750px] max-w-[450px] mx-auto mb-[20px] text-center"
          >
            {/* Follow us to get updates */}
            {data?.header?.social_link_title}
          </Heading>
          <Text size="text4" as="div" className="capitalize text-white text-center max-w-[650px] mx-auto ">
            {/* All the surprising goods are available in Yangwang Mall to enrich your car life. The Yangwang Mall will continue to
            add new products, so stay tuned. */}
            {parse(data?.header?.social_media_description)}
          </Text>
        </div>
        <div className="flex justify-center gap-4 ">
          {data?.social_media_links?.map(({ icon, icon_alt, name, url }, idx) => (
            <a
              key={idx}
              href={url}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
              className=" 2xl:w-[55px] xl:w-[45px] sm:w-[40px] w-[35px] 2xl:h-[55px] xl:h-[45px] sm:h-[40px] h-[35px]
                                            rounded-full flex items-center justify-center border border-gray-300 text-black transition-all duration-300
                                            hover:bg-[#5949A7] hover:text-white cursor-pointer"
            >
              <Image
                src={icon}
                alt={icon_alt}
                width={12}
                height={12}
                className="w-[12px] xl:w-[21px] h-[12px] xl:h-[18px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
