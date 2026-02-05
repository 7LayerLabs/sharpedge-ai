"use client";

import { motion } from "framer-motion";
import {
  Crosshair,
  BarChart3,
  Zap,
  Trophy,
  Wallet,
  Bell,
} from "lucide-react";

/* Paula's spec: Lucide icons, NOT emoji. Line-art, consistent weight. */
const features = [
  {
    Icon: Crosshair,
    title: "AI-Analyzed Picks",
    description:
      "Every pick runs through our models. No gut feelings, no hot takes — just data.",
  },
  {
    Icon: BarChart3,
    title: "Line Movement Tracking",
    description:
      "See where the sharp money is going before you bet. Reverse line movement alerts included.",
  },
  {
    Icon: Zap,
    title: "Prop Models",
    description:
      "Player props broken down with probability scores. Snap counts, usage rates, matchup data.",
  },
  {
    Icon: Trophy,
    title: "Full Slate Coverage",
    description:
      "NFL, NBA, and more — every game that matters, analyzed and delivered before first pitch.",
  },
  {
    Icon: Wallet,
    title: "Bankroll Strategy",
    description:
      "Unit sizing and risk management built into every pick. We tell you how much, not just what.",
  },
  {
    Icon: Bell,
    title: "Live Alerts (Pro)",
    description:
      "Line moves and injury news that change the play — pushed to you in real time.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Features() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 px-5 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header — Paula: centered, tight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className="text-[24px] md:text-[36px] lg:text-[42px] font-[700] tracking-[-0.01em] leading-[1.2] mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            What&apos;s Inside Every Newsletter
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-[500px] mx-auto">
            Real analysis. Real data. Real edge.
          </p>
        </motion.div>

        {/* Feature grid — Paula: 3x2, dark cards, Lucide icons */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5 md:p-6 hover:border-[var(--border-hover)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <f.Icon
                className="w-8 h-8 text-[var(--accent-green)] mb-4 stroke-[1.5]"
              />
              <h3
                className="text-lg md:text-xl font-bold text-white mb-2"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
