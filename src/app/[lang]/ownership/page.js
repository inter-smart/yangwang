
import OwnershipSection from "@/components/features/ownership/OwnershipSection";
import ServiceSection from "@/components/features/ownership/ServiceSection";
import OwnerContactSection from "@/components/features/ownership/OwnerContactSection";
import InnerBanner from "@/components/common/InnerBanner";

export default function page() {
    return (
        <>
            <InnerBanner title="Ownership Redefined" image="owner-banner.jpg" />
            <OwnershipSection />
            <ServiceSection />
            <OwnerContactSection />
        </>
    );
}
