import BannerSection from "@/components/common/BannerSection";
import NewsDetailSection from "@/components/features/news/NewsDetailSection";
import RelatedPostSection from "@/components/features/news/RelatedPostSection";
import SocialLinkSection from "@/components/features/news/SocialLinkSection";

export default function NewsDetailPage() {
    return (
        <>
            <BannerSection title="Latest News & Updates"/>
            <NewsDetailSection />
            <RelatedPostSection />
            <SocialLinkSection />
        </>
    )
}
