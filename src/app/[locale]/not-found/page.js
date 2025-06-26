import { LinkButton } from "@/components/layout/Button";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";

import { useLocale } from "next-intl";

export default function NotFound() {
  const locale = useLocale(); // Get current locale (e.g., 'en', 'ar')

  return (
    <>
      <div className="w-full h-[60px] lg:h-[80px] 2xl:h-[100px] 3xl:h-[120px] block bg-black transition-all duration-300 "></div>
      <section className="w-full h-[calc(100vh-60px)] lg:h-[calc(100vh-80px)] 2xl:h-[calc(100vh-100px)] 3xl:h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden text-white text-center 3xl:py-[100px] xl:py-[60px] py-[30px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/10 before:backdrop-blur-[10px] before:pointer-events-none">
        <Image src="/images/404.jpg" alt="404 Background" fill sizes="100vw" className="object-cover -z-2" />
        <div className="container flex flex-col items-center justify-center px-4">
          <Image
            src="/images/404Ttle.png"
            alt="404 Title"
            width={400}
            height={100}
            className="w-full max-w-[180px] md:max-w-[245px] xl:max-w-[340px] 2xl:max-w-[468px] object-contain mb-8"
          />
          <div>
            <Heading size="heading6" as="h6" className="text-white mb-[20px] xl:mb-[30px] 3xl:mb-[40px]">
              Page Not Found
            </Heading>
            <LinkButton
              href={`/${locale}`}
              color="black"
              aria-label="Back home"
              className="min-w-[120px] sm:min-w-[140px] xl:min-w-[160px] 2xl:min-w-[180px] 3xl:min-w-[190px]"
            >
              Go Back home
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
