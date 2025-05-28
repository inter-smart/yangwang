import EnquirySection from "@/components/features/contact/EnquirySection";
import FaqSection from "@/components/features/contact/FaqSection";
import LocationSection from "@/components/features/contact/LocationSection";
import BannerSection from "@/components/common/BannerSection";
import GlobalSection from "@/components/features/service/GlobalSection";
import WarrantySection from "@/components/features/service/WarrantySection";
import FollowusSection from "@/components/features/service/FollowusSection";
import QuestionSection from "@/components/features/service/QuestionSection";

export default function Contact() {
    return (
        <>
            <BannerSection title="After-Sales Service & Support" bannerImg="service-banner.jpg" />
            <GlobalSection  />
            <WarrantySection />
            <QuestionSection />
            <FollowusSection />
        </>
    );
}
