"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const tiers = [
  {
    name: "FREE",
    price: "$0",
    period: "forever",
    description: "Get your feet wet with daily picks.",
    features: [
      { text: "2-3 daily picks", included: true },
      { text: "Basic analysis", included: true },
      { text: "Email delivery", included: true },
      { text: "Full slate coverage", included: false },
      { text: "Prop models", included: false },
      { text: "Live alerts", included: false },
    ],
    cta: "Get Started Free",
    ctaStyle: "outline" as const,
    badge: null,
    borderColor: "border-[var(--border)]",
    shadow: "",
    scale: "",
  },
  {
    name: "PRO",
    price: "$14.99",
    period: "/mo",
    description: "For serious bettors who want the full picture.",
    features: [
      { text: "Full daily slate analysis", included: true },
      { text: "AI prop model projections", included: true },
      { text: "Line movement alerts", included: true },
      { text: "Bankroll management tools", included: true },
      { text: "Confidence-rated picks", included: true },
      { text: "NFL + NBA + futures", included: true },
      { text: "Weekly deep dive reports", included: true },
      { text: "Live in-game alerts", included: false },
      { text: "Community access", included: false },
    ],
    cta: "Go Pro →",
    ctaStyle: "green" as const,
    badge: "MOST POPULAR",
    borderColor: "border-[var(--accent-green)]",
    shadow: "shadow-[0_0_40px_rgba(0,255,135,0.15)]",
    scale: "lg:scale-105",
  },
  {
    name: "VIP",
    price: "$49.99",
    period: "/mo",
    description: "The full arsenal. All access, all edges.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Live in-game alerts", included: true },
      { text: "Discord community access", included: true },
      { text: "1-on-1 bankroll strategy/mo", included: true },
      { text: "Early access to model updates", included: true },
      { text: "DFS optimal lineups", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Go VIP",
    ctaStyle: "gold" as const,
    badge: "ALL ACCESS",
    borderColor: "border-[var(--accent-gold)]",
    shadow: "shadow-[0_0_40px_rgba(255,215,0,0.1)]",
    scale: "",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 px-5 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
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
            Choose Your Edge
          </h2>
          <p className="text-[var(--text-secondary)] text-base md:text-lg max-w-[500px] mx-auto">
            Start free. Upgrade when you&apos;re winning.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i === 1 ? 0.1 : 0,
              }}
              className={`relative bg-[var(--bg-card)] border-2 ${tier.borderColor} rounded-2xl p-6 md:p-8 ${tier.shadow} ${tier.scale} z-${i === 1 ? "10" : "0"}`}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-[0.08em] ${
                    tier.ctaStyle === "green"
                      ? "bg-[var(--accent-green)] text-[#0A0A0F]"
                      : "bg-[var(--accent-gold)] text-[#0A0A0F]"
                  }`}
                >
                  {tier.badge}
                </div>
              )}

              {/* Tier name */}
              <div className="text-xs font-bold tracking-[0.08em] text-[var(--text-secondary)] uppercase mb-4">
                {tier.name}
              </div>

              {/* Price — Paula: JetBrains Mono 700, 48px */}
              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="text-[40px] md:text-[48px] font-bold text-white leading-none"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  {tier.price}
                </span>
                <span className="text-sm text-[var(--text-secondary)]">
                  {tier.period}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                {tier.description}
              </p>

              {/* Divider */}
              <div className="h-px bg-[var(--border)] mb-6" />

              {/* Features */}
              <div className="space-y-3 mb-8">
                {tier.features.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-2.5">
                    {f.included ? (
                      <Check className="w-4 h-4 text-[var(--accent-green)] mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-[var(--text-muted)] mt-0.5 flex-shrink-0" />
                    )}
                    <span
                      className={`text-[15px] ${
                        f.included
                          ? "text-[var(--text-secondary)]"
                          : "text-[var(--text-muted)]"
                      }`}
                    >
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button — Paula: full-width, 48px, per tier style */}
              <a
                href={tier.ctaStyle === "outline" ? "#hero-signup" : "#"}
                className={`block w-full text-center font-bold text-sm py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] ${
                  tier.ctaStyle === "green"
                    ? "bg-[var(--accent-green)] text-[#0A0A0F] hover:shadow-[0_0_20px_rgba(0,255,135,0.3)] pulse-cta"
                    : tier.ctaStyle === "gold"
                      ? "bg-[var(--accent-gold)] text-[#0A0A0F] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                      : "bg-transparent text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:text-white"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-xs text-[var(--text-muted)]"
        >
          🔒 Stripe-secured payments. Cancel anytime with one click. 7-day
          money-back guarantee.
        </motion.p>
      </div>
    </section>
  );
}
