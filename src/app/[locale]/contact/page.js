import InnerBanner from "@/components/common/InnerBanner";
import EnquirySection from "@/components/features/contact/EnquirySection"; 
import FaqSection from "@/components/features/contact/FaqSection"; 
import LocationSection from "@/components/features/contact/LocationSection"; 
 

export default async function Contact({params}) {
    const { locale } = await params;

  let offersData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/offers?lang=${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });

    const result = await response.json();
    if (result.success && result.status === 200) {
      offersData = result.data;
      console.log(`[2025-05-29T14:37:00.000Z] Fetched offers  data for ${locale}`, offersData);
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch offers data: ${error.message}`);
  }
  return (
    <>
      <InnerBanner title="Contact" image="contact.jpg" />
      <EnquirySection /> 
      <LocationSection variant="findshowroom"/> 
      <FaqSection />
    </>
  );
}
