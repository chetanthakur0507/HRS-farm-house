import SiteShell from "./site-shell";
import HeroSection from "./hero-section";
import OnDemandServicesSection from "./on-demand-services-section";
import EventTypesSection from "./event-types-section";
import VisualWalkthroughSection from "./visual-walkthrough-section";
import OccasionsSection from "./occasions-section";
import FeaturesSection from "./features-section";
import BanquetExperienceSections from "./banquet-experience-sections";
import GallerySection from "./gallery-section";
import BookingSection from "./booking-section";
import { galleryImages, occasions } from "./site-data";

export default function LandingPage() {
  return (
    <SiteShell>
      <main>
        <HeroSection />
        <OnDemandServicesSection />
        <EventTypesSection />
        <VisualWalkthroughSection />
        <OccasionsSection occasions={occasions} />
        <FeaturesSection />
        <BanquetExperienceSections />
        <GallerySection images={galleryImages} />
        <BookingSection occasions={occasions} />
      </main>
    </SiteShell>
  );
}