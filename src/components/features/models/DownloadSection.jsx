import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";
import parse from "html-react-parser";

export default function DownloadSection({data}) {
  return (
    <section className="w-full h-auto block py-[40px] lg:py-[60px] xl:py-[100px] 2xl:py-[130px_140px] 3xl:py-[140px_160px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/50 before:pointer-events-none">
      <Image
        src="/images/follow-Banner.jpg"
        alt="follow-Banner"
        fill
        sizes="100vw"
        className="object-cover -z-2"
      />
      <div className="container">
        <div className="xl:max-w-[520px] 2xl:max-w-[676px] 3xl:max-w-[768px] mx-auto">
          <Heading
            size="heading3"
            as="h3"
            className="text-center text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
          >
            {data?.footer_title || "Download Now"}
          </Heading>
          <Text
            size="text1"
            as="div"
            className="text-center text-white mb-[20px] xl:mb-[30px] 3xl:mb-[40px]"
          >
            {parse(data?.footer_desc) || "All the surprising goods are available in Yangwang Mall to enrich your car life. The Yangwang Mall will continue to add new products, so stay tuned."}
          </Text>
          <div className="flex justify-center">
            <LinkButton
              href={data?.download_spec || "#"}
              target="_blank"
              rel="noopener noreferrer"
              color="black"
              aria-label="Download spec sheet"
              className="min-w-[110px] sm:min-w-[130px] xl:min-w-[155px] 2xl:min-w-[200px] 3xl:min-w-[230px]"
            >
              {data?.download_spec_btn_text || "Download Spec Sheet"}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
