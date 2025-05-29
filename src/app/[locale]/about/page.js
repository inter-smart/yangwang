import AboutSection from "@/components/features/about/AboutSection";
import YangwangSection from "@/components/features/about/YangwangSection";
import InovationSection from "@/components/features/about/InnovationSection";
import LookupSection from "@/components/features/about/LookupSection";
import BrandSection from "@/components/features/about/BrandSection";
import FutureSection from "@/components/features/about/FutureSection";

const dealership = [
    {
        title: "About Dealership",
        description: "Yangwang is a high-end new energy vehicle brand under BYD Group. Relying on BYD Group's innovative automotive technology, top industrial system strength, and forward-looking design, it provides users with high-end vehicle products beyond imagination.",
        imageSrc: "about-dealership.jpg",
        imageAlt: "About Dealership",
    },
];
export const metadata = {   
    title: "yangwang | About",
    description:
        "Demo Text.",
};

export default function page() {
    return (
        <>
            <AboutSection />
            <YangwangSection />
            <LookupSection />
            <BrandSection />
            {dealership.map((section, index) => (
                <YangwangSection
                    key={index}
                    title={section.title}
                    description={section.description}
                    imageSrc={section.imageSrc} 
                    imageAlt={section.imageAlt}
                />
            ))}
            <FutureSection />
            <InovationSection />
        </>
    );
}
