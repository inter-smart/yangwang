import AboutSection from "@/components/features/about/AboutSection";
import DealershipSection from "@/components/features/about/DealershipSection";
import InovationSection from "@/components/features/about/InnovationSection";
import BrandSection from "@/components/features/about/BrandSection";
import FutureSection from "@/components/features/about/FutureSection";
import VisionSection from "@/components/features/about/VisionSection";

export const metadata = {
    title: "Yangwang | About",
    description:
        "Demo Text.",
};

export default function page() {
    return (
        <>
            <AboutSection />
            <DealershipSection
                title="About Yangwang"
                description="Yangwang is BYD Auto's premier luxury electric vehicle (EV) brand, launched in January 2023 to compete with high-end automakers like Mercedes-Benz, BMW, and Audi. Positioned above BYD's other sub-brands, Denza and Fangchengbao, Yangwang introduces cutting-edge technologies and innovative designs to the luxury EV market."
                imageSrc="about-yangwang.jpg"
                imageAlt="About Yangwang"
            />
            <VisionSection />
            <BrandSection />
            <DealershipSection
                title="About Dealership"
                description="Yangwang is a high-end new energy vehicle brand under BYD Group. Relying on BYD Group's innovative automotive technology, top industrial system strength, and forward-looking design, it provides users with high-end vehicle products beyond imagination."
                imageSrc="about-dealership.jpg"
                imageAlt="About Dealership"
            />
            <FutureSection />
            <InovationSection />
        </>
    );
}
