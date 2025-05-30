import InnerBanner from "@/components/common/InnerBanner";
import NewSection from "@/components/features/news/NewSection";
import SocialLinkSection from "@/components/features/news/SocialLinkSection";

export const metadata = {
    title: "yangwang | News",
    description:
        "Demo Text.",
};
export default function page() {
    return (
        <>
            <InnerBanner title="Latest News & Updates" image="news_banner.jpg"/>
            <NewSection />
            <SocialLinkSection />
        </>
    );
}