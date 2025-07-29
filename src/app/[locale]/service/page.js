import InnerBanner from "@/components/common/InnerBanner";
import LocationSection from "@/components/features/contact/LocationSection";
import GlobalSection from "@/components/features/service/GlobalSection";
import WarrantySection from "@/components/features/service/WarrantySection";
import FollowusSection from "@/components/features/service/FollowusSection";
import QuestionSection from "@/components/features/service/QuestionSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/service/${encodeURIComponent(locale)}`, {
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

export default async function Contact({ params }) {
  const { locale } = await params;

  let serviceData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/service/${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });

    const result = await response.json();
    if (result.success && result.status === 200) {
      serviceData = result.data;
      //console.log(`[2025-05-29T14:37:00.000Z] Fetched service  data for ${locale}`, serviceData);
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch service data: ${error.message}`);
  }
  return (
    <>
      <InnerBanner
        title={serviceData?.banner_section?.title}
        banner_image={serviceData?.banner_section?.web_banner}
        banner_alt={serviceData?.banner_section?.web_banner_alt || "Banner Image"}
      />
      <GlobalSection data={serviceData?.first_section} />
      <WarrantySection data={serviceData?.service_section} featuresData={serviceData?.features} />
      <QuestionSection
        data={serviceData?.enquiry_section}
        offerData={serviceData?.offer_types}
        locationData={serviceData?.location}
      />
      <LocationSection
        variant="service"
        serviceCentres={serviceData?.service_centre_section?.service_centres}
        showRooms={serviceData?.showroom_section?.showroom}
        customerSupportData={serviceData?.customer_support}
      />
      <FollowusSection data={serviceData?.social_media_section} />
    </>
  );
}
