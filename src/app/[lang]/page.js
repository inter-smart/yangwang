'use client'
import HeroSection from "@/components/features/home/HeroSection";
import AboutSection from "@/components/features/home/AboutSection";
import ModelSection from "@/components/features/home/ModelSection";
import SpecsSection from "@/components/features/home/SpecsSection";
import LaunchOffersSection from "@/components/features/home/LaunchOffersSection";
import InteriorSection from "@/components/features/home/InteriorSection";
import MarketingSection from "@/components/features/home/MarketingSection";
import EventsSection from "@/components/features/home/EventsSection";
import { useParams } from "next/navigation";

export default function Home() {
  const {lang} = useParams();

  console.log("lang", lang);
  
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ModelSection />
      <SpecsSection />
      <LaunchOffersSection />
      <InteriorSection />
      <MarketingSection />
      <EventsSection />
    </>
  );
}
