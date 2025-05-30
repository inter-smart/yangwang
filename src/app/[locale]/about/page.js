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

export default async function page({ params }) {
  const { locale } = await params;

  let aboutData = {};

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/about/${encodeURIComponent(
        locale
      )}`,
      {
        cache: "force-cache",
        next: { revalidate: 60 },
      }
    );
    const result = await response.json();
    if (result.success && result.status === 200) {
      aboutData = result.data;
      console.log(
        `[2025-05-29T14:37:00.000Z] Fetched About data for ${locale}`,
        aboutData
      );
    } else {
      console.error(
        `[2025-05-29T14:37:00.000Z] API error: ${
          result.message || "Unknown error"
        }`
      );
    }
  } catch (error) {
    console.error(
      `[2025-05-29T14:37:00.000Z] Failed to fetch about data: ${error.message}`
    );
  }
  return (
    <>
      <AboutSection locale={locale} />
      <DealershipSection
        title="About Yangwang"
        description="Yangwang is BYD Auto's premier luxury electric vehicle (EV) brand, launched in January 2023 to compete with high-end automakers like Mercedes-Benz, BMW, and Audi. Positioned above BYD's other sub-brands, Denza and Fangchengbao, Yangwang introduces cutting-edge technologies and innovative designs to the luxury EV market."
        deskImageSrc="/images/about-yangwang.jpg"
        mobileImageSrc="/images/about-yangwang-mobile.jpg"
        imageAlt="About Yangwang"
        showVideo={true}
      />
      <VisionSection locale={locale} />
      <BrandSection />
      <DealershipSection
        title="About Dealership"
        description="Yangwang is a high-end new energy vehicle brand under BYD Group. Relying on BYD Group's innovative automotive technology, top industrial system strength, and forward-looking design, it provides users with high-end vehicle products beyond imagination."
        deskImageSrc="/images/about-dealership.jpg"
        mobileImageSrc="/images/about-dealership-mobile.jpg"
        imageAlt="About Dealership"
        showVideo={false}
      />
      <FutureSection locale={locale} />
      <InovationSection locale={locale} />
    </>
  );
}
