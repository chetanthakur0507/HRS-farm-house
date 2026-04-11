"use client";

import { motion } from "motion/react";

type GalleryImage = {
  url: string;
  title: string;
};

type GallerySectionProps = {
  images: GalleryImage[];
};

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <section id="gallery" className="py-24 px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="section-label mb-3 block">Visual Journey</span>
          <h2 className="section-title">A glimpse into the experiences we create</h2>
          <p className="mt-5 text-brand-cream/70">
            Every corner is designed to feel memorable, from the pool deck to the dining and celebration spaces.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {images.map((image, index) => (
            <motion.article
              key={image.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2rem]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep via-brand-green/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div className="glass-card rounded-2xl p-4">
                  <p className="section-label mb-2 block">Space</p>
                  <h3 className="text-2xl text-brand-gold">{image.title}</h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}