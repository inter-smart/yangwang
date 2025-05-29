import InnerBanner from "@/components/common/InnerBanner";
import OwnershipSection from "@/components/features/ownership/OwnershipSection";
import ServiceSection from "@/components/features/ownership/ServiceSection";
import OwnerContact from "@/components/features/ownership/OwnerContact";

export default function ownership() {
  return (
    <>
      <InnerBanner title="Ownership Redefined" image="owner-banner.jpg" />
      <OwnershipSection />
      <ServiceSection />
      <OwnerContact />
    </>
  );
}
