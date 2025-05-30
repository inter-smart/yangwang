import InnerBanner from "@/components/common/InnerBanner";
import NewsDetailSection from "@/components/features/news/NewsDetailSection";
import RelatedPostSection from "@/components/features/news/RelatedPostSection";
import SocialLinkSection from "@/components/features/news/SocialLinkSection";

export default async function page({ params }) {
    const { locale } = await params;
    return (
        <>
            <InnerBanner title="Latest News & Updates" image="newsdetail_banner.jpg" />
            <NewsDetailSection />
            <RelatedPostSection locale={locale}/>
            <SocialLinkSection />
        </>
    )
}
