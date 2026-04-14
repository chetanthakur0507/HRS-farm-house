"use client";

import { motion } from "motion/react";
import { CheckCircle2, ChefHat, Clock3, Flower2, ParkingCircle, ShieldCheck, Sparkles, Star, Volume2, Wifi } from "lucide-react";

const venueZones = [
  {
    title: "Main Lawn",
    image: "/main-lawn.png",
    detail: "Open-air lawn for baraat, varmala, and large family gatherings.",
  },
  {
    title: "Grand Stage",
    image: "/main-stage.png",
    detail: "Wide stage setup for wedding rituals, live performances, and photos.",
  },
  {
    title: "Jaimala Entry",
    image: "/jaimala-entry.png",
    detail: "Stylized entry route for bride and groom with lighting and florals.",
  },
  {
    title: "Punjabi Dhaba Corner",
    image: "/punjabi-dhaba-in-wedding.png",
    detail: "Signature food setup for themed nights and festive counters.",
  },
];

const decorThemes = [
  {
    title: "Royal Wedding Look",
    image: "/decoration-of-stage.png",
    detail: "Gold florals, layered drapes, and premium warm lighting.",
  },
  {
    title: "Floral Jaimala Stage",
    image: "/jaimala-stage.png",
    detail: "Focused floral framing for couple portraits and varmala moments.",
  },
  {
    title: "Elegant Gate Setup",
    image: "/entry-gate.png",
    detail: "Grand entrance decor designed for first impression photos.",
  },
];

const foodHighlights = [
  "Multi-cuisine veg and non-veg menu planning",
  "Live chaat, tandoor, and dessert counters",
  "Welcome drinks and mocktail station",
  "Professional serving team and counter management",
];

const eventTimeline = [
  { time: "10:00 AM", title: "Setup Begins", text: "Decor, sound, light, and seating layout are finalized." },
  { time: "1:00 PM", title: "Catering Ready", text: "Kitchen prep and live counter trial runs are completed." },
  { time: "4:00 PM", title: "Guest Welcome", text: "Entry gate, reception desk, and welcome service go live." },
  { time: "6:00 PM", title: "Ceremony Start", text: "Main stage rituals and announcement flow begin on schedule." },
  { time: "8:00 PM", title: "Dinner Service", text: "Buffet, live stations, and table support run in parallel." },
  { time: "10:30 PM", title: "Wrap and Assistance", text: "Team supports vendor closing and organized event wrap-up." },
];

const facilities = [
  { icon: ParkingCircle, title: "Parking Space", text: "Dedicated parking assistance for smooth guest arrival." },
  { icon: Wifi, title: "High-Speed Wi-Fi", text: "Reliable connectivity for hosts, media, and DJ setup." },
  { icon: Volume2, title: "Sound Support", text: "Event-ready music and announcement arrangement." },
  { icon: ShieldCheck, title: "Safety Team", text: "On-ground staff supervision during full event hours." },
  { icon: Clock3, title: "Flexible Timing", text: "Suitable for day functions and late evening celebrations." },
  { icon: Flower2, title: "Decor Coordination", text: "Vendor-friendly planning with stage and pathway alignment." },
];

const testimonials = [
  {
    text: "Wedding management bahut smooth tha. Entry se dinner tak har segment planned tha.",
    name: "Verma Family",
  },
  {
    text: "Stage look aur lawn lighting ne event ko premium feel diya. Guests bahut impressed the.",
    name: "Agarwal Family",
  },
  {
    text: "Food counters and staff support top-level tha. Humko event day par stress nahi hua.",
    name: "Khurana Family",
  },
];

const faqs = [
  {
    q: "Kitne guests comfortably handle ho jate hain?",
    a: "Function type ke hisab se compact to large gatherings comfortably host kiye ja sakte hain.",
  },
  {
    q: "Kya decor aur catering customize ho sakta hai?",
    a: "Haan, theme, stage style, menu, and counters event requirement ke hisab se customize hote hain.",
  },
  {
    q: "Kya pre-event visit possible hai?",
    a: "Bilkul, booking finalize karne se pehle venue walkthrough schedule kiya ja sakta hai.",
  },
  {
    q: "Parking aur power backup available hai?",
    a: "Haan, guest convenience ke liye parking support aur event continuity ke liye backup arrangement available hai.",
  },
];

export default function BanquetExperienceSections() {
  return (
    <>
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="section-label mb-3 block">Venue Zones</span>
            <h2 className="section-title">Banquet Spaces Designe For Every Ceremony</h2>
            
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {venueZones.map((zone, index) => (
              <motion.article
                key={zone.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.07 }}
                className="glass-card overflow-hidden rounded-[1.8rem]"
              >
                <img src={zone.image} alt={zone.title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-brand-cream">{zone.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-cream/75">{zone.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="section-label mb-3 block">Decor Themes</span>
            <h2 className="section-title">Stage, Gate, And Styling That Looks Premium</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {decorThemes.map((theme, index) => (
              <motion.article
                key={theme.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem]"
              >
                <img src={theme.image} alt={theme.title} className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                  <h3 className="text-2xl font-semibold text-brand-cream">{theme.title}</h3>
                  <p className="mt-2 text-sm text-brand-cream/80">{theme.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="glass-card rounded-[2rem] p-8"
          >
            <span className="section-label mb-3 block">Catering Experience</span>
            <h2 className="text-4xl md:text-5xl">Food Counters Guests Remember</h2>
            <p className="mt-4 muted-copy">
              Wedding ho, engagement ho, ya family party, food section ko event ke highlight ki tarah execute kiya jata hai.
            </p>
            <ul className="mt-7 space-y-4">
              {foodHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-cream/85">
                  <ChefHat className="mt-0.5 h-5 w-5 text-brand-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <img src="/punjabi-dhaba-sitting-area.png" alt="Punjabi dhaba seating" className="h-56 w-full rounded-3xl object-cover" />
            <img src="/sitting-area-in-lawn.png" alt="Lawn seating" className="h-56 w-full rounded-3xl object-cover" />
            <img src="/jaimala-sitting-area.png" alt="Jaimala seating" className="h-56 w-full rounded-3xl object-cover sm:col-span-2" />
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="section-label mb-3 block">Event Flow</span>
            <h2 className="section-title">Planned Timeline For Stress-Free Celebrations</h2>
          </div>

          <div className="space-y-4">
            {eventTimeline.map((step, index) => (
              <motion.div
                key={step.time}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.06 }}
                className="glass-card grid gap-3 rounded-2xl p-5 md:grid-cols-[140px_1fr] md:items-center"
              >
                <div className="text-lg font-semibold text-brand-gold">{step.time}</div>
                <div>
                  <h3 className="text-xl font-medium text-brand-cream">{step.title}</h3>
                  <p className="mt-1 text-brand-cream/75">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="section-label mb-3 block">Guest Comfort</span>
            <h2 className="section-title">Facilities That Keep Every Function Smooth</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card rounded-[1.8rem] p-7"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-medium text-brand-cream">{item.title}</h3>
                <p className="mt-2 text-brand-cream/75">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {[
              { label: "Successful Functions", value: "850+" },
              { label: "Guest Capacity Support", value: "300-1200" },
              { label: "Average Host Rating", value: "4.9/5" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-3xl p-7 text-center"
              >
                <p className="section-label mb-2 block">{stat.label}</p>
                <p className="text-4xl font-semibold text-brand-gold">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: index * 0.06 }}
                className="glass-card rounded-3xl p-7"
              >
                <div className="mb-3 flex items-center gap-1 text-brand-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="leading-7 text-brand-cream/85">{item.text}</p>
                <footer className="mt-4 text-sm uppercase tracking-[0.2em] text-brand-gold/80">{item.name}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 pt-24 md:pb-32 md:pt-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="glass-card rounded-[2rem] p-8 md:p-10">
            <span className="section-label mb-4 block">Frequently Asked</span>
            <h2 className="mb-8 text-4xl md:text-5xl">Common Questions Before Booking</h2>
            <div className="space-y-5">
              {faqs.map((item) => (
                <article key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="flex items-start gap-3 text-lg text-brand-cream">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                    <span>{item.q}</span>
                  </h3>
                  <p className="mt-2 pl-8 text-sm leading-6 text-brand-cream/75">{item.a}</p>
                </article>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <img src="/long-gate.png" alt="HRS Farm House entrance" className="h-full min-h-[420px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-black/25 px-4 py-1 text-xs uppercase tracking-[0.28em] text-brand-gold">
                <Sparkles className="h-4 w-4" />
                Ready For Your Event
              </span>
              <h3 className="text-3xl font-semibold text-brand-cream md:text-4xl">Date Lock Karni Hai?</h3>
              <p className="mt-3 max-w-md text-brand-cream/80">
                Team se connect karke walkthrough schedule karein aur apne function ke liye best setup finalize karein.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="/booking" className="gold-button px-8 py-3 text-base">
                  Book Site Visit
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-base text-brand-cream transition hover:bg-white/20"
                >
                  Contact Team
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}