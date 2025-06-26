import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";

const title = "Follow us to get updates";
const description =
  "All the surprising goods are available in Yangwang Mall to enrich your car life. The Yangwang Mall will continue to add new products, so stay tuned.";
const backgroundImage = "/images/news-followus-banner.jpg";


export default function SocialLinkSection({ data }) {
  return (
    <section className="w-full h-auto block m-0">
      <div className="h-full min-h-[280px] md:min-h-[335px] xl:min-h-[365px] 2xl:min-h-[535px] w-full flex items-center relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:left-0 before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/60 before:to-black/60 before:pointer-events-none after:content-[''] after:block after:absolute after:-z-1 after:left-0 after:inset-0 after:w-1/2 after:h-full after:bg-gradient-to-t after:from-[rgba(0,0,0,0.5)] after:to-[rgba(0,0,0,0.5)] after:pointer-events-none">
        <Image
          src={backgroundImage}
          alt="Background image for Follow Us section"
          fill
          className="absolute -z-2 inset-0 w-full h-full object-cover"
          priority
        />
        <div className="w-full h-full">
          <div className="flex items-center justify-center flex-col w-full h-full m-auto md:px-[0] px-[15px] md:max-w-[62%]">
            <Heading size="heading3" as="h3" className="capitalize text-center text-white 2xl:mb-[35px] mb-[20px]">
              {data?.header?.social_link_title}
            </Heading>
            <Text size="text4" as="p" className="capitalize text-center text-white 2xl:max-w-[775px] lg:max-w-[510px]">
              {data?.header?.social_media_description || description}
            </Text>
            <div className="2xl:mt-[45px] md:mt-[30px] mt-[20px] gap-[15px] flex flex-wrap">
              {data?.social_media_links?.map((item, index) => (
                <a
                  key={index}
                  href={item?.url}
                  aria-label={item?.alt}
                  target="_blank"
                  className="2xl:w-[55px] lg:w-[40px] w-[30px] h-auto aspect-[55/55] overflow-hidden rounded-full border border-[#DADADA] flex items-center justify-center hover:bg-[#5949A7] hover:border-transparent transition-all duration-400"
                >
                  <Image
                    src={item?.icon}
                    alt={item?.icon_alt}
                    width={20}
                    height={20}
                    className="w-[40%] h-[40%] object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
