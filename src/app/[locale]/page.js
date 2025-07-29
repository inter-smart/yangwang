import HeroSection from "@/components/features/home/HeroSection";
import AboutSection from "@/components/features/home/AboutSection";
import ModelSection from "@/components/features/home/ModelSection";
import SpecsSection from "@/components/features/home/SpecsSection";
import LaunchOffersSection from "@/components/features/home/LaunchOffersSection";
import InteriorSection from "@/components/features/home/InteriorSection";
import MarketingSection from "@/components/features/home/MarketingSection";
import EventsSection from "@/components/features/home/EventsSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/${encodeURIComponent(locale)}`, {
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

export default async function Home({ params }) {
  const { locale } = await params;

  let homeData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });
    const result = await response.json();
    if (result.success && result.status === 200) {
      homeData = result.data;
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch home data: ${error.message}`);
  }

  return (
    <>
      <HeroSection data={homeData?.home_banner || []} locale={locale} />
      <AboutSection data={homeData?.about_company || {}} locale={locale} />
      <section className="w-full h-auto block relative overflow-hidden">
        {homeData?.vehicle_spec?.map((item, index) => (
          <ModelSection data={item} index={index} key={item?.slug} locale={locale} />
        ))}
      </section>
      <SpecsSection data={homeData?.platform_section} locale={locale} />
      <LaunchOffersSection data={homeData?.offer || {}} locale={locale} />
      <InteriorSection data={homeData?.feel_the_drive || {}} locale={locale} />
      <MarketingSection data={homeData?.feeds_section || {}} locale={locale} />
      <EventsSection data={homeData?.news_and_events_section || {}} locale={locale} />
    </>
  );
}
