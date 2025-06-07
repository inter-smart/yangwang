import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import { Text } from "../layout/Text";

export default function InnerBanner({
  title,
  banner_image,
  banner_alt,
  description,
}) {
  return (
    <section className="w-full h-[355px] xl:h-[430px] 2xl:h-[600px] 3xl:h-700px] flex items-center py-[70px_15px] lg:py-[80px_25px] xl:py-[90px_35px] 3xl:py-[120px_60px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/50 before:pointer-events-none">
      {banner_image && (
        <Image
          src={banner_image}
          alt={banner_alt}
          fill
          sizes="100vw"
          className="-z-2 object-cover"
          priority
        />
      )}
      <div className="container w-full h-full">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[35px] 3xl:text-[40px] font-medium leading-none capitalize text-center text-white">
            {title}
          </h3>
          {description && (
            <Text
              as="p"
              size="text4"
              className="capitalize text-center text-white"
            >
              {description}
            </Text>
          )}
        </div>
      </div>
    </section>
  );
}
