import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";

export default function ModelsHeroSection({ data, model }) {
  const { media } = data;

  console.log("data ====>", data);

  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] flex items-end py-[40px] lg:py-[60px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[90px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/50 before:pointer-events-none">
      <picture className="absolute -z-2 inset-0">
        <source media="(max-width: 768px)" srcSet={media?.banner_mobile?.url} />
        <Image
          src={media?.banner_web?.url}
          alt={media?.banner_web?.alt_text}
          fill
          sizes="100vw"
          className="-z-2 object-cover"
          priority
        />
      </picture>
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-[10px]">
          <div className="relative z-0">
            <div className="3xl:text-[220px] 2xl:text-[200px] xl:text-[150px] lg:text-[130px] sm:text-[92px] text-[72px] leading-none uppercase font-medium bg-gradient-to-b from-white via-80% via-white/10 to-transparent bg-clip-text text-transparent absolute -z-1 bottom-[20%] ltr:right-[-5%] rtl:left-[-5%]">
              {model}
            </div>
            <Image
              src="/images/models-title-logo.svg"
              alt="models-logo"
              width={246}
              height={26}
              className={"w-[100px] sm:w-[120px] xl:w-[160px] 2xl:w-[215px] 3xl:w-[246px] mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]"}
            />
            <Heading size="heading3" as="h3" className="!font-normal text-white max-lg:mb-[15px]">
              {data?.banner_sub_title}
            </Heading>
          </div>
          <div className="flex gap-[10px] lg:gap-[10px] 2xl:gap-[15px] 3xl:gap-[18px]">
            <LinkButton
              href={data?.banner_link || "#"}
              color="white"
              aria-label="Book attest drive"
              className="min-w-[90px] sm:min-w-[100px] xl:min-w-[100px] 2xl:min-w-[140px] 3xl:min-w-[155px]"
            >
              {data?.banner_btn || "Book a test drive"}
            </LinkButton>
            <LinkButton
              href={data?.download_spec_link || "#"}
              target="_blank"
              color="black"
              aria-label="Download spec sheet"
              className="min-w-[120px] sm:min-w-[130px] xl:min-w-[155px] 2xl:min-w-[200px] 3xl:min-w-[230px]"
            >
              {data?.download_spec_btn || "Download spec sheet"}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
