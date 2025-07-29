import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";
import parse from "html-react-parser";

export default function OwnerContactSection({ data }) { 
  const {
    button_link = "#",
    button_text = "Default Button",
    description = "", // Fallback to empty string
    mobile_banner = "/fallback-image.jpg",
    mobile_banner_alt = "Mobile Banner",
    title = "Default Title",
    web_banner = "/fallback-image.jpg",
    web_banner_alt = "Web Banner",
  } = data;

  return (
    <section className="w-full py-[30px_25px] lg:py-[60px_55px] xl:py-[80px_70px] 3xl:py-[100px_115px]">
      <div className="container">
        <div className="w-full h-full min-h-[280px] md:min-h-[335px] xl:min-h-[365px] 2xl:min-h-[468px] 3xl:min-h-[535px] bg-black flex items-center relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-black/60 before:to-black/60 before:pointer-events-none">
          <Image
            src={web_banner}
            alt={web_banner_alt || "Banner Image"}
            fill
            sizes="1722px"
            className="object-cover -z-2"
          />
          <div className="w-full h-full">
            <div className="flex items-center justify-center flex-col w-full h-full m-auto md:px-[0] px-[15px] md:max-w-[62%]">
              <Heading
                size="heading3"
                as="h3"
                className="capitalize text-center text-white 2xl:mb-[35px] mb-[20px]"
              >
                {title}
              </Heading>

              <Text
                size="text4"
                as="div"
                className="capitalize text-center text-white"
              >
                {parse(description || "<p>No description available</p>")}
              </Text>

              <LinkButton
                color="white"
                href={button_link}
                aria-label="Book Test Drive"
                className="min-w-[70px] sm:min-w-[100px] xl:min-w-[120px] 3xl:min-w-[145px] mt-[35px]"
              >
                {button_text}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
