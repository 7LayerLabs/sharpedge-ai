"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get your feet wet. Daily picks delivered free.",
    features: [
      "2-3 featured picks daily",
      "Basic AI analysis",
      "Game day email alerts",
      "Weekly recap",
    ],
    notIncluded: [
      "Full slate analysis",
      "Prop model access",
      "Line movement alerts",
      "Live game alerts",
      "Community access",
    ],
    cta: "Start Free",
    ctaLink: "#signup",
    popular: false,
    accent: "gray",
  },
  {
    name: "Pro",
    price: "$14.99",
    period: "/mo",
    description: "For serious bettors who want the full picture.",
    features: [
      "Full daily slate analysis",
      "AI prop model projections",
      "Line movement alerts",
      "Bankroll management tools",
      "Confidence-rated picks",
      "NFL + NBA + futures coverage",
      "Weekly deep dive reports",
    ],
    notIncluded: ["Live in-game alerts", "Direct community access"],
    cta: "Go Pro →",
    ctaLink: "#",
    popular: true,
    accent: "green",
  },
  {
    name: "VIP",
    price: "$49.99",
    period: "/mo",
    description: "The full arsenal. For those who bet to win.",
    features: [
      "Everything in Pro",
      "Live in-game opportunity alerts",
      "Direct community access (Discord)",
      "1-on-1 bankroll strategy session/mo",
      "Early access to model updates",
      "DFS optimal lineups",
      "Priority support",
    ],
    notIncluded: [],
    cta: "Go VIP 🔥",
    ctaLink: "#",
    popular: false,
    accent: "blue",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[var(--neon-green)]/10 border border-[var(--neon-green)]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-[var(--neon-green)] uppercase tracking-wider">
              Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Pick your{" "}
            <span className="text-[var(--neon-green)] glow-green-text">
              edge.
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Start free. Upgrade when you&apos;re ready to get serious. Cancel anytime — no lock-in, no BS.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`relative rounded-2xl p-6 lg:p-8 ${
                tier.popular
                  ? "pricing-popular lg:scale-105 lg:-my-4 z-10"
                  : "bg-[var(--card-bg)] border border-[var(--card-border)]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--neon-green)] text-black font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Tier Header */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-2 ${
                    tier.accent === "green"
                      ? "text-[var(--neon-green)]"
                      : tier.accent === "blue"
                        ? "text-[var(--neon-blue)]"
                        : "text-gray-300"
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black">{tier.price}</span>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>
                <p className="text-gray-400 text-sm">{tier.description}</p>
              </div>

              {/* CTA */}
              <a
                href={tier.ctaLink}
                className={`block w-full text-center font-bold text-sm py-3.5 rounded-lg mb-6 transition-all ${
                  tier.popular
                    ? "bg-[var(--neon-green)] text-black hover:shadow-[0_0_30px_rgba(57,255,20,0.4)]"
                    : tier.accent === "blue"
                      ? "bg-[var(--neon-blue)] text-black hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
                      : "bg-[var(--surface)] text-gray-300 border border-[var(--card-border)] hover:border-[var(--neon-green)]/30 hover:text-[var(--neon-green)]"
                }`}
              >
                {tier.cta}
              </a>

              {/* Features */}
              <div className="space-y-3">
                {tier.features.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-2">
                    <span className="text-[var(--neon-green)] mt-0.5 text-sm flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
                {tier.notIncluded.map((feature, fi) => (
                  <div key={fi} className="flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5 text-sm flex-shrink-0">
                      ✗
                    </span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            🔒 Stripe-secured payments. Cancel anytime with one click.
            <br />
            <span className="text-gray-600">
              Not satisfied? Email us within 7 days for a full refund. No questions asked.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
