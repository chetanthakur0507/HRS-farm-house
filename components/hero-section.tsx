"use client";

import { motion } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/jaimala-stage.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
            filter: "contrast(1.35) brightness(0.65) saturate(0.95)",
            imageRendering: "crisp-edges",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.04),transparent_36%),linear-gradient(180deg,rgba(5,10,6,0.45)_0%,rgba(5,10,6,0.65)_40%,rgba(5,10,6,0.92)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-4xl"
        >
          <span className="section-label mb-4 block">Luxury Redefined</span>
          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
            HRS Farm House <span className="italic gold-gradient">Event Lawn</span>
            <br />
            & Swimming Pool
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-brand-cream/78 md:text-xl">
            Experience a premium farm house and party lounge in Ghaziabad.  Pool parties, lawn events, and festive gatherings designed with a warm luxury feel.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a className="gold-button text-lg px-9 py-4" href="/booking">
              Book Your Event
            </a>
            <a className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-9 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10" href="/gallery">
              View Gallery
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { icon: Calendar, label: "Events", value: "All Occasions" },
              { icon: MapPin, label: "Location", value: "Ghaziabad" },
              { icon: Clock, label: "Availability", value: "Open 24/7" },
            ].map((item) => (
              <div key={item.label} className="glass-card flex items-center gap-4 rounded-2xl px-5 py-4 text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-cream/45">{item.label}</p>
                  <p className="text-lg font-medium text-brand-cream">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-gold/60"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-current pt-2">
            <div className="h-2 w-1 rounded-full bg-current" />
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}