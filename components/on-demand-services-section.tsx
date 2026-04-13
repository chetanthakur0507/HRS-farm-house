"use client";

import { motion } from "motion/react";

const onDemandServices = [
  {
    title: "Mehndi Artist On-Demand",
    description: "Bridal + family mehndi setups with premium seating decor.",
    image: "/jaimala-sitting-area.png",
  },
  {
    title: "Makeup Artist On-Demand",
    description: "Professional bridal and party makeup artists available.",
    image: "/jaimala-entry.png",
  },
  {
    title: "Photography & Cinematic Reel",
    description: "Candid, drone, teaser film, family documentary coverage.",
    image: "/main-stage.png",
  },
  {
    title: "Bridal Entry Concepts",
    description: "Dry ice, cold pyros, custom music and aisle choreography.",
    image: "/entry-gate.png",
  },
  {
    title: "Live DJ & Sound Design",
    description: "High quality DJ console and sound setup for dance and stage moments.",
    image: "/decoration-of-stage.png",
  },
  {
    title: "Floral & Theme Decor",
    description: "Complete decoration by farm team; real flowers available on demand.",
    image: "/jaimala-stage.png",
  },
  {
    title: "Theme Modification",
    description: "Theme changes as per requirement with additional customization charges.",
    image: "/main-lawn.png",
  },
  {
    title: "Luxury Catering",
    description: "Multi cuisine menus with live counters and curated plating.",
    image: "/cattering.png",
  },
  {
    title: "Pandit & Ritual Support",
    description: "Traditional ceremony arrangements with full ritual setup.",
    image: "/punjabi-dhaba-in-wedding.png",
  },
  {
    title: "Guest Hospitality Desk",
    description: "Welcome team, valet flow, guest movement and service crew.",
    image: "/sitting-area-in-lawn.png",
  },
  {
    title: "Generator + Power Backup",
    description: "Uninterrupted event operations with technical support.",
    image: "/main-gate.png",
  },
];

export default function OnDemandServicesSection() {
  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-label mb-3 block">On-Demand Services</span>
          <h2 className="section-title">Everything You Need Right After Booking</h2>
          
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {onDemandServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card overflow-hidden rounded-[1.8rem]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-52 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold leading-tight text-brand-cream">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-cream/75">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}