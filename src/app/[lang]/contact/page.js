import InnerBanner from "@/components/common/InnerBanner";
import EnquirySection from "@/components/features/contact/EnquirySection"; 
import FaqSection from "@/components/features/contact/FaqSection"; 
import LocationSection from "@/components/features/contact/LocationSection"; 
 

export default function Contact() {
  return (
    <>
      <InnerBanner title="Contact" image="contact.jpg" />
      <EnquirySection /> 
      <LocationSection variant="findshowroom"/> 
      <FaqSection />
    </>
  );
}
