import BannerSection from "@/components/common/BannerSection";
import LegalStatement from "@/components/features/legal-statement/LegalStatement";

export const metadata = {
    title: "YANGWANG | Legal Statement ",
    description: "Understand how iChargeOn collects.",
};

export default function page() {
    return (
        <>
            <BannerSection title="Legal Statement of  Yangwang" bannerImg="privacy-banner.jpg" />
            <LegalStatement />
        </>
    );
}
