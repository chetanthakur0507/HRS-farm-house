import ContactSection from "@/components/contact-section";
import PageHero from "@/components/page-hero";
import SiteShell from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <PageHero
          eyebrow="Contact"
          title="GM Royal Palace"
          description="Banquet hall in Ghaziabad, Uttar Pradesh. Call, chat on WhatsApp, explore timings, and send a quick inquiry directly to our team."
        />
        <ContactSection />
      </main>
    </SiteShell>
  );
}