import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function DealershipSection({ data, showVideo }) {
  const { title, description, images } = data;
  const deskImageSrc = images?.web?.url;
  const mobileImageSrc = images?.mob?.url;
  const imageAlt = images?.web?.alt;
  return (
    <section className="w-full max-md:h-[420px] md:h-dvh md:min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block relative z-0 before:content-[''] before:absolute before:z-1 before:inset-0 before:w-full before:h-full before:block before:bg-black/20 before:pointer-events-none">
      <picture>
        <source media="(max-width: 768px)" srcSet={mobileImageSrc} />
        <Image
          src={deskImageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="-z-1 object-cover"
          priority
        />
      </picture>
      {showVideo && (
        <div className="w-full h-full absolute z-1 inset-0 overflow-hidden opacity-20">
          <video
            autoPlay
            playsInline
            preload="auto"
            width={1460}
            height={675}
            muted
            loop
            className="w-full h-full object-cover"
            aria-label="Background video"
            aria-hidden="true"
          >
            <source src="/videos/about-bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="container">
        <div className="w-full 3xl:max-w-[1070px] max-sm:px-[10px] md:max-w-[715px] max-w-full h-full 3xl:pt-[125px] xl:pt-[80px] pt-[50px] m-auto text-center text-white absolute z-1 inset-0 flex flex-col items-center justify-start">
          <Heading size="heading3" as="h3" className="3xl:mb-[40px] xl:mb-[30px] mb-[20px]">
            {title}
          </Heading>
          {description && (
            <Text
              as="p"
              className="3xl:text-[18px] 2xl:text-[16px] xl:text-[13px] md:text-[12px] text-[11px] font-normal leading-normal"
            >
              {description}
            </Text>
          )}
        </div>
      </div>
    </section>
  );
}
