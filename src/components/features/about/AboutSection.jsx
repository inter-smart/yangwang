"use client";

import { Heading } from "@/components/layout/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutSection({ data, locale }) {
  const swiperRef = useRef(null);

  console.log(
    "[2025-05-30T13:29:00.000Z] About data:",
    JSON.stringify(data, null, 2)
  );

  // Fallback images if data.images is not ready
  const images =
    Array.isArray(data?.images) && data.images.length >= 3
      ? data.images
      : [
          { url: "/placeholder.jpg", alt: "Placeholder 1" },
          { url: "/placeholder.jpg", alt: "Placeholder 2" },
          { url: "/placeholder.jpg", alt: "Placeholder 3" },
        ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  return (
    <section className="w-full max-md:h-[420px] md:h-dvh md:min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block relative z-0">
      <Swiper
        key={locale}
        dir={locale === "en" ? "ltr" : "rtl"}
        spaceBetween={0}
        slidesPerView={3}
        watchSlidesProgress={true}
        initialSlide={0}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.update();
        }}
        suppressHydrationWarning
        className="h-full"
      >
        {images.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`} style={{ width: "33.333%" }}>
            <div className="w-full h-full block">
              <Image
                src={slide.url}
                alt={slide.alt || `About image ${index + 1}`}
                width={640}
                height={920}
                className="object-cover w-full h-full"
                priority={index < 3}
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/2Q=="
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <div className="absolute z-10 inset-0 flex items-center justify-center">
          <Heading size="heading3" as="h3" className="text-white">
            {data?.title || "About Us"}
          </Heading>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { Heading } from "@/components/layout/Heading";
// import { Img } from "@/components/layout/Img";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import Image from "next/image";

// const slides = [
//   {
//     src: "about-banner-1.jpg",
//     alt: "about-banner-1",
//   },
//   {
//     src: "about-banner-2.jpg",
//     alt: "about-banner-2",
//   },
//   {
//     src: "about-banner-3.jpg",
//     alt: "about-banner-3",
//   },
// ];
// export default function AboutSection({ data }) {
//     console.log("data ===>", data);

//   return (
//     <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block relative z-0">
//       <Swiper spaceBetween={0} slidesPerView={3} className="innovationSlider h-full">
//         {data?.images?.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="w-full h-full block">
//               <Image src={slide.url} alt={slide.alt} width={640} height={920} className="object-cover w-full h-full" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="container">
//         <div className="absolute z-1 inset-0 flex items-center justify-center">
//           <Heading size="heading3" as="h3" className="text-white">
//             {data?.title}
//           </Heading>
//         </div>
//       </div>
//     </section>
//   );
// }
