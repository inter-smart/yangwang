import EnquirySection from "@/components/features/contact/EnquirySection";
import FaqSection from "@/components/features/contact/FaqSection";
import LocationSection from "@/components/features/contact/LocationSection";
import InnerBanner from "@/components/common/InnerBanner";
import GlobalSection from "@/components/features/service/GlobalSection";
import WarrantySection from "@/components/features/service/WarrantySection";
import FollowusSection from "@/components/features/service/FollowusSection";
import QuestionSection from "@/components/features/service/QuestionSection";

export default function Contact() {
    return (
        <>
            <InnerBanner title="After-Sales Service & Support" image="service-banner.jpg" />
            <GlobalSection  />
            <WarrantySection />
            <QuestionSection />
            <FollowusSection />
        </>
    );
}
