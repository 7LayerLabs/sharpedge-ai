"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-radial px-5">
      <div className="max-w-[800px] mx-auto text-center pt-[72px]">
        {/* Badge — Paula: pill, elevated bg, green border, pulse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-[var(--bg-elevated)] border border-[rgba(0,255,135,0.3)] rounded-full px-4 py-2 mb-8"
        >
          <span className="text-sm animate-pulse">🔥</span>
          <span className="text-sm font-medium text-white">
            Super Bowl LX picks are LIVE
          </span>
        </motion.div>

        {/* Headline — Paula: Inter Tight 800, 64px, "NOW YOU DO TOO." in green */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] font-[800] mb-6"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          THE HOUSE ALWAYS WINS.
          <br />
          <span className="text-[var(--accent-green)] glow-green-text">
            NOW YOU DO TOO.
          </span>
        </motion.h1>

        {/* Subtext — Paula: Inter 400, 18px, secondary color, max 560px */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-base md:text-lg text-[var(--text-secondary)] max-w-[560px] mx-auto mb-10 leading-[1.6]"
        >
          AI-powered sports betting intelligence that actually gives you an edge.
          Daily picks, prop models, and line movement analysis — backed by data,
          not gut feelings.
        </motion.p>

        {/* Email form — Paula: single row, input+button as ONE unit, 480px max */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          id="hero-signup"
        >
          {submitted ? (
            <div className="bg-[var(--bg-card)] border border-[var(--accent-green)]/30 rounded-lg px-6 py-4 max-w-[480px] mx-auto">
              <p className="text-[var(--accent-green)] font-semibold text-sm">
                ✓ You&apos;re in. First picks hit your inbox at 6 AM ET.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row max-w-[480px] mx-auto"
            >
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-[var(--bg-card)] border border-[#2A2A3E] text-white text-base px-4 py-3 rounded-lg sm:rounded-r-none sm:border-r-0 placeholder:text-[var(--text-muted)] font-[family-name:var(--font-inter)]"
              />
              <button
                type="submit"
                className="bg-[var(--accent-green)] text-[#0A0A0F] font-bold text-base px-6 py-3 rounded-lg sm:rounded-l-none hover:scale-[1.02] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,135,0.3)] whitespace-nowrap mt-3 sm:mt-0"
              >
                Get Free Picks →
              </button>
            </form>
          )}
        </motion.div>

        {/* Trust badges — Paula: green checkmarks, Inter 500, secondary text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6"
        >
          {["Free daily picks", "No credit card", "Cancel anytime"].map(
            (text) => (
              <span
                key={text}
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)]"
              >
                <svg className="w-4 h-4 text-[var(--accent-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {text}
              </span>
            )
          )}
        </motion.div>

        {/* Scroll indicator — Paula: bounce, muted color */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bounce-down"
        >
          <span className="text-xs text-[var(--text-muted)]">
            See how it works
          </span>
          <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
        </motion.div>
      </div>
    </section>
  );
}
