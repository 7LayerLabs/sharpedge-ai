"use client";

import { motion } from "framer-motion";

export default function SuperBowlBanner() {
  return (
    <section className="py-8 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[var(--neon-green)]/10 via-[var(--card-bg)] to-[var(--neon-blue)]/10 border border-[var(--neon-green)]/30 p-6 sm:p-8 lg:p-10">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--neon-green)]/10 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--neon-blue)]/10 rounded-tr-full" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="text-5xl sm:text-6xl mb-2">🏈</div>
              <div className="bg-[var(--neon-green)] text-black font-extrabold text-xs px-3 py-1 rounded-full inline-block uppercase tracking-wider">
                Super Bowl LX
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-black mb-2">
                Launch Special:{" "}
                <span className="text-[var(--neon-green)] glow-green-text">
                  Super Bowl Picks FREE
                </span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mb-1">
                <strong className="text-white">Seahawks vs Patriots</strong> — February 8, 2026 at Levi&apos;s Stadium, Santa Clara
              </p>
              <p className="text-gray-500 text-sm">
                Full prop analysis, line breakdowns, and game-day alerts. Our AI model has been crunching playoff data all season. Sign up now — this offer expires at kickoff.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#signup"
                className="inline-block bg-[var(--neon-green)] text-black font-extrabold text-sm px-6 py-3 rounded-lg hover:bg-[var(--neon-green)]/90 transition-all hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] whitespace-nowrap"
              >
                Claim Free Picks 🎯
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
