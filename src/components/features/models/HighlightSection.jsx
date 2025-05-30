"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";
import { useState } from "react";

const highlight = [
  {
    title: "Exterior Highlights",
    description: [
      {
        title: "Interstellar headlights for distinct identity",
        media: {
          type: "video",
          web_banner: {
            url: "/videos/vdo-models-exterior-1.mp4",
            thumbnail: "/images/poster-exterior-1.jpg",
            alt_text: "Video thumbnail image",
          },
          mobile_banner: {
            url: "/videos/vdo-models-exterior-1.mp4",
            thumbnail: "/images/poster-exterior-1.jpg",
            alt_text: "Video thumbnail image",
          },
        },
      },
      {
        title: "Sculpted wheel arches enhance off-road readiness",
        media: {
          type: "image",
          web_banner: {
            url: "/images/news-detail-1.jpg",
            thumbnail: "/images/news-detail-1.jpg",
            alt_text: "thumbnail image",
          },
          mobile_banner: {
            url: "/images/news-detail-1.jpg",
            thumbnail: "/images/news-detail-1.jpg",
            alt_text: "thumbnail image",
          },
        },
      },
      {
        title: 'D-pillar "Energy Tower" adds futuristic appeal',
        media: {
          type: "image",
          web_banner: {
            url: "/images/news-detail-2.jpg",
            thumbnail: "/images/news-detail-2.jpg",
            alt_text: "thumbnail image",
          },
          mobile_banner: {
            url: "/images/news-detail-2.jpg",
            thumbnail: "/images/news-detail-2.jpg",
            alt_text: "thumbnail image",
          },
        },
      },
      {
        title: "Roof-mounted detection system for intelligent driving",
        media: {
          type: "image",
          web_banner: {
            url: "/images/news-detail-3.jpg",
            thumbnail: "/images/news-detail-3.jpg",
            alt_text: "thumbnail image",
          },
          mobile_banner: {
            url: "/images/news-detail-3.jpg",
            thumbnail: "/images/news-detail-3.jpg",
            alt_text: "thumbnail image",
          },
        },
      },
    ],
  },
  {
    title: "Interior - Ultra Luxury Cabin",
    description: [
      {
        title: "Panoramic cockpit with flexible curved screens",
        media: {
          type: "video",
          web_banner: {
            url: "/videos/vdo-models-interior-1.mp4",
            thumbnail: "/images/poster-interior-1.jpg",
            alt_text: "Video thumbnail image",
          },
          mobile_banner: {
            url: "/videos/vdo-models-interior-1.mp4",
            thumbnail: "/images/poster-interior-1.jpg",
            alt_text: "Video thumbnail image",
          },
        },
      },
      {
        title: "5 integrated displays for immersive control",
        media: {
          type: "image",
          web_banner: {
            url: "/images/models-u8-1.jpg",
            thumbnail: "/images/models-u8-1.jpg",
            alt_text: "thumbnail image",
          },
          mobile_banner: {
            url: "/images/models-u8-1.jpg",
            thumbnail: "/images/models-u8-1.jpg",
            alt_text: "thumbnail image",
          },
        },
      },
      {
        title: "Ergonomic seating for all passengers",
        media: {
          type: "image",
          web_banner: {
            url: "/images/models-u8-1.jpg",
            thumbnail: "/images/models-u8-1.jpg",
            alt_text: "thumbnail image",
          },
          mobile_banner: {
            url: "/images/models-u8-1.jpg",
            thumbnail: "/images/models-u8-1.jpg",
            alt_text: "thumbnail image",
          },
        },
      },
      {
        title: "Premium sound system",
        media: {
          type: "image",
          web_banner: {
            url: "/images/models-u8-1.jpg",
            thumbnail: "/images/models-u8-1.jpg",
            alt_text: "thumbnail image",
          },
          mobile_banner: {
            url: "/images/models-u8-1.jpg",
            thumbnail: "/images/models-u8-1.jpg",
            alt_text: "thumbnail image",
          },
        },
      },
    ],
  },
];

export default function HighlightSection() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeItemIndexes, setActiveItemIndexes] = useState(
    highlight.map(() => 0)
  );

  const handleItemClick = (sectionIndex, itemIndex) => {
    setActiveSectionIndex(sectionIndex);
    setActiveItemIndexes((prev) =>
      prev.map((val, i) => (i === sectionIndex ? itemIndex : val))
    );
  };

  return (
    <section className="w-full h-auto block">
      {highlight.map((section, sectionIndex) => {
        const activeItemIndex = activeItemIndexes[sectionIndex];
        const activeItem = section.description[activeItemIndex];

        return (
          <div
            key={`highlight-section-${sectionIndex}`}
            className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] flex items-end py-[40px] lg:py-[60px] xl:py-[90px] 2xl:py-[140px] 3xl:py-[160px] relative z-0"
          >
            {activeItem.media.type === "video" ? (
              <video
                key={activeItem.media.web_banner.url}
                autoPlay
                preload="auto"
                width={1920}
                height={1080}
                muted
                loop
                className="w-full h-full absolute -z-2 inset-0 object-cover"
                aria-label="Video player"
                poster={activeItem.media.web_banner.thumbnail}
                priority="true"
              >
                <source
                  src={activeItem.media.web_banner.url}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={activeItem.media.mobile_banner.url}
                />
                <Image
                  src={activeItem.media.web_banner.url}
                  alt={activeItem.media.web_banner.alt_text}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="-z-2 object-cover"
                />
              </picture>
            )}
            <div className="container">
              <div>
                <Heading
                  size="heading3"
                  as="h3"
                  className="!font-normal text-white mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]"
                >
                  {section.title}
                </Heading>

                <div className="border-l-[1px] border-white/50 border-dashed mx-[5px]">
                  {section.description.map((desc, descIndex) => (
                    <div
                      key={`highlight-${descIndex}`}
                      className={`cursor-pointer mb-[15px] lg:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[45px] last:m-0 relative z-0 before:content-[''] before:block before:absolute before:-z-1 before:top-[10px] before:lg:top-[6px] before:2xl:top-[10px] before:left-0 before:-translate-x-1/2 before:w-[5px] before:lg:w-[7px] before:2xl:w-[9px] before:h-auto before:aspect-square before:rounded-full before:shadow-[0_0_0_10px_rgba(217,217,217,0.2)] before:pointer-events-none ${
                        activeItemIndexes[sectionIndex] === descIndex
                          ? "font-bold text-base1 before:bg-white"
                          : "before:bg-[#d9d9d9]"
                      }`}
                      onClick={() => handleItemClick(sectionIndex, descIndex)}
                    >
                      <Text
                        size="text1"
                        as="p"
                        className={` ${
                          activeItemIndexes[sectionIndex] === descIndex
                            ? "!font-bold text-base1 "
                            : "text-white"
                        }`}
                      >
                        {desc.title}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
