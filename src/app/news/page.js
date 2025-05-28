import BannerSection from "@/components/common/BannerSection";
import NewSection from "@/components/features/news/NewSection";
import FollowusSection from "@/components/features/news/FollowusSection";

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
            <FollowusSection />
        </>
    );
}
