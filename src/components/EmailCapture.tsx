"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Connect to ConvertKit/Buttondown API
      setSubmitted(true);
    }
  };

  return (
    <section id="signup" className="py-20 lg:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-border rounded-2xl">
            <div className="relative z-10 bg-[var(--card-bg)] rounded-xl p-8 sm:p-12 text-center">
              {/* Icon */}
              <div className="text-5xl mb-6">🎯</div>

              {submitted ? (
                /* Success State */
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-4">
                    You&apos;re in.{" "}
                    <span className="text-[var(--neon-green)] glow-green-text">
                      Let&apos;s eat.
                    </span>
                  </h2>
                  <p className="text-gray-400 mb-4">
                    Check your inbox — your first picks drop at 6AM ET tomorrow.
                    <br />
                    Super Bowl LX analysis is already queued up. 🏈
                  </p>
                  <div className="inline-flex items-center gap-2 bg-[var(--neon-green)]/10 border border-[var(--neon-green)]/20 rounded-full px-5 py-2">
                    <span className="text-[var(--neon-green)] font-semibold text-sm">
                      ✓ Subscribed successfully
                    </span>
                  </div>
                </div>
              ) : (
                /* Form State */
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">
                    Get the edge.{" "}
                    <span className="text-[var(--neon-green)] glow-green-text">
                      Free.
                    </span>
                  </h2>
                  <p className="text-gray-400 max-w-lg mx-auto mb-2 text-base">
                    Join the free tier and get 2-3 AI-powered picks delivered daily.
                    No credit card required. Unsubscribe anytime.
                  </p>
                  <p className="text-[var(--neon-green)] font-semibold text-sm mb-8">
                    🏈 BONUS: Get Super Bowl LX picks FREE when you sign up before Feb 8
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 bg-[var(--surface)] border border-[var(--card-border)] rounded-lg px-4 py-3.5 text-sm text-white placeholder-gray-500 font-mono"
                    />
                    <button
                      type="submit"
                      className="bg-[var(--neon-green)] text-black font-extrabold text-sm px-6 py-3.5 rounded-lg hover:bg-[var(--neon-green)]/90 transition-all pulse-glow whitespace-nowrap"
                    >
                      Get Free Picks →
                    </button>
                  </form>

                  <p className="text-gray-600 text-xs mt-4">
                    We respect your inbox. No spam, no selling your email. Ever.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
