import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import parse from "html-react-parser";
import Image from "next/image";

export default function OwnershipSection({ data }) {
  const { title, description, web_banner, video } = data;

  return (
    <section className="w-full min-h-[355px] xl:min-h-[495px] 2xl:min-h-[650px] 3xl:min-h-800px] flex items-end py-[40px_20px] lg:py-[80px_35px] xl:py-[90px_45px] 3xl:py-[120px_75px] relative z-0 after:content-[''] after:block after:absolute after:-z-1 after:left-0 after:inset-0 after:w-full after:h-full after:bg-gradient-to-r after:from-black after:to-black/50 after:pointer-events-none">
      {video ? (
        <video
          autoPlay
          preload="auto"
          playsInline
          width={1920}
          height={1080}
          muted
          loop
          className="w-full h-full absolute -z-2 inset-0 object-cover"
          aria-label="Video player"
          poster={web_banner}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <picture className="absolute -z-2 inset-0">
          <source media="(max-width: 768px)" srcSet={data?.mobile_banner} />
          <Image
            src={web_banner}
            alt={data?.web_banner_alt || "Hero Banner"}
            fill
            sizes="100vw"
            className="w-full h-full -z-2 object-cover"
            priority
          />
        </picture>
      )}

      <div className="container w-full h-full">
        <div className="flex items-center justify-center flex-col w-full h-full m-auto md:px-0 px-[15px] md:max-w-[62%]">
          <Heading
            size="heading3"
            as="h3"
            className="capitalize text-center text-white 2xl:mb-[35px] mb-[20px]"
          >
            {title}
          </Heading>
          {description && (
            <Text
              size="text4"
              as="div"
              className="capitalize text-center text-white"
            >
              {parse(description) || "No description"}
            </Text>
          )}

          {/* Currentlt No benefits page */}
          {/* <LinkButton
            href="#"
            aria-label="Explore Ownership"
            className="min-w-[135px] xl:min-w-[180px] 2xl:min-w-[200px] 3xl:min-w-[230px] mt-[35px] hover:!bg-[#F1D1A8]"
            color="black"
          >
            Explore Ownership Benefits
          </LinkButton> */}
        </div>
      </div>
    </section>
  );
}
