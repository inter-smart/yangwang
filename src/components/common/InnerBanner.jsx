import { Heading } from "@/components/layout/Heading";
import { Img } from "@/components/layout/Img";

export default function InnerBanner({ title, image, alt = "image" }) {
  return (
    <section className="w-full h-[355px] xl:h-[430px] 2xl:h-[600px] 3xl:h-700px] flex items-center py-[70px_15px] lg:py-[80px_25px] xl:py-[90px_35px] 3xl:py-[120px_60px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-gradient-to-t before:from-[rgba(0,0,0,0.3)] before:to-[rgba(0,0,0,0.3)] before:pointer-events-none">
      <Img
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        className="-z-1 object-cover"
      />
      <div className="container w-full h-full">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <Heading
            size="heading3"
            as="h3"
            className="capitalize text-center text-white"
          >
            {title}
          </Heading>
        </div>
      </div>
    </section>
  );
}
