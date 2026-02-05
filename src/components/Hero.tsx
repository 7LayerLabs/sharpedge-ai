"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-48 pb-20 lg:pb-32 px-4 overflow-hidden hero-radial">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--neon-green)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--neon-blue)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-[var(--neon-green)]/10 border border-[var(--neon-green)]/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 bg-[var(--neon-green)] rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-[var(--neon-green)] uppercase tracking-wider">
            AI-Powered Betting Intelligence
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6"
        >
          The house always wins.
          <br />
          <span className="glow-green-text text-[var(--neon-green)]">
            Now you do too.
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Every morning, our AI scans lines, models props, and tracks
          sharp money movement across the entire sports betting market.
          You get the edge — delivered to your inbox before the books adjust.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#signup"
            className="w-full sm:w-auto bg-[var(--neon-green)] text-black font-extrabold text-base px-8 py-4 rounded-lg hover:bg-[var(--neon-green)]/90 transition-all pulse-glow"
          >
            Get Free Daily Picks →
          </a>
          <a
            href="#preview"
            className="w-full sm:w-auto border border-[var(--card-border)] text-gray-300 font-semibold text-base px-8 py-4 rounded-lg hover:border-[var(--neon-blue)]/50 hover:text-[var(--neon-blue)] transition-all"
          >
            See Sample Newsletter
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "67%", label: "Prop Hit Rate" },
            { value: "6AM", label: "Daily Delivery" },
            { value: "$0", label: "To Start Free" },
            { value: "24/7", label: "AI Scanning" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="stat-number text-2xl sm:text-3xl font-black mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
