import InnerBanner from "@/components/common/InnerBanner";
import OwnerContactSection from "@/components/features/temp/OwnerContactSection";
import OwnershipSection from "@/components/features/temp/OwnershipSection";
import ServiceSection from "@/components/features/temp/ServiceSection";


export default async function page({ params }) {
  const { locale } = params;

  let ownerShipData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ownership?lang=${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });

    const result = await response.json();
    if (result.success && result.status === 200) {
      ownerShipData = result.data;
      console.log(`[2025-05-29T14:37:00.000Z] Fetched ownership  data for ${locale}`, ownerShipData);
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch ownership data: ${error.message}`);
  }
  return (
    <>
      <InnerBanner data={ownerShipData?.banner_section}  />
      <OwnershipSection data={ownerShipData?.section_two} />
      <ServiceSection data={ownerShipData?.section_three} />
      <OwnerContactSection data={ownerShipData?.section_four} />
    </>
  );
}
