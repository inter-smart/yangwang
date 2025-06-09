import SocialLinkSection from "@/components/features/news/SocialLinkSection";
import InnerHeroSection from "@/components/features/offers/InnerHeroSection";
import OfferEnquirySection from "@/components/features/offers/OfferEnquirySection";
import OfferInfoSection from "@/components/features/offers/OfferInfoSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/offers/${encodeURIComponent(locale)}`, {
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

  let offersData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/offers/${encodeURIComponent(locale)}`, {
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
      <InnerHeroSection data={offersData?.banner_section} />
      <OfferInfoSection data={offersData?.main_section} offersInfo={offersData?.offer_section?.offers} />
      {/* <QuestionSection data={offersData?.enquiry_section} /> */}
      <OfferEnquirySection data={offersData?.enquiry_section} offerData={offersData?.Offer_list_enquiry} />
      <SocialLinkSection data={offersData?.social_link_section} />
    </>
  );
}
