import BodyFeaturesSection from "@/components/features/models/BodyFeaturesSection";
import DesignViewSection from "@/components/features/models/DesignViewSection";
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
      {/* <HighlightSection /> */}
      <DesignViewSection />
      <RangeSection />
      <PerformanceSection />
      <PlatformSection />
      <BodyFeaturesSection locale={locale} />
      <EnquirySection />
      <DownloadSection />
    </>
  );
}
