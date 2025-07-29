import InnerBanner from "@/components/common/InnerBanner";
import OwnerContactSection from "@/components/features/ownership/OwnerContactSection";
import OwnershipSection from "@/components/features/ownership/OwnershipSection";
import PartsSection from "@/components/features/ownership/PartsSection";
import ServiceSection from "@/components/features/ownership/ServiceSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ownership/${encodeURIComponent(locale)}`, {
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

  let ownerShipData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ownership/${encodeURIComponent(locale)}`, {
      cache: "no-store",
      // next: { revalidate: 60 },
    });

    const result = await response.json();
    if (result.success && result.status === 200) {
      ownerShipData = result.data;
      //console.log(`[2025-05-29T14:37:00.000Z] Fetched ownership  data for ${locale}`, ownerShipData);
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch ownership data: ${error.message}`);
  }
  return (
    <>
      <InnerBanner
        title={ownerShipData?.banner_section?.title}
        banner_image={ownerShipData?.banner_section?.web_banner}
        banner_alt={ownerShipData?.banner_section?.web_banner_alt}
      />
      <OwnershipSection data={ownerShipData?.section_two} />
      <ServiceSection data={ownerShipData?.section_three} />
      <PartsSection data={ownerShipData?.section_four} />
      <OwnerContactSection data={ownerShipData?.section_five} />
    </>
  );
}
