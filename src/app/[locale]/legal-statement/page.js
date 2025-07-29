import InnerBanner from "@/components/common/InnerBanner";
import LegalStatement from "@/components/features/legal-statement/LegalStatement";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/terms-and-condition/${encodeURIComponent(locale)}`, {
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

  let legalStatementData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/terms-and-condition/${encodeURIComponent(locale)}`, {
      cache: "no-store",
      // next: { revalidate: 60 },
    });

    const result = await response.json();
    if (result.success && result.status === 200) {
      legalStatementData = result.data;
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch ownership data: ${error.message}`);
  }
  return (
    <>
      <InnerBanner
        title={legalStatementData?.banner_section?.title}
        banner_image={legalStatementData?.banner_section?.web_banner}
        banner_alt={legalStatementData?.banner_section?.web_banner_alt || "Banner Image"}
      />
      <LegalStatement data={legalStatementData?.["terms-and-conditions"]} />
    </>
  );
}
