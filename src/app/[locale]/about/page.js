import AboutSection from "@/components/features/about/AboutSection";
import YangwangSection from "@/components/features/about/YangwangSection";
import InovationSection from "@/components/features/about/InnovationSection";
import LookupSection from "@/components/features/about/LookupSection";
import BrandSection from "@/components/features/about/BrandSection";
import FutureSection from "@/components/features/about/FutureSection";

const dealership = [
  {
    title: "About Dealership",
    description:
      "Yangwang is a high-end new energy vehicle brand under BYD Group. Relying on BYD Group's innovative automotive technology, top industrial system strength, and forward-looking design, it provides users with high-end vehicle products beyond imagination.",
    imageSrc: "about-dealership.jpg",
    imageAlt: "About Dealership",
  },
];

export const metadata = {
  title: "yangwang | About",
  description: "Demo Text.",
};

export default async function AboutPage({params}) {
  const { locale } = await params;

  let aboutData = {};

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about/${encodeURIComponent(locale)}`, {
      cache: "force-cache",
      next: { revalidate: 60 },
    });
    const result = await response.json();
    if (result.success && result.status === 200) {
      aboutData = result.data;
      console.log(`[2025-05-29T14:37:00.000Z] Fetched About data for ${locale}`, aboutData);
    } else {
      console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch about data: ${error.message}`);
  }
  return (
    <>
      <AboutSection data={aboutData?.banner} />
      <YangwangSection />
      <LookupSection />
      <BrandSection />
      {dealership.map((section, index) => (
        <YangwangSection
          key={index}
          title={section.title}
          description={section.description}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
        />
      ))}
      <FutureSection />
      <InovationSection />
    </>
  );
}
