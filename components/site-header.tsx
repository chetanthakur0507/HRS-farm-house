"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navLinks: NavLink[];
  isMenuOpen: boolean;
  scrolled: boolean;
  onMenuToggle: () => void;
  onMenuClose: () => void;
};

export default function SiteHeader({
  navLinks,
  isMenuOpen,
  scrolled,
  onMenuToggle,
  onMenuClose,
}: SiteHeaderProps) {
  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-brand-green/90 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-brand-gold/40 bg-white shadow-[0_12px_30px_rgba(212,175,55,0.22)]">
              <Image
                src="/hrs-logo.png"
                alt="HRS Farm House logo"
                fill
                sizes="56px"
                quality={75}
                unoptimized
                className="object-contain p-1"
                priority
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-gold/70">Luxury Venue</p>
              <span className="block text-lg font-semibold tracking-[0.22em] text-brand-cream">HRS FARM HOUSE</span>
            </div>
          </motion.a>

          <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.28em] md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-brand-gold">
                {link.label}
              </a>
            ))}
            <a className="gold-button text-xs" href="/booking">
              Booking Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-gold backdrop-blur md:hidden"
            onClick={onMenuToggle}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="fixed inset-0 z-40 bg-brand-green/95 px-6 pt-24 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col gap-4 text-center text-2xl font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={onMenuClose}
                    className="rounded-2xl border border-white/5 px-4 py-3 transition-colors hover:bg-white/5 hover:text-brand-gold"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a className="gold-button mt-8 w-full" href="/booking" onClick={onMenuClose}>
                Booking Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}