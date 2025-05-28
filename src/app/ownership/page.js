import BannerSection from "@/components/common/BannerSection";
import OwnershipSection from "@/components/features/ownership/OwnershipSection";
import ServiceSection from "@/components/features/ownership/ServiceSection";
import OwnerContact from "@/components/features/ownership/OwnerContact";

export default function ownership() {
    return (
        <>
            <BannerSection title="Ownership Redefined" bannerImg="owner-banner.jpg" />
            <OwnershipSection />
            <ServiceSection />
            <OwnerContact />

        </>
    );
}