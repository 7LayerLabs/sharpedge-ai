"use client";

import { motion } from "framer-motion";

export default function NewsletterPreview() {
  return (
    <section id="sample" className="py-24 lg:py-32 px-5 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Paula: Left = email mockup, Right = callout text. Stacked on mobile. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Email mockup card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden">
              {/* Email header bar */}
              <div className="bg-[var(--bg-elevated)] px-5 py-3 flex items-center gap-2 border-b border-[var(--border)]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B5C]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-amber)]/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)]/50" />
                </div>
                <span
                  className="text-[11px] text-[var(--text-muted)] ml-2"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  SHARPEDGE AI — Tuesday Feb 4
                </span>
              </div>

              {/* Email body */}
              <div className="p-5 md:p-6 space-y-5">
                {/* Best Bet */}
                <div className="border-l-2 border-[var(--accent-green)] pl-4">
                  <div
                    className="text-[11px] font-bold text-[var(--accent-green)] uppercase tracking-[0.08em] mb-1"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    🔒 BEST BET
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    Seahawks -1.5 vs Patriots
                  </div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="text-[12px] text-[var(--text-secondary)]"
                      style={{ fontFamily: "var(--font-mono), monospace" }}
                    >
                      Confidence:
                    </span>
                    {/* Segmented progress bar */}
                    <div className="flex gap-0.5">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-2 rounded-[2px] ${
                            i < 8
                              ? "bg-[var(--accent-green)]"
                              : "bg-[var(--border)]"
                          }`}
                        />
                      ))}
                    </div>
                    <span
                      className="text-[12px] font-semibold text-[var(--accent-green)]"
                      style={{ fontFamily: "var(--font-mono), monospace" }}
                    >
                      82%
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                    &quot;Sharp money hammering Seattle. 73% of handle on the Seahawks despite only 58% of tickets. Model loves the matchup.&quot;
                  </p>
                </div>

                {/* Prop of the Day */}
                <div className="border-l-2 border-[var(--accent-blue)] pl-4">
                  <div
                    className="text-[11px] font-bold text-[var(--accent-blue)] uppercase tracking-[0.08em] mb-1"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    📊 PROP OF THE DAY
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    DK Metcalf OVER 72.5 Rec Yards
                  </div>
                  <p className="text-[13px] text-[var(--text-secondary)]">
                    Model probability:{" "}
                    <span
                      className="text-[var(--accent-green)] font-semibold"
                      style={{ fontFamily: "var(--font-mono), monospace" }}
                    >
                      71%
                    </span>
                    {" "}— Patriots secondary ranks 27th vs WR1s.
                  </p>
                </div>

                {/* Line Alert */}
                <div className="border-l-2 border-[var(--accent-amber)] pl-4">
                  <div
                    className="text-[11px] font-bold text-[var(--accent-amber)] uppercase tracking-[0.08em] mb-1"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    ⚡ LINE ALERT
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    SEA/NE total moved{" "}
                    <span style={{ fontFamily: "var(--font-mono), monospace" }}>
                      47.5 → 45.5
                    </span>
                  </div>
                  <p className="text-[13px] text-[var(--text-secondary)]">
                    Reverse line movement. 72% of tickets on the over, line dropping. Under looking sharp.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side text — Paula: callout + description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h2
              className="text-[24px] md:text-[36px] font-[700] tracking-[-0.01em] leading-[1.2] mb-5"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Here&apos;s what landed in your inbox this morning.
            </h2>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6">
              Every day before 6 AM ET, SharpEdge AI delivers a full breakdown of
              the day&apos;s slate. Best bets with confidence scores, player prop
              models, and real-time line movement analysis — all powered by our
              proprietary AI models.
            </p>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8">
              This is a sample of the <strong className="text-white">free tier</strong>.
              Pro and VIP subscribers get the full slate — every game, every prop, every edge.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-[var(--accent-green)] font-semibold text-sm hover:underline transition-colors"
            >
              See all plans →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
