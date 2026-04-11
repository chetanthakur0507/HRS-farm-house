import GallerySection from "@/components/gallery-section";
import PageHero from "@/components/page-hero";
import SiteShell from "@/components/site-shell";
import { galleryImages } from "@/components/site-data";

export default function GalleryPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Gallery"
          title="Explore our event spaces"
          description="Take a visual tour of the lounge, lawns, pool zone, and curated decor setups for all occasions."
        />
        <GallerySection images={galleryImages} />
      </main>
    </SiteShell>
  );
}