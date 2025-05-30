
import InnerBanner from "@/components/common/InnerBanner";
import PrivacyPolicy from "@/components/features/privacy-policy/PrivacyPolicy";

export const metadata = {
    title: "YANGWANG | Privacy policy",
    description: "Understand how iChargeOn collects.",
};

export default function page() {
    return (
        <>
            <InnerBanner title="Privacy Policy" image="privacy-banner.jpg" />
            <PrivacyPolicy />
        </>
    );
}
