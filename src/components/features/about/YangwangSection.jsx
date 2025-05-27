"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";

export default function YangwangSection({
    title = "About Yangwang",
    description = "Yangwang is BYD Auto's premier luxury electric vehicle (EV) brand, launched in January 2023 to compete with high-end automakers like Mercedes-Benz, BMW, and Audi. Positioned above BYD's other sub-brands, Denza and Fangchengbao, Yangwang introduces cutting-edge technologies and innovative designs to the luxury EV market.",
    imageSrc = "about-yangwang.jpg",
    imageAlt = "About Yangwang"
}) {
    return (
        <section className="w-full h-dvh min-h-[368px] xl:min-h-[460px] 3xl:min-h-[768px] block relative z-0">
            <Img
                src={imageSrc}
                alt={imageAlt}
                width={1920}
                height={1080}
                className="object-cover w-full h-full"
                priority
            />
            <div className="container">
                <div className="w-full max-w-[1070px] h-full 3xl:pt-[125px] xl:pt-[80px] m-auto text-center text-white absolute z-1 inset-0 flex flex-col items-center justify-start">
                    <Heading
                        size="heading3"
                        as="h3"
                        className="3xl:mb-[40px] xl:mb-[30px] max-w-3xl"
                    >
                        {title}
                    </Heading>
                    <Text
                        as="p"
                        className="3xl:text-[18px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[12px] font-normal leading-normal"
                    >
                        {description}
                    </Text>
                </div>
            </div>
        </section>
    );
}