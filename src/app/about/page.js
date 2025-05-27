import AboutSection from "@/components/features/about/AboutSection";
import YangwangSection from "@/components/features/about/YangwangSection";
import InovationSection from "@/components/features/about/InnovationSection";
import LookupSection from "@/components/features/about/LookupSection";

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
            <InovationSection />
        </>
    );
}
