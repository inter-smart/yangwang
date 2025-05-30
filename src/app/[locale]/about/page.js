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
      <YangwangSection data={aboutData?.aboutSection ?? {}} locale={locale} />
      <LookupSection data={aboutData?.lookUpSection ?? {}} locale={locale} />
      <BrandSection data={aboutData?.brandLogoSection ?? {}} locale={locale} />
      <YangwangSection data={aboutData?.dealershipSection} locale={locale} />
      <FutureSection data={aboutData?.futureSection ?? {}} locale={locale} />
      <InnovationSection data={aboutData?.innovationSection ?? {}} locale={locale} />
    </>
  );
}

// import AboutSection from "@/components/features/about/AboutSection";
// import YangwangSection from "@/components/features/about/YangwangSection";
// import InovationSection from "@/components/features/about/InnovationSection";
// import LookupSection from "@/components/features/about/LookupSection";
// import BrandSection from "@/components/features/about/BrandSection";
// import FutureSection from "@/components/features/about/FutureSection";

// const dealership = [
//   {
//     title: "About Dealership",
//     description:
//       "Yangwang is a high-end new energy vehicle brand under BYD Group. Relying on BYD Group's innovative automotive technology, top industrial system strength, and forward-looking design, it provides users with high-end vehicle products beyond imagination.",
//     imageSrc: "about-dealership.jpg",
//     imageAlt: "About Dealership",
//   },
// ];

// export const metadata = {
//   title: "yangwang | About",
//   description: "Demo Text.",
// };

// export default async function AboutPage({params}) {
//   const { locale } = await params;

//   let aboutData = {};

//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about/${encodeURIComponent(locale)}`, {
//       cache: "force-cache",
//       next: { revalidate: 60 },
//     });
//     const result = await response.json();
//     if (result.success && result.status === 200) {
//       aboutData = result.data;
//       console.log(`[2025-05-29T14:37:00.000Z] Fetched About data for ${locale}`, aboutData);
//     } else {
//       console.error(`[2025-05-29T14:37:00.000Z] API error: ${result.message || "Unknown error"}`);
//     }
//   } catch (error) {
//     console.error(`[2025-05-29T14:37:00.000Z] Failed to fetch about data: ${error.message}`);
//   }
//   return (
//     <>
//       <AboutSection data={aboutData?.banner} />
//       <YangwangSection  data={aboutData?.about_section}/>
//       <LookupSection data={aboutData?.look_up_section} />
//       <BrandSection  data={ aboutData?.brand_logo_section} />
//       {dealership.map((section, index) => (
//         <YangwangSection
//           key={index}
//           title={section.title}
//           description={section.description}
//           imageSrc={section.imageSrc}
//           imageAlt={section.imageAlt}
//         />
//       ))}
//       <FutureSection data={aboutData?.future_section} />
//       <InovationSection data={aboutData?.innovation_section}/>
//     </>
//   );
// }
