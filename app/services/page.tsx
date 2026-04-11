import FeaturesSection from "@/components/features-section";
import OccasionsSection from "@/components/occasions-section";
import PageHero from "@/components/page-hero";
import SiteShell from "@/components/site-shell";
import OnDemandServicesSection from "@/components/on-demand-services-section";
import { occasions } from "@/components/site-data";

export default function ServicesPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Services"
          title="Premium Services & Add-ons"
          description="Comprehensive on-demand services to elevate every moment of your celebration. From creative concepts to technical support, we have you covered."
        />
        <OnDemandServicesSection />
        <OccasionsSection occasions={occasions} />
        <FeaturesSection />
      </main>
    </SiteShell>
  );
}