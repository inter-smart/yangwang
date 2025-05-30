import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";
import Image from "next/image";

export default function ModelsHeroSection() {
  return (
    <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] flex items-end py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[100px] 3xl:py-[120px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/50 before:pointer-events-none">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/images/mob-models-u8-1.jpg"
        />
        <Image
          src="/images/models-u8-1.jpg"
          alt="models-bg"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="-z-2 object-cover"
        />
      </picture>
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-[10px]">
          <div className="relative z-0">
            <div className="3xl:text-[220px] 2xl:text-[200px] xl:text-[150px] lg:text-[80px] leading-none uppercase font-medium bg-gradient-to-b from-white via-80% via-white/10 to-transparent bg-clip-text text-transparent absolute -z-1 bottom-[20%] right-[-10%]">
              u8
            </div>
            <Img
              src="models-title-logo.svg"
              alt="models-logo"
              width={246}
              height={26}
              className={"mb-[10px] lg:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]"}
            />
            <Heading
              size="heading3"
              as="h3"
              className="!font-normal text-white"
            >
              Redefining Luxury Off-Roading
            </Heading>
          </div>
          <div className="flex gap-[5px] lg:gap-[10px] 2xl:gap-[15px] 3xl:gap-[18px]">
            <LinkButton
              href="#"
              color="white"
              aria-label="Book attest drive"
              className="min-w-[70px] sm:min-w-[80px] xl:min-w-[100px] 2xl:min-w-[140px] 3xl:min-w-[155px]"
            >
              Book attest drive
            </LinkButton>
            <LinkButton
              href="#"
              color="black"
              aria-label="Download spec sheet"
              className="min-w-[80px] sm:min-w-[100px] xl:min-w-[155px] 2xl:min-w-[200px] 3xl:min-w-[230px]"
            >
              Download spec sheet
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
