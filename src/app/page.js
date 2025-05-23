import AboutSection from "@/components/features/home/AboutSection";
import HeroSection from "@/components/features/home/HeroSection";
import LaunchOffersSection from "@/components/features/home/LaunchOffersSection";
import ModelSection from "@/components/features/home/ModelSection";
import SpecsSection from "@/components/features/home/SpecsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ModelSection />
      <SpecsSection />
      <LaunchOffersSection />
    </>
  );
}
