"use client";

import { motion } from "motion/react";
import { Calendar, Music, PartyPopper, Star } from "lucide-react";

type OccasionsSectionProps = {
  occasions: string[];
};

export default function OccasionsSection({ occasions }: OccasionsSectionProps) {
  return (
    <section id="services" className="relative overflow-hidden py-24 px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-label mb-3 block">Our Expertise</span>
            <h2 className="section-title">Perfect for Every Occasion</h2>
          </div>
          
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {occasions.map((occasion, index) => {
            const icon = index % 4 === 0 ? PartyPopper : index % 4 === 1 ? Music : index % 4 === 2 ? Calendar : Star;

            return (
              <motion.article
                key={occasion}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.03, duration: 0.45 }}
                className="glass-card group rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-brand-gold/30 hover:bg-brand-gold/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold transition-transform duration-300 group-hover:scale-110">
                  {(() => {
                    const Icon = icon;
                    return <Icon className="h-5 w-5" />;
                  })()}
                </div>
                <h3 className="text-lg font-medium text-brand-cream transition-colors group-hover:text-brand-gold">
                  {occasion}
                </h3>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}