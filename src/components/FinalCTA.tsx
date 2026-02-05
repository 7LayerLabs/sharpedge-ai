"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-32 px-5 md:px-6 relative">
      {/* Subtle radial glow — more prominent per Paula's spec */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--accent-green)]/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[600px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2
            className="text-[28px] md:text-[40px] lg:text-[48px] font-[800] tracking-[-0.02em] leading-[1.1] mb-6"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Stop Guessing.
            <br />
            <span className="text-[var(--accent-green)] glow-green-text">
              Start Winning.
            </span>
          </h2>

          {submitted ? (
            <div className="bg-[var(--bg-card)] border border-[var(--accent-green)]/30 rounded-lg px-6 py-4 max-w-[480px] mx-auto">
              <p className="text-[var(--accent-green)] font-semibold text-sm">
                ✓ You&apos;re in. Picks drop at 6 AM ET. Check your inbox.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row max-w-[480px] mx-auto mb-4"
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
                Join Free →
              </button>
            </form>
          )}

          <p className="text-sm text-[var(--text-secondary)] mt-4">
            Join{" "}
            <span
              className="text-[var(--accent-green)] font-medium"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              2,847
            </span>{" "}
            bettors who already have the edge.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
