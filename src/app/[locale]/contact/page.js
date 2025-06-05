import InnerBanner from "@/components/common/InnerBanner";
import EnquirySection from "@/components/features/contact/EnquirySection";
import FaqSection from "@/components/features/contact/FaqSection";
import LocationSection from "@/components/features/contact/LocationSection";

export default async function Contact({ params }) {
  const { locale } = await params;

  let contactData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact?lang=${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
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
