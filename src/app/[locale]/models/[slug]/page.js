import HighlightSection from "@/components/features/models/HighlightSection";
import ModelsHeroSection from "@/components/features/models/ModelsHeroSection";
import RangeSection from "@/components/features/models/RangeSection";

export default function page() {
  return (
    <>
      <ModelsHeroSection />
      <HighlightSection />
      <RangeSection />
    </>
  );
}
