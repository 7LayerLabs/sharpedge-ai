"use client";

import { motion } from "framer-motion";

export default function NewsletterPreview() {
  return (
    <section id="preview" className="py-20 lg:py-28 px-4">
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
              Sample Newsletter
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            This is what lands{" "}
            <span className="text-[var(--neon-green)] glow-green-text">
              in your inbox.
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg">
            Real analysis. Real data. Not some dude&apos;s &quot;gut feeling.&quot;
          </p>
        </motion.div>

        {/* Newsletter Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="newsletter-card rounded-2xl overflow-hidden">
            {/* Email header */}
            <div className="bg-[var(--surface)] border-b border-[var(--card-border)] px-6 py-4 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-gray-500 font-mono">
                  From: SharpEdge AI &lt;daily@sharpedge.ai&gt;
                </span>
              </div>
            </div>

            {/* Email subject */}
            <div className="px-6 py-4 border-b border-[var(--card-border)]">
              <div className="text-xs text-gray-500 mb-1">Subject:</div>
              <div className="text-lg font-bold">
                🏈 Super Bowl LX: 3 Props Our Model Loves + Line Report
              </div>
            </div>

            {/* Email body */}
            <div className="px-6 py-6 space-y-6">
              {/* Greeting */}
              <div className="text-sm text-gray-300 leading-relaxed">
                <p className="mb-3">Good morning, sharp.</p>
                <p>
                  Super Bowl LX is <strong className="text-white">Sunday</strong>. Seahawks (-1.5) vs Patriots. Here&apos;s what our AI model flagged overnight after processing 847 data points.
                </p>
              </div>

              {/* Top Pick */}
              <div className="bg-[var(--surface)] rounded-lg p-4 border-l-4 border-[var(--neon-green)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--neon-green)] font-extrabold text-sm uppercase tracking-wider">
                    🎯 Top Prop Pick
                  </span>
                  <span className="bg-[var(--neon-green)]/10 text-[var(--neon-green)] text-xs font-bold px-2 py-0.5 rounded">
                    HIGH CONFIDENCE
                  </span>
                </div>
                <div className="text-base font-bold mb-1">
                  DK Metcalf OVER 72.5 Receiving Yards (-110)
                </div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  Model projects 89.3 yards. Patriots secondary ranks 27th in yards allowed to WR1s in the red zone. Metcalf has cleared this number in 11 of his last 14 games when targeted 7+ times. Volume floor is locked in.
                </div>
              </div>

              {/* Line Movement Alert */}
              <div className="bg-[var(--surface)] rounded-lg p-4 border-l-4 border-[var(--neon-blue)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[var(--neon-blue)] font-extrabold text-sm uppercase tracking-wider">
                    📈 Sharp Money Alert
                  </span>
                  <span className="bg-[var(--neon-blue)]/10 text-[var(--neon-blue)] text-xs font-bold px-2 py-0.5 rounded">
                    LINE MOVEMENT
                  </span>
                </div>
                <div className="text-base font-bold mb-1">
                  Total moved from 47.5 → 45.5 across major books
                </div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  Sharp money hammering the under. 72% of tickets on the over, but the line dropped 2 points. Classic reverse line movement. Our model has the total at 44.8.
                </div>
              </div>

              {/* Quick Hits */}
              <div className="bg-[var(--surface)] rounded-lg p-4">
                <div className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                  ⚡ Quick Model Picks
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between py-1 border-b border-[var(--card-border)]">
                    <span className="text-gray-300">Patriots +1.5</span>
                    <span className="text-[var(--neon-green)] font-mono font-bold">
                      ★★★☆☆
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[var(--card-border)]">
                    <span className="text-gray-300">
                      Jalen Hurts UNDER 0.5 (he&apos;s not playing — don&apos;t bet this)
                    </span>
                    <span className="text-gray-500 font-mono text-xs">
                      😤 joke
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-gray-300">
                      First Score: Field Goal (+220)
                    </span>
                    <span className="text-[var(--neon-blue)] font-mono font-bold">
                      ★★★★☆
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-xs text-gray-500 pt-2 border-t border-[var(--card-border)]">
                <p>
                  <strong className="text-gray-400">Disclaimer:</strong> This is analysis, not financial advice. Bet responsibly. 21+ only. If gambling isn&apos;t legal in your state, this is just a really entertaining math newsletter.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom callout */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-3">
              This is the <strong className="text-white">free tier</strong>. Pro and VIP members get the full slate.
            </p>
            <a
              href="#pricing"
              className="text-[var(--neon-green)] font-semibold text-sm hover:underline"
            >
              See all plans →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
