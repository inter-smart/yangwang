import InnerBanner from "@/components/common/InnerBanner";
import PrivacyPolicy from "@/components/features/privacy-policy/PrivacyPolicy";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/privacy-policy/${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });
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
  const { locale } = await params;

  let privacyPolicyData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/privacy-policy/${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });

    const result = await response.json();
    if (result.success && result.status === 200) {
      privacyPolicyData = result.data;
      console.log(`[2025-05-29T14:37:00.000Z] Fetched ownership  data for ${locale}`, privacyPolicyData);
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch ownership data: ${error.message}`);
  }
  return (
    <>
      <InnerBanner
        title={privacyPolicyData?.banner_section?.title}
        banner_image={privacyPolicyData?.banner_section?.web_banner}
        banner_alt={privacyPolicyData?.banner_section?.web_banner_alt}
        className="!h-[220px] xl:!h-[400px] 2xl:!h-[576px] 3xl:!h-620px] "
      />
      <PrivacyPolicy data={privacyPolicyData?.["privacy-policy"]} titles={privacyPolicyData?.title_listing} />
    </>
  );
}
