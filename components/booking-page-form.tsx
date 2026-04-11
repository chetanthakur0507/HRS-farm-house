"use client";

import { type FormEvent, useState } from "react";

type BookingPageFormState = {
  name: string;
  phone: string;
  eventType: string;
  guests: string;
  preferredDate: string;
  budget: string;
  contactTime: string;
  message: string;
};

const ownerWhatsappNumber = "917838385507";

const initialState: BookingPageFormState = {
  name: "",
  phone: "",
  eventType: "Wedding",
  guests: "",
  preferredDate: "",
  budget: "",
  contactTime: "Anytime",
  message: "",
};

export default function BookingPageForm() {
  const [form, setForm] = useState<BookingPageFormState>(initialState);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const textLines = [
      "Hello, I want to submit a booking request.",
      `Full Name: ${form.name || "-"}`,
      `Phone Number: ${form.phone || "-"}`,
      `Event Type: ${form.eventType || "-"}`,
      `Expected Guests: ${form.guests || "-"}`,
      `Preferred Date: ${form.preferredDate || "-"}`,
      `Budget Range: ${form.budget || "-"}`,
      `Preferred Contact Time: ${form.contactTime || "-"}`,
      `Special Requirements: ${form.message || "-"}`,
    ];

    const whatsappUrl = `https://wa.me/${ownerWhatsappNumber}?text=${encodeURIComponent(textLines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="px-6 pb-24 pt-32 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-3xl">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12">
          <span className="section-label mb-3 block">Booking</span>
          <h1 className="text-4xl leading-tight md:text-5xl">Reserve Your Date In Minutes</h1>
          <p className="mt-4 max-w-2xl text-brand-cream/75">
            Share your event details and our planner team will call you with venue walkthrough and package recommendations.
          </p>

          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-brand-cream/90">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-brand-cream/90">Phone Number</label>
              <input
                type="tel"
                placeholder="+91"
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-brand-cream/90">Event Type</label>
              <select
                value={form.eventType}
                onChange={(event) => setForm((prev) => ({ ...prev, eventType: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none focus:border-brand-gold/70"
              >
                <option className="bg-brand-green" value="Wedding">Wedding</option>
                <option className="bg-brand-green" value="Engagement">Engagement</option>
                <option className="bg-brand-green" value="Birthday">Birthday</option>
                <option className="bg-brand-green" value="Corporate Event">Corporate Event</option>
                <option className="bg-brand-green" value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-brand-cream/90">Expected Guests</label>
              <input
                type="number"
                min={1}
                placeholder="e.g. 250"
                value={form.guests}
                onChange={(event) => setForm((prev) => ({ ...prev, guests: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none placeholder:text-brand-cream/35 focus:border-brand-gold/70"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-brand-cream/90">Preferred Date</label>
              <input
                type="date"
                value={form.preferredDate}
                onChange={(event) => setForm((prev) => ({ ...prev, preferredDate: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none focus:border-brand-gold/70"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-brand-cream/90">Budget Range</label>
              <select
                value={form.budget}
                onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none focus:border-brand-gold/70"
              >
                <option className="bg-brand-green" value="">Select budget</option>
                <option className="bg-brand-green" value="Below 2 Lakh">Below 2 Lakh</option>
                <option className="bg-brand-green" value="2 - 5 Lakh">2 - 5 Lakh</option>
                <option className="bg-brand-green" value="5 - 10 Lakh">5 - 10 Lakh</option>
                <option className="bg-brand-green" value="10+ Lakh">10+ Lakh</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-brand-cream/90">Preferred Contact Time</label>
              <select
                value={form.contactTime}
                onChange={(event) => setForm((prev) => ({ ...prev, contactTime: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none focus:border-brand-gold/70"
              >
                <option className="bg-brand-green" value="Anytime">Anytime</option>
                <option className="bg-brand-green" value="Morning">Morning</option>
                <option className="bg-brand-green" value="Afternoon">Afternoon</option>
                <option className="bg-brand-green" value="Evening">Evening</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-brand-cream/90">Special Requirements</label>
              <textarea
                rows={4}
                placeholder="Theme, menu preference, decor vision, etc."
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none placeholder:text-brand-cream/35 focus:border-brand-gold/70"
              />
            </div>

            <button type="submit" className="gold-button w-full justify-center py-4 text-base md:text-lg">
              Submit Booking Request
            </button>
            <p className="text-sm text-brand-cream/60">On submit, WhatsApp chat opens with prefilled details for owner.</p>
          </form>
        </div>
      </div>
    </section>
  );
}