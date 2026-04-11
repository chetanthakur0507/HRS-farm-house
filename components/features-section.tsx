"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Users, Waves, Home, Heart, Building, ChefHat, Bath, ParkingCircle, DoorOpen, Volume2, Lightbulb, Zap, Wifi, UserCheck } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "A clear designer pool made for summer parties, photoshoots, and relaxed evenings.",
    image: "/main-lawn.png",
  },
  {
    icon: Users,
    title: "Party Lounge",
    description: "A spacious air-conditioned lounge with sound, lighting, and celebration-ready energy.",
    image: "/jaimala-sitting-area.png",
  },
  {
    icon: MapPin,
    title: "Lush Gardens",
    description: "Landscaped lawns for outdoor gatherings, decor installations, and large family functions.",
    image: "/main-lawn.png",
  },
  {
    icon: Home,
    title: "3 AC Rooms",
    description: "Comfortable air-conditioned rooms for guests and family members.",
    image: "/jaimala-entry.png",
  },
  {
    icon: Heart,
    title: "Bridal Room",
    description: "Private bridal room with dedicated preparation space for makeup and styling.",
    image: "/jaimala-sitting-area.png",
  },
  {
    icon: Building,
    title: "2 Banquet Halls",
    description: "Two versatile hall setups for events, ceremonies, and celebrations.",
    image: "/main-stage.png",
  },
  {
    icon: ChefHat,
    title: "2 Kitchens",
    description: "Dual kitchen setup for efficient food preparation and service operations.",
    image: "/cattering.png",
  },
  {
    icon: Bath,
    title: "Attached Bathrooms",
    description: "Separate attached bathrooms in rooms for guest convenience.",
    image: "/sitting-area-in-lawn.png",
  },
  {
    icon: ParkingCircle,
    title: "Big Parking",
    description: "Ample parking space for 100+ cars and 100+ two-wheelers.",
    image: "/main-gate.png",
  },
  {
    icon: DoorOpen,
    title: "Long Gallery",
    description: "Long gallery for seamless guest movement and memorable entry experience.",
    image: "/long-gate.png",
  },
  {
    icon: Volume2,
    title: "Premium Sound",
    description: "Professional audio setup for live events, DJ, and performances.",
    image: "/decoration-of-stage.png",
  },
  {
    icon: Lightbulb,
    title: "Intelligent Lighting",
    description: "Advanced stage lighting with smart controls for perfect ambiance.",
    image: "/jaimala-stage.png",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Reliable generator and power backup support for uninterrupted celebrations.",
    image: "/main-stage.png",
  },
  {
    icon: Wifi,
    title: "Wi-Fi + Projector",
    description: "Conference-ready setup with high-speed Wi-Fi and projection capabilities.",
    image: "/main-stage.png",
  },
  {
    icon: UserCheck,
    title: "In-House Event Team",
    description: "Dedicated professional team managing every aspect of your celebration.",
    image: "/jaimala-entry.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-2xl overflow-hidden p-0"
          >
            <div className="relative h-36 w-full overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
                quality={75}
              />
            </div>
            <div className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-medium text-brand-cream">{feature.title}</h3>
              <p className="mt-2 text-xs leading-5 text-brand-cream/70">{feature.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}