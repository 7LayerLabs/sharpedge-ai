"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Analysis",
    description:
      "Our models process thousands of data points — injury reports, weather, ref tendencies, historical matchups — to find edges the books miss.",
    accent: "green" as const,
  },
  {
    icon: "📊",
    title: "Prop Model Engine",
    description:
      "Player prop projections built from snap counts, usage rates, and defensive matchup data. We don't guess — we model.",
    accent: "blue" as const,
  },
  {
    icon: "📈",
    title: "Line Movement Tracking",
    description:
      "Know where the sharp money is going before the public catches up. Get alerts when lines move significantly across major books.",
    accent: "green" as const,
  },
  {
    icon: "⚡",
    title: "6AM Daily Delivery",
    description:
      "Full slate analysis in your inbox before your morning coffee. NFL, NBA, and more — every day during season.",
    accent: "blue" as const,
  },
  {
    icon: "🎯",
    title: "Bankroll Strategy",
    description:
      "Unit-based recommendations with confidence ratings. We tell you how much to risk, not just what to bet.",
    accent: "green" as const,
  },
  {
    icon: "🔔",
    title: "Live Game Alerts",
    description:
      "VIP members get real-time in-game opportunities pushed to their phone. When the model spots value mid-game, you know instantly.",
    accent: "blue" as const,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-[var(--neon-blue)] uppercase tracking-wider">
              What You Get
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Not picks.{" "}
            <span className="text-[var(--neon-blue)] glow-blue-text">
              Intelligence.
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Every &quot;picks&quot; service gives you a team name and a prayer. We give
            you the data, the model, and the reasoning — so you can bet smarter.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`group p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--neon-${feature.accent})]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(${feature.accent === "green" ? "57,255,20" : "0,212,255"},0.08)]`}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3
                className={`text-lg font-bold mb-2 group-hover:text-[var(--neon-${feature.accent})] transition-colors`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
