"use client";

import { motion } from "motion/react";

const walkthroughImages = [
  "/main-gate.png",
  "/entry-gate.png",
  "/main-stage.png",
  "/jaimala-stage.png",
  "/main-lawn.png",
  "/punjabi-dhaba-in-wedding.png",
  "/sitting-area-in-lawn.png",
  "/jaimala-entry.png",
];

function WalkRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...walkthroughImages, ...walkthroughImages];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
      >
        {items.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt="Banquet walkthrough"
            className="h-52 w-80 shrink-0 rounded-3xl border border-white/10 object-cover md:h-64 md:w-[26rem]"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function VisualWalkthroughSection() {
  return (
    <section className="px-6 py-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="section-label mb-3 block">Visual Walkthrough</span>
          <h2 className="section-title">Walk Through The Venue Before You Visit</h2>
          <p className="mt-4 muted-copy">
            Is section mein photos auto chalti rahengi, jisse clients ko entry, stage, lawn aur decor flow ka real feel milta hai.
          </p>
        </div>

        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 md:p-6">
          <WalkRow />
          <WalkRow reverse />
        </div>
      </div>
    </section>
  );
}