import BannerSection from "@/components/common/BannerSection";
import PrivacyPolicy from "@/components/features/privacy-policy/PrivacyPolicy";

export const metadata = {
    title: "YANGWANG | Privacy policy",
    description: "Understand how iChargeOn collects.",
};

export default function page() {
    return (
        <>
            <BannerSection title="Privacy Policy" bannerImg="privacy-banner.jpg" />
            <PrivacyPolicy />
        </>
    );
}
