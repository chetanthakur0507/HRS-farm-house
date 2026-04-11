"use client";

import { motion } from "motion/react";

const eventTypes = [
  {
    title: "Wedding Reception",
    description: "Wedding reception decor and stage",
    image: "/main-stage.png",
  },
  {
    title: "Engagement Ceremony",
    description: "Engagement ceremony stage setup",
    image: "/jaimala-stage.png",
  },
  {
    title: "Mehndi & Haldi",
    description: "Haldi and mehndi celebration decor",
    image: "/jaimala-entry.png",
  },
  {
    title: "Sangeet Night",
    description: "Sangeet night DJ and lights",
    image: "/decoration-of-stage.png",
  },
  {
    title: "Birthday Party",
    description: "Birthday party hall decoration",
    image: "/main-lawn.png",
  },
  {
    title: "Anniversary Event",
    description: "Anniversary dinner and celebration arrangement",
    image: "/sitting-area-in-lawn.png",
  },
  {
    title: "Corporate Meetings",
    description: "Corporate meeting hall setup",
    image: "/main-gate.png",
  },
  {
    title: "Private Family Gala",
    description: "Private family gala event decor",
    image: "/punjabi-dhaba-sitting-area.png",
  },
  {
    title: "Fashion Show Event",
    description: "Fashion show event stage setup",
    image: "/entry-gate.png",
  },
];

export default function EventTypesSection() {
  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="section-label mb-3 block">Event Types</span>
          <h2 className="section-title">Celebrate Without Limits</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {eventTypes.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.05 }}
              className="group glass-card overflow-hidden rounded-[1.8rem]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-brand-cream">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-cream/75">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}