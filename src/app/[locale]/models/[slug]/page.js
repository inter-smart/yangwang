import BodyFeaturesSection from "@/components/features/models/BodyFeaturesSection";
import DesignViewSection from "@/components/features/models/DesignViewSection";
import DownloadSection from "@/components/features/models/DownloadSection";
import EnquirySection from "@/components/features/models/EnquirySection";
import HighlightSection from "@/components/features/models/HighlightSection";
import ModelsHeroSection from "@/components/features/models/ModelsHeroSection";
import PerformanceSection from "@/components/features/models/PerformanceSection";
import PlatformSection from "@/components/features/models/PlatformSection";
import RangeSection from "@/components/features/models/RangeSection";

export default async function page({ params }) {
  const { locale, slug } = await params;

  let productData = {};
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product-detail/${encodeURIComponent(slug)}/${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });
    const result = await response.json();
    if (result.success && result.status === 200) {
      productData = result.data;
      console.log(`[2025-05-29T14:37:00.000Z] Fetched product data for ${locale}`, productData);
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch product data: ${error.message}`);
  }
  return (
    <>
      <ModelsHeroSection data={productData?.banner_section} />
      <HighlightSection />
      <DesignViewSection locale={locale} />
      <RangeSection />
      <PerformanceSection />
      <PlatformSection />
      <BodyFeaturesSection locale={locale} />
      <EnquirySection />
      <DownloadSection />
    </>
  );
}
