import HeroSection from "@/components/features/home/HeroSection";
import AboutSection from "@/components/features/home/AboutSection";
import ModelSection from "@/components/features/home/ModelSection";
import SpecsSection from "@/components/features/home/SpecsSection";
import LaunchOffersSection from "@/components/features/home/LaunchOffersSection";
import InteriorSection from "@/components/features/home/InteriorSection";
import MarketingSection from "@/components/features/home/MarketingSection";
import EventsSection from "@/components/features/home/EventsSection";

export default async function Home({ params }) {
  const { locale } = await params;
  console.log(`[2025-05-29T14:37:00.000Z] Server locale: ${locale}`);

  let homeData = {
    hero: null,
    about: null,
    models: null,
    specs: null,
    launchOffers: null,
    interior: null,
    marketing: null,
    events: null,
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home?lang=${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });
    const result = await response.json();
    if (result.success && result.status === 200) {
      homeData = result.data;
      console.log(`[2025-05-29T14:37:00.000Z] Fetched home data for ${locale}`, homeData);
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch home data: ${error.message}`);
  }

  return (
    <>
      <HeroSection data={homeData?.home_banner || []} locale={locale} />
      <AboutSection data={homeData.about_company || {}} locale={locale} />
      <ModelSection data={homeData.models} locale={locale} />
      <SpecsSection data={homeData.specs} locale={locale} />
      <LaunchOffersSection data={homeData.offer || {}} locale={locale} />
      <InteriorSection data={homeData.feel_the_drive || {}} locale={locale} />
      <MarketingSection data={homeData.feeds_section || {}} locale={locale} />
      <EventsSection data={homeData.news_and_events_section || {}} locale={locale} />
    </>
  );
}

// import HeroSection from "@/components/features/home/HeroSection";
// import AboutSection from "@/components/features/home/AboutSection";
// import ModelSection from "@/components/features/home/ModelSection";
// import SpecsSection from "@/components/features/home/SpecsSection";
// import LaunchOffersSection from "@/components/features/home/LaunchOffersSection";
// import InteriorSection from "@/components/features/home/InteriorSection";
// import MarketingSection from "@/components/features/home/MarketingSection";
// import EventsSection from "@/components/features/home/EventsSection";

// export default async function Home({ params }) {
//   const { locale } = await params;
//   console.log(`from server lang: ${locale}`);

//   return (
//     <>
//       <HeroSection locale={locale} />
//       <AboutSection />
//       <ModelSection />
//       <SpecsSection />
//       <LaunchOffersSection />
//       <InteriorSection />
//       <MarketingSection />
//       <EventsSection />
//     </>
//   );
// }
