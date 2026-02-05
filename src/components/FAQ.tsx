"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "How does SharpEdge AI analyze games?",
    a: "Our AI models process thousands of data points per game — injury reports, weather conditions, referee tendencies, historical matchups, line movement patterns, and sharp money flow. We combine machine learning with statistical modeling to identify edges the books might miss.",
  },
  {
    q: "What sports do you cover?",
    a: "We cover NFL and NBA daily during their respective seasons, with additional coverage for major events (Super Bowl, playoffs, March Madness). We're expanding to MLB and more based on subscriber demand.",
  },
  {
    q: "How is this different from other picks services?",
    a: "Most picks services give you a team name and a gut feeling. We give you the data, the model output, confidence scores, and the reasoning behind every pick. You're not just following someone's opinion — you're following the math.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. One click in your account settings, no questions asked. We also offer a 7-day money-back guarantee on all paid plans.",
  },
  {
    q: "How do I receive the newsletter?",
    a: "Via email, every morning before 6 AM ET. Pro and VIP subscribers also get real-time alerts pushed via email or the Discord community.",
  },
  {
    q: "What's your historical win rate?",
    a: "Our overall pick accuracy over the last 30 days is 67%. We publish every pick and grade every result transparently. We're not here to cherry-pick wins — we track everything.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 px-5 md:px-6">
      <div className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <h2
            className="text-[24px] md:text-[36px] lg:text-[42px] font-[700] tracking-[-0.01em] leading-[1.2]"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
                className="border-b border-[var(--border)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex items-center justify-between w-full py-5 text-left group"
                >
                  <span className="text-[17px] font-semibold text-white pr-4 group-hover:text-[var(--accent-green)] transition-colors duration-200">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 text-[var(--text-muted)]">
                    {isOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed pl-0 md:pl-6 pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
