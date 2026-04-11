"use client";

import { type FormEvent, useState } from "react";
import { CalendarClock, Clock3, MapPin, MessageCircle, Phone, Star, Users } from "lucide-react";

const whatsappNumber = "917065426262";
const directionsLink =
  "https://www.google.com/maps/search/?api=1&query=7+No+Police+Chauki,+Vill+Ilayachipur+Main+Road+Signature+City,+Near+Shani+Mandir,+Sonia+Vihar+Pasta+Road,+Elaichipur,+Ghaziabad-201102,+Uttar+Pradesh";

type InquiryForm = {
  name: string;
  phone: string;
  eventDate: string;
  guestCount: string;
  eventType: string;
  budget: string;
  contactTime: string;
  message: string;
};

const defaultForm: InquiryForm = {
  name: "",
  phone: "",
  eventDate: "",
  guestCount: "",
  eventType: "Wedding",
  budget: "",
  contactTime: "Anytime",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<InquiryForm>(defaultForm);

  const sendToWhatsapp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lines = [
      "Hello GM Royal Palace, I want to make an inquiry:",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Event Date: ${form.eventDate || "-"}`,
      `Guest Count: ${form.guestCount || "-"}`,
      `Event Type: ${form.eventType || "-"}`,
      `Budget Range: ${form.budget || "-"}`,
      `Preferred Contact Time: ${form.contactTime || "-"}`,
      `Message: ${form.message || "-"}`,
    ];

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="px-6 pb-24 pt-8 md:pb-28">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { label: "Venue", value: "GM Royal Palace" },
            { label: "Category", value: "Banquet hall in Ghaziabad, Uttar Pradesh" },
            { label: "Reviews", value: "4.8 Google reviews" },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-3xl p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-brand-cream/45">{item.label}</p>
              <p className="mt-3 text-xl text-brand-cream">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-[2.5rem] p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="section-label mb-3 block">Contact Details</span>
              <h2 className="section-title">Call now, WhatsApp chat, or plan your site visit</h2>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "7 No Police Chauki, Vill Ilayachipur Main Road Signature City, Near Shani Mandir, Sonia Vihar Pasta Road, Elaichipur, Ghaziabad-201102, Uttar Pradesh",
                  },
                  { icon: Clock3, label: "Hours", value: "Open 24 hours" },
                  { icon: Phone, label: "Main Contact", value: "+91-7065426262" },
                 
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

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:+917065426262"
                  className="gold-button justify-center"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-brand-cream transition hover:bg-white/10"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Chat
                </a>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6">
                <p className="section-label mb-3 block">Venue Timings</p>
                <ul className="space-y-3 text-brand-cream/80">
                  <li className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-brand-gold" />Open 24 hours</li>
                  <li className="flex items-center gap-3"><Users className="h-4 w-4 text-brand-gold" />Booking Desk: 9:00 AM - 8:00 PM</li>
                  <li className="flex items-center gap-3"><CalendarClock className="h-4 w-4 text-brand-gold" />Tour Slots: 11:00 AM, 2:00 PM, 5:00 PM</li>
                  <li className="flex items-center gap-3"><Star className="h-4 w-4 text-brand-gold" />Emergency Support: 24/7 (Event Days)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/20">
                <iframe
                    src="https://maps.google.com/maps?q=7+No+Police+Chauki,+Vill+Ilayachipur+Main+Road+Signature+City,+Near+Shani+Mandir,+Sonia+Vihar+Pasta+Road,+Elaichipur,+Ghaziabad-201102,+Uttar+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="h-[320px] w-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GM Royal Palace Location"
                />
              </div>

              <a
                href={directionsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-brand-cream transition hover:bg-white/10"
              >
                Open Directions
              </a>

              <div className="rounded-3xl border border-brand-gold/30 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.2),rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.02)_100%)] p-6 md:p-7">
                <p className="section-label mb-2 block">Quick Inquiry</p>
                <h3 className="text-2xl">Send Your Details Instantly</h3>
                <p className="mt-2 text-sm text-brand-cream/75">Inquiry opens directly on WhatsApp with your details.</p>

                <a href="/booking" className="mt-4 inline-flex text-sm font-semibold text-brand-gold hover:text-brand-gold-soft">
                  Go To Booking
                </a>

                <form className="mt-5 space-y-3" onSubmit={sendToWhatsapp}>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="+91"
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                    required
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="date"
                      value={form.eventDate}
                      onChange={(event) => setForm((prev) => ({ ...prev, eventDate: event.target.value }))}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none focus:border-brand-gold/70"
                    />
                    <input
                      type="number"
                      min={1}
                      placeholder="Approx. guests"
                      value={form.guestCount}
                      onChange={(event) => setForm((prev) => ({ ...prev, guestCount: event.target.value }))}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
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
                  <textarea
                    rows={4}
                    placeholder="Event date, guest count, decor preference, etc."
                    value={form.message}
                    onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-brand-cream outline-none placeholder:text-brand-cream/35 focus:border-brand-gold/70"
                  />
                  <button type="submit" className="gold-button w-full justify-center py-3">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}