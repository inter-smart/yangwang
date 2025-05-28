import EnquirySection from "@/components/features/contact/EnquirySection"; 
import FaqSection from "@/components/features/contact/FaqSection"; 
import LocationSection from "@/components/features/contact/LocationSection"; 
import BannerSection from "@/components/common/BannerSection";

export default function Contact() {
  return (
    <>
      <BannerSection title="Contact" bannerImg="contact.jpg" />
      <EnquirySection /> 
      <LocationSection /> 
      <FaqSection /> 
    </>
  );
}
