"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronRight, Phone } from "lucide-react";

type FloatingActionsProps = {
  showBackToTop: boolean;
  onBackToTop: () => void;
};

export default function FloatingActions({ showBackToTop, onBackToTop }: FloatingActionsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4 md:bottom-8 md:right-8">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={onBackToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-brand-green shadow-[0_16px_35px_rgba(0,0,0,0.25)] transition-transform hover:scale-110"
            aria-label="Back to top"
          >
            <ChevronRight className="h-5 w-5 -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/917065426262"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.08 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_rgba(0,0,0,0.25)]"
        aria-label="WhatsApp us"
      >
        <Phone className="h-6 w-6 fill-current" />
      </motion.a>
    </div>
  );
}