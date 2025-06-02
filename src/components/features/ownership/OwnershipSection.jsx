import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function OwnershipSection({ data }) {
  const { title, description, web_banner, web_banner_alt, mobile_banner, mobile_banner_alt } = data;
  console.log("data", data);

  return (
    <section className="w-full min-h-[355px] xl:min-h-[495px] 2xl:min-h-[650px] 3xl:min-h-800px] flex items-end py-[70px_15px] lg:py-[80px_35px] xl:py-[90px_45px] 3xl:py-[120px_75px] relative z-0 after:content-[''] after:block after:absolute after:-z-1 after:left-0 after:inset-0 after:w-full after:h-full after:bg-gradient-to-r after:from-black after:to-black/50 after:pointer-events-none">
      <video
        src="/videos/owner.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="container w-full h-full">
        <div className="flex items-center justify-center flex-col w-full h-full m-auto md:px-0 px-[15px] md:max-w-[62%]">
          <Heading size="heading3" as="h3" className="capitalize text-center text-white 2xl:mb-[35px] mb-[20px]">
            {title}
          </Heading>
          <Text size="text4" as="p" className="capitalize text-center text-white">
           {description}
          </Text>
          <LinkButton
            href="#"
            aria-label="Explore Ownership"
            className="min-w-[135px] xl:min-w-[180px] 2xl:min-w-[200px] 3xl:min-w-[230px] mt-[35px] hover:!bg-[#F1D1A8]"
            color="black"
          >
            Explore Ownership Benefits
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
