import BannerSection from "@/components/common/BannerSection";
import OwnershipSection from "@/components/features/Ownership/OwnershipSection";
import ServiceSection from "@/components/features/Ownership/ServiceSection";
import PartsSection from "@/components/features/Ownership/PartsSection";
import WithyouSection from "@/components/features/Ownership/WithyouSection";

export default function ownership() {
    return (
        <>
            <BannerSection title="Ownership Redefined" bannerImg="owner-banner.jpg" />
            <OwnershipSection />
            <ServiceSection />
            <PartsSection />
            <WithyouSection />

        </>
    );
}