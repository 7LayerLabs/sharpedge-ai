"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I was skeptical about another 'picks' service. But SharpEdge actually shows you WHY a bet has value. The prop models are insane.",
    name: "Marcus T.",
    role: "Pro subscriber since launch",
    accent: "green" as const,
  },
  {
    quote:
      "The line movement alerts alone pay for the subscription. Caught a reverse line move on Monday Night Football and hit a 3-leg parlay.",
    name: "Jake R.",
    role: "VIP subscriber",
    accent: "blue" as const,
  },
  {
    quote:
      "Finally, a newsletter that doesn't just say 'take the over.' The data breakdowns make me feel like I actually know what I'm doing.",
    name: "Sarah K.",
    role: "Free tier → Pro convert",
    accent: "green" as const,
  },
  {
    quote:
      "I've tried 4 different pick services. SharpEdge is the only one that explains the math. My bankroll is up 23% since subscribing.",
    name: "Devon W.",
    role: "Pro subscriber, 3 months",
    accent: "blue" as const,
  },
  {
    quote:
      "The Super Bowl preview was next level. Called the DK Metcalf over AND the first score field goal. I'm a believer.",
    name: "Chris M.",
    role: "Free tier subscriber",
    accent: "green" as const,
  },
  {
    quote:
      "This is like having a Bloomberg terminal for sports betting. The amount of data they pack into one email is ridiculous.",
    name: "Alex P.",
    role: "VIP subscriber",
    accent: "blue" as const,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 px-4">
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
              Social Proof
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Don&apos;t take our word for it.
            <br />
            <span className="text-[var(--neon-blue)] glow-blue-text">
              Take theirs.
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--neon-${t.accent})]/20 transition-all duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <span
                    key={si}
                    className={`text-sm ${
                      t.accent === "green"
                        ? "text-[var(--neon-green)]"
                        : "text-[var(--neon-blue)]"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-black ${
                    t.accent === "green"
                      ? "bg-[var(--neon-green)]"
                      : "bg-[var(--neon-blue)]"
                  }`}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-gray-600 text-xs">
            * Testimonials represent individual experiences. Past results don&apos;t guarantee future performance. Always bet responsibly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
