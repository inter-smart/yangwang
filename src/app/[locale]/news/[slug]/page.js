import InnerBanner from "@/components/common/InnerBanner";
import NewsDetailSection from "@/components/features/news/NewsDetailSection";
import RelatedPostSection from "@/components/features/news/RelatedPostSection";
import SocialLinkSection from "@/components/features/news/SocialLinkSection";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/news-and-event-details/${slug}/${encodeURIComponent(locale)}`,
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    );
    const result = await response.json();

    if (result.success && result.status === 200) {
      const seoData = result.data?.meta?.seo;
      return {
        title: seoData?.title,
        description: seoData?.description,
        keywords: seoData?.keywords,
        openGraph: {
          title: seoData?.og_title,
          description: seoData?.og_description,
          images: seoData?.og_image ? [seoData.og_image] : [],
          url: seoData?.canonical_url,
        },
        alternates: {
          canonical: seoData?.canonical_url,
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }
}

export default async function page({ params }) {
  const { locale, slug } = await params;

  let newsData = {};

  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_BASE_URL
      }/news-and-events-details/${slug}/${encodeURIComponent(locale)}`,
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    );

    const result = await response.json();
    if (result.success && result.status === 200) {
      newsData = result.data;
      //console.log(`[2025-05-29T14:37:00.000Z] Fetched news  data for ${locale}`, newsData);
    } else {
      console.error(
        `[2025-05-29T14:37:00.000Z] API error: ${
          result.message || "Unknown error"
        }`
      );
    }
  } catch (error) {
    console.error(
      `[2025-05-29T14:37:00.000Z] Failed to fetch news data: ${error.message}`
    );
  }
  
  return (
    <>
      <InnerBanner
        title={newsData?.banners?.banner_title}
        mobile_image={newsData?.banners?.mobile_banner}
        banner_image={newsData?.banners?.web_banner}
        banner_alt={newsData?.banners?.web_banner_alt || "Banner Image"}
      />
      <NewsDetailSection data={newsData} locale={locale} />
      {newsData?.related_list?.length > 0 && (
        <RelatedPostSection data={newsData?.related_list} locale={locale} />
      )}
      <SocialLinkSection data={newsData?.social_media_section} />
    </>
  );
}
