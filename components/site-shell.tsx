"use client";

import { useEffect, useState, type ReactNode } from "react";
import FloatingActions from "./floating-actions";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { navLinks } from "./site-data";

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden selection:bg-brand-gold/30 selection:text-brand-green">
      <SiteHeader
        navLinks={navLinks}
        isMenuOpen={isMenuOpen}
        scrolled={scrolled}
        onMenuToggle={() => setIsMenuOpen((value) => !value)}
        onMenuClose={() => setIsMenuOpen(false)}
      />

      {children}

      <SiteFooter />

      <FloatingActions
        showBackToTop={showBackToTop}
        onBackToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}