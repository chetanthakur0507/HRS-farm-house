import BookingPageForm from "@/components/booking-page-form";
import SiteShell from "@/components/site-shell";

export default function BookingPage() {
  return (
    <SiteShell>
      <main>
        <BookingPageForm />
      </main>
    </SiteShell>
  );
}