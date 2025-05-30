import SocialLinkSection from "@/components/features/news/SocialLinkSection";
import InnerHeroSection from "@/components/features/offers/InnerHeroSection";
import OfferInfoSection from "@/components/features/offers/OfferInfoSection";
import QuestionSection from "@/components/features/service/QuestionSection";

export default function page() {
  return (
    <>
      <InnerHeroSection />
      <OfferInfoSection />
      <QuestionSection />
      <SocialLinkSection />
    </>
  );
}
