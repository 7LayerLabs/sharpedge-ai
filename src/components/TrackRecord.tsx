"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* Paula: Big stat blocks — JetBrains Mono 800, 56px, neon green.
   Count-up animation from 0 to final value. 1.5s ease-out. */

interface StatProps {
  end: number;
  suffix: string;
  prefix?: string;
  label: string;
  sub: string;
}

function CountUpStat({ end, suffix, prefix = "", label, sub }: StatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-[36px] md:text-[48px] lg:text-[56px] font-bold stat-green leading-none mb-2"
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm font-semibold text-white mb-0.5">{label}</div>
      <div className="text-xs text-[var(--text-muted)]">{sub}</div>
      {/* Green underline bar */}
      <div className="w-12 h-0.5 bg-[var(--accent-green)]/30 rounded mx-auto mt-3" />
    </div>
  );
}

export default function TrackRecord() {
  return (
    <section className="py-24 lg:py-32 px-5 md:px-6">
      <div className="max-w-[1200px] mx-auto">
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
            Transparent Results
          </h2>
          <p className="text-[var(--text-secondary)] text-base max-w-[460px] mx-auto">
            We publish our numbers. Every pick graded. Every result tracked.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-[800px] mx-auto">
          <CountUpStat
            end={67}
            suffix="%"
            label="Win Rate"
            sub="Last 30 days"
          />
          <CountUpStat
            end={23}
            suffix="u"
            prefix="+"
            label="Units Profit"
            sub="This season"
          />
          <CountUpStat
            end={847}
            suffix=""
            label="Picks Graded"
            sub="All time"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-[12px] text-[var(--text-muted)]"
        >
          Past performance does not guarantee future results. Always gamble responsibly.
        </motion.p>
      </div>
    </section>
  );
}
