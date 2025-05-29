import { Text } from "@/components/layout/Text";
import { Img } from "@/components/layout/Img";

export default function BrandSection({
    description = "The brand logo of Yangwang comes from the Chinese character for electricity in oracle bone script.Drawing inspiration and strength from the word for electricity in oracle bone script, Yangwang continues to explore the peak of automotive technology with a fearless spirit . At the same time, Yangwang also hopes to bring users an unprecedented ultimate driving experiencewith disruptive technologies and products .",
    imageSrc = "about-brand.jpg",
    imageAlt = "About Yangwang"
}) {
    return (
        <section className="w-full h-auto 2xl:py-[145px_120px] xl:py-[95px_80px] md:py-[60px_60px] py-[40px_50px] bg-black block relative z-0">
            <div className="container">
                <div className="w-full h-auto aspect-[1720/575] overflow-hidden block">
                    <Img
                        src={imageSrc}
                        alt={imageAlt}
                        width={1920} 
                        height={1080}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                <div className="w-full 2xl:max-w-[1560px] xl:max-w-[1040px] md:max-w-[740px] h-full 2xl:pt-[50px] md:pt-[30px] pt-[20px] m-auto text-center text-white">
                    <Text
                        size="text1"
                        as="p"
                    >
                        {description}
                    </Text>
                </div>
            </div>
        </section>
    );
}