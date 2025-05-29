import InnerBanner from "@/components/common/InnerBanner";
import LegalStatement from "@/components/features/legal-statement/LegalStatement";

export const metadata = {
    title: "YANGWANG | Legal Statement ",
    description: "Understand how iChargeOn collects.",
};

export default function page() {
    return (
        <>
            <InnerBanner title="Legal Statement of  Yangwang" image="privacy-banner.jpg" />
            <LegalStatement />
        </>
    );
}
