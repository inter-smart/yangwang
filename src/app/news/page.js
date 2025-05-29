import BannerSection from "@/components/common/BannerSection";
import NewSection from "@/components/features/news/NewSection";
import SocialLinkSection from "@/components/features/news/SocialLinkSection";

export const metadata = {
    title: "yangwang | News",
    description:
        "Demo Text.",
};

export default function NewsPage() {
    return (
        <>
            <BannerSection title="Latest News & Updates" />
            <NewSection />
            <SocialLinkSection />
        </>
    );
}
