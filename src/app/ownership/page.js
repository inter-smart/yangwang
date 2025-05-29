import BannerSection from "@/components/common/InnerBanner";
import OwnershipSection from "@/components/features/ownership/OwnershipSection";
import ServiceSection from "@/components/features/ownership/ServiceSection";
import OwnerContactSection from "@/components/features/ownership/OwnerContactSection";

export default function ownership() {
    return (
        <>
            <BannerSection title="Ownership Redefined" bannerImg="owner-banner.jpg" />
            <OwnershipSection />
            <ServiceSection />
            <OwnerContactSection />

        </>
    );
}