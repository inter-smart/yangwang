import AboutSection from "@/components/features/about/AboutSection";
import DealershipSection from "@/components/features/about/DealershipSection";
import InovationSection from "@/components/features/about/InnovationSection";
import BrandSection from "@/components/features/about/BrandSection";
import FutureSection from "@/components/features/about/FutureSection";
import VisionSection from "@/components/features/about/VisionSection";

export const metadata = {
  title: "yangwang | About",
  description: "Demo Text.",
};

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const timestamp = "2025-05-30T09:47:00.000Z"; // 3:17 PM IST

  let aboutData = {};

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/about?lang=${encodeURIComponent(locale)}`;
    const response = await fetch(apiUrl, {
      cache: "force-cache",
      next: { revalidate: 3600 }, // 1-hour revalidation
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    if (result.success && result.status === 200 && result.data) {
      aboutData = {
        banner: result.data.banner,
        aboutSection: result.data.about_section,
        lookUpSection: result.data.look_up_section,
        brandLogoSection: result.data.brand_logo_section,
        dealershipSection: result.data.dealership_section,
        futureSection: result.data.future_section,
        innovationSection: result.data.innovation_section,
      };
      console.log(`[${timestamp}] Fetched about data for ${locale}`, aboutData);
    } else {
      console.error(`[${timestamp}] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[${timestamp}] Failed to fetch about data: ${error instanceof Error ? error.message : "Unknown error"}`);
  }

  return (
    <>
      <AboutSection data={aboutData?.banner ?? []} locale={locale} />
      <DealershipSection data={aboutData?.aboutSection ?? {}} locale={locale} showVideo={true} />
      <VisionSection data={aboutData?.lookUpSection ?? {}} locale={locale} />
      <DealershipSection data={aboutData?.dealershipSection ?? {}} locale={locale} showVideo={false} />
      <BrandSection data={aboutData?.brandLogoSection ?? {}} locale={locale} />
      <FutureSection data={aboutData?.futureSection ?? {}} locale={locale} />
      <InovationSection data={aboutData?.innovationSection ?? {}} locale={locale} />
    </>
  );
}
