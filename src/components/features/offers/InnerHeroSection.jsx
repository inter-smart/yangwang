import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";

export default function InnerHeroSection({ data }) {
  const { title, web_banner, web_banner_alt, mobile_banner, mobile_banner_alt } = data;
  return (
    <section className="w-full h-[320px] lg:h-[340px] xl:h-[460px] 2xl:h-[600px] 3xl:h-[700px] flex items-center relative z-0 pt-[50px] lg:pt-[70px] 2xl:pt-[80px] 3xl:pt-[90px]">
      <Img src={web_banner} alt="banner-offers" fill sizes="100vw" className="object-cover -z-1" priority />
      <div className="container">
        <div className="flex flex-col items-center">
          <Heading
            size="heading3"
            as="h1"
            className="leading-none font-medium text-center text-white mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
          >
            {title}
          </Heading>
          <LinkButton
            href="#"
            color="black"
            className="min-w-[100px] sm:min-w-[120px] xl:min-w-[155px] 2xl:min-w-[200px] 3xl:min-w-[230px] mx-auto"
          >
            Explore Latest Offers
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
