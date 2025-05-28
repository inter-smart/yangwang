import InnerBanner from "@/components/common/InnerBanner";
import OwnershipSection from "@/components/features/Ownership/OwnershipSection";
import ServiceSection from "@/components/features/Ownership/ServiceSection";
import PartsSection from "@/components/features/Ownership/PartsSection";
import WithyouSection from "@/components/features/Ownership/WithyouSection";

export default function ownership() {
  return (
    <>
      <InnerBanner title="Ownership Redefined" image="owner-banner.jpg" />
      <OwnershipSection />
      <ServiceSection />
      <PartsSection />
      <WithyouSection />
    </>
  );
}
