import { Heading } from "@/components/layout/Heading";
import Image from "next/image";

const platformData = [
  {
    media: "/images/models-platform-1.svg",
    alt: "models-platform-1",
    title: "Turn around",
  },
  {
    media: "/images/models-platform-2.svg",
    alt: "models-platform-2",
    title: "Emergency Floating Water",
  },
  {
    media: "/images/models-platform-3.svg",
    alt: "models-platform-3",
    title: "Extreme stability",
  },
  {
    media: "/images/models-platform-4.svg",
    alt: "models-platform-4",
    title: "Keep steady even if tire bursts",
  },
];

export default function PlatformSection() {
  return (
    <section className="w-full h-auto block py-[40px_30px] lg:py-[60px_40px] xl:py-[80px_50px] 2xl:py-[100px_60px] 3xl:py-[120px_70px] relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:inset-0 before:w-full before:h-full before:bg-black/30 before:pointer-events-none">
      <video
        autoPlay
        preload="auto"
        width={1920}
        height={540}
        muted
        loop
        className="w-full h-full object-cover absolute -z-2 inset-0"
        aria-label="Video player"
        poster="/images/models-poster-platform-bg.jpg"
      >
        <source src="/videos/models-platform-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <div className="max-w-[640px] xl:max-w-[768px] 2xl:max-w-[992px] 3xl:max-w-[1080px] mx-auto">
          <Heading
            size="heading3"
            as="h3"
            className="text-center text-white mb-[20px] xl:mb-[40px] 3xl:mb-[60px]"
          >
            E4 Platform
          </Heading>
          <Heading
            size="heading5"
            as="h5"
            className="leading-normal text-center capitalize text-white mb-[15px] xl:mb-[20px] 3xl:mb-[30px]"
          >
            the independent drive of four motors as the core. the in - depth
            integrated perception of the whole vehiclethetechnical platform of
            extreme safety
          </Heading>
        </div>
        <div className="max-w-[768px] xl:max-w-[992px] 2xl:max-w-[1200px] 3xl:max-w-[1300px] mx-auto flex flex-wrap [&>*]:p-[10px] xl:[&>*]:p-[15px] 3xl:[&>*]:p-[20px]">
          {platformData.map((item, index) => (
            <div key={index} className="w-1/2 lg:w-1/4">
              <Image
                src={item.media}
                alt={item.alt}
                width={40}
                height={40}
                className="w-[40px] xl:w-[60px] 3xl:w-[60px] aspect-[4/3] mx-auto mb-[10px] xl:mb-[15px] 3xl:mb-[20px]"
              />
              <Heading
                size="heading6"
                as="h6"
                className="text-center text-white"
              >
                {item.title}
              </Heading>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
