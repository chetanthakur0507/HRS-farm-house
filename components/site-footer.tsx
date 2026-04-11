"use client";

import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.01)_100%)] px-6 py-16">
      <div className="absolute inset-0 pointer-events-none opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.9fr_1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-brand-gold/35 bg-white">
              <Image
                src="/hrs-logo.png"
                alt="GM Royal Palace Logo"
                fill
                sizes="56px"
                quality={75}
                unoptimized
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-brand-gold/80">Luxury Banquet</p>
              <h3 className="mt-1 text-2xl font-semibold text-brand-cream">GM Royal Palace</h3>
            </div>
          </div>

          <p className="mt-6 max-w-xl leading-7 text-brand-cream/75">
            Royal weddings, premium receptions, meetings, birthdays, engagements, and curated celebrations under one polished venue.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a href="tel:+917065426262" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-brand-cream transition hover:border-brand-gold/40 hover:text-brand-gold">
              <Phone className="h-4 w-4" />
              Call Us
            </a>
            <a href="https://wa.me/917065426262" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-brand-cream transition hover:border-brand-gold/40 hover:text-brand-gold">
              <ArrowUpRight className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <h4 className="text-lg font-semibold text-brand-cream">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-brand-cream/80">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "Services", href: "/services" },
              { label: "Gallery", href: "/gallery" },
              { label: "FAQ", href: "/#faq" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <a href={item.href} className="inline-flex items-center gap-2 transition-colors hover:text-brand-gold">
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
          <h4 className="text-lg font-semibold text-brand-cream">Venue Info</h4>
          <div className="mt-5 space-y-4 text-brand-cream/78">
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-gold" />
              <span>7 No Police Chauki, Vill Ilayachipur Main Road Signature City, Near Shani Mandir, Sonia Vihar Pasta Road, Elaichipur, Ghaziabad-201102, Uttar Pradesh</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand-gold" />
              <a href="tel:+917065426262" className="transition-colors hover:text-brand-gold">+91 70654 26262</a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand-gold" />
              <a href="mailto:abhishektyagi.gi@gmail.com" className="transition-colors hover:text-brand-gold">vishalsharma@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-brand-cream/50 md:flex-row">
        <p>© 2026 GM Royal Palace. All rights reserved.</p>
        <p>Luxury Banquet Venue | Ghaziabad</p>
      </div>
    </footer>
  );
}