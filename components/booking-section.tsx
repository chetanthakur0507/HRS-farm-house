"use client";

import { type FormEvent, useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";

type BookingSectionProps = {
  occasions: string[];
};

type BookingFormData = {
  name: string;
  phone: string;
  occasion: string;
  eventDate: string;
  eventTime: string;
  guestCount: string;
  budget: string;
  decorTheme: string;
  cateringRequired: string;
  contactTime: string;
  message: string;
};

const whatsappNumber = "917065426262";

const initialFormData: BookingFormData = {
  name: "",
  phone: "",
  occasion: "",
  eventDate: "",
  eventTime: "",
  guestCount: "",
  budget: "",
  decorTheme: "",
  cateringRequired: "Yes",
  contactTime: "Anytime",
  message: "",
};

export default function BookingSection({ occasions }: BookingSectionProps) {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lines = [
      "Hello, I want to book HRS Farm House.",
      `Name: ${formData.name || "-"}`,
      `Phone: ${formData.phone || "-"}`,
      `Occasion: ${formData.occasion || "-"}`,
      `Event Date: ${formData.eventDate || "-"}`,
      `Event Time: ${formData.eventTime || "-"}`,
      `Guest Count: ${formData.guestCount || "-"}`,
      `Budget Range: ${formData.budget || "-"}`,
      `Decor Theme: ${formData.decorTheme || "-"}`,
      `Catering Required: ${formData.cateringRequired || "-"}`,
      `Preferred Contact Time: ${formData.contactTime || "-"}`,
      `Message: ${formData.message || "-"}`,
    ];

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="py-24 px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-8 md:p-14 lg:p-16">
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-gold/10 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <span className="section-label mb-3 block">Booking</span>
              <h2 className="section-title">Plan your masterpiece</h2>
              <p className="mt-5 max-w-xl text-brand-cream/70">
                Share your event details and we’ll help you shape the right setup, from decor to timing and guest flow.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "Custom Decor",
                  "Pool + Lawn Setup",
                  "24/7 Booking Support",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-brand-cream/85">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-6">
                {[
                  { icon: Phone, label: "Contact", value: "70654 26262" },
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "7 No Police Chauki, Vill Ilayachipur Main Road Signature City, Near Shani Mandir, Sonia Vihar Pasta Road, Elaichipur, Ghaziabad-201102, Uttar Pradesh",
                  },
                  { icon: Clock, label: "Availability", value: "Open 24/7 for Bookings" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-brand-cream/45">{item.label}</p>
                      <p className="mt-2 text-lg leading-7 text-brand-cream">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleBookingSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                  required
                />
              </div>

              <select
                value={formData.occasion}
                onChange={(event) => setFormData((prev) => ({ ...prev, occasion: event.target.value }))}
                className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors focus:border-brand-gold/70"
                required
              >
                <option className="bg-brand-green" value="">
                  Select Occasion
                </option>
                {occasions.map((occasion) => (
                  <option key={occasion} className="bg-brand-green" value={occasion}>
                    {occasion}
                  </option>
                ))}
              </select>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(event) => setFormData((prev) => ({ ...prev, eventDate: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors focus:border-brand-gold/70"
                  required
                />
                <input
                  type="time"
                  value={formData.eventTime}
                  onChange={(event) => setFormData((prev) => ({ ...prev, eventTime: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors focus:border-brand-gold/70"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="number"
                  min={1}
                  placeholder="Approx. Guest Count"
                  value={formData.guestCount}
                  onChange={(event) => setFormData((prev) => ({ ...prev, guestCount: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                />
                <select
                  value={formData.budget}
                  onChange={(event) => setFormData((prev) => ({ ...prev, budget: event.target.value }))}
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors focus:border-brand-gold/70"
                >
                  <option className="bg-brand-green" value="">Select Budget Range</option>
                  <option className="bg-brand-green" value="Below 2 Lakh">Below 2 Lakh</option>
                  <option className="bg-brand-green" value="2 - 5 Lakh">2 - 5 Lakh</option>
                  <option className="bg-brand-green" value="5 - 10 Lakh">5 - 10 Lakh</option>
                  <option className="bg-brand-green" value="10+ Lakh">10+ Lakh</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Decor Theme (Royal, Floral, Minimal...)"
                  value={formData.decorTheme}
                  onChange={(event) => setFormData((prev) => ({ ...prev, decorTheme: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                />
                <select
                  value={formData.cateringRequired}
                  onChange={(event) => setFormData((prev) => ({ ...prev, cateringRequired: event.target.value }))}
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors focus:border-brand-gold/70"
                >
                  <option className="bg-brand-green" value="Yes">Catering Required: Yes</option>
                  <option className="bg-brand-green" value="No">Catering Required: No</option>
                  <option className="bg-brand-green" value="Need Consultation">Need Consultation</option>
                </select>
              </div>

              <select
                value={formData.contactTime}
                onChange={(event) => setFormData((prev) => ({ ...prev, contactTime: event.target.value }))}
                className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors focus:border-brand-gold/70"
              >
                <option className="bg-brand-green" value="Anytime">Preferred Contact Time: Anytime</option>
                <option className="bg-brand-green" value="Morning">Preferred Contact Time: Morning</option>
                <option className="bg-brand-green" value="Afternoon">Preferred Contact Time: Afternoon</option>
                <option className="bg-brand-green" value="Evening">Preferred Contact Time: Evening</option>
              </select>

              <textarea
                placeholder="Special Requirements"
                rows={4}
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-brand-cream outline-none transition-colors placeholder:text-brand-cream/35 focus:border-brand-gold/70"
              />

              <button type="submit" className="gold-button w-full py-4 text-lg">
                Send Enquiry on WhatsApp
              </button>
              <p className="text-sm text-brand-cream/60">
                Form details will open directly in WhatsApp chat so your booking request reaches us instantly.
              </p>
            </form>
          </div>

          <div className="relative z-10 mt-10 border-t border-white/10 pt-8">
            <p className="section-label mb-3 block">Find Us</p>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d570.3016960871427!2d77.76180394740166!3d29.01817211182146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c7b40996da047%3A0x205965739fc1f86!2sHRS%20Farms%20%2F%20pool!5e1!3m2!1sen!2sin!4v1775709505484!5m2!1sen!2sin"
                className="h-[320px] w-full md:h-[420px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HRS Farm House Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}