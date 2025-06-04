import BodyFeaturesSection from "@/components/features/models/BodyFeaturesSection";
import DownloadSection from "@/components/features/models/DownloadSection";
import EnquirySection from "@/components/features/models/EnquirySection";
import HighlightSection from "@/components/features/models/HighlightSection";
import ModelsHeroSection from "@/components/features/models/ModelsHeroSection";
import PerformanceSection from "@/components/features/models/PerformanceSection";
import PlatformSection from "@/components/features/models/PlatformSection";
import RangeSection from "@/components/features/models/RangeSection";

export default async function page({ params }) {
  const { locale } = await params;
  return (
    <>
      <ModelsHeroSection />
      <HighlightSection />
      <RangeSection />
      <PerformanceSection />
      <PlatformSection />
      <BodyFeaturesSection locale={locale} />
      <EnquirySection />
      <DownloadSection />
    </>
  );
}
