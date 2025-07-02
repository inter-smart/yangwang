import InnerBanner from "@/components/common/InnerBanner";
import EnquirySection from "@/components/features/contact/EnquirySection";
import FaqSection from "@/components/features/contact/FaqSection";
import LocationSection from "@/components/features/contact/LocationSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact/${encodeURIComponent(locale)}`, {
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
  let contactData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact/${encodeURIComponent(locale)}`, {
      cache: "no-store",
      // next: { revalidate: 60 },
    });

    const result = await response.json();
    if (result.success && result.status === 200) {
      contactData = result.data;

      console.log(`[2025-05-29T14:37:00.000Z] Fetched contact  data for ${locale}`, contactData);
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch contact data: ${error.message}`);
  }
  return (
    <>
      <InnerBanner
        title={contactData?.banner_section?.title}
        banner_image={contactData?.banner_section?.web_banner}
        banner_alt={contactData?.banner_section?.web_banner_alt}
        description={contactData?.banner_section?.description}
      />
      <EnquirySection data={contactData?.enquiry_section} />
      <LocationSection
        variant="findshowroom"
        showRooms={contactData?.showroom_section}
        serviceCentres={contactData?.service_centre_section}
      />
      <FaqSection faqData={contactData?.faq_section} socialData={contactData?.social_link_section} />
    </>
  );
}
