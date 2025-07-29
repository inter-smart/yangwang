import BodyFeaturesSection from "@/components/features/models/BodyFeaturesSection";
import DesignViewSection from "@/components/features/models/DesignViewSection";
import DownloadSection from "@/components/features/models/DownloadSection";
import EnquirySection from "@/components/features/models/EnquirySection";
import HighlightSection from "@/components/features/models/HighlightSection";
import ModelsHeroSection from "@/components/features/models/ModelsHeroSection";
import PerformanceSection from "@/components/features/models/PerformanceSection";
import PlatformSection from "@/components/features/models/PlatformSection";
import RangeSection from "@/components/features/models/RangeSection";

export async function generateMetadata({ params }) {
  const { locale, slug } = params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/prdouct-detail/${slug}/${encodeURIComponent(locale)}`, {
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

export default async function page({ params, searchParams }) {
  const { locale, slug } = await params;

  const urlParams = await searchParams;
  const variant = urlParams?.variant || null;
  const color = urlParams?.color || null;

  let productData = {};
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/product-detail/${encodeURIComponent(slug)}/${encodeURIComponent(locale)}`,
      {
        cache: "no-store",
        // next: { revalidate: 60 },
      }
    );
    const result = await response.json();
    if (result.success && result.status === 200) {
      productData = result.data;
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch product data: ${error.message}`);
  }

  return (
    <>
      <ModelsHeroSection data={productData?.banner_section} model={slug} />
      <HighlightSection interiorData={productData?.interior_highlights} exteriorHighlights={productData?.exterior_highlights} />
      <DesignViewSection
        locale={locale}
        exteriorData={productData?.exterior}
        interiorData={productData?.interior}
        model={slug}
        alloyWheelData={productData?.alloy_wheel}
        variant={variant}
        color={color}
      />
      <RangeSection data={productData?.distance_section} />
      <PerformanceSection performanceData={productData?.performance_section?.performance} />
      <PlatformSection data={productData?.platform_section} />
      <BodyFeaturesSection locale={locale} data={productData?.body_feature_section} />
      <EnquirySection data={productData?.enquiry_section} modelsData={productData?.models} locationData={productData?.location} />
      <DownloadSection data={productData?.footer_section} />
    </>
  );
}
