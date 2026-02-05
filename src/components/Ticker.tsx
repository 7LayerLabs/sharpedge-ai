"use client";

export default function Ticker() {
  const items = [
    "🏈 SUPER BOWL LX — FEB 8 — SEAHAWKS vs PATRIOTS",
    "📊 AI MODEL: 67% HIT RATE ON PLAYER PROPS",
    "🔥 $121B+ WAGERED LEGALLY IN 2025",
    "⚡ LAUNCH SPECIAL: FREE SUPER BOWL PICKS",
    "🏀 NBA DAILY SLATES DROPPING 6AM ET",
    "📈 LINE MOVEMENT ALERTS IN REAL TIME",
    "🏈 SUPER BOWL LX — FEB 8 — SEAHAWKS vs PATRIOTS",
    "📊 AI MODEL: 67% HIT RATE ON PLAYER PROPS",
    "🔥 $121B+ WAGERED LEGALLY IN 2025",
    "⚡ LAUNCH SPECIAL: FREE SUPER BOWL PICKS",
    "🏀 NBA DAILY SLATES DROPPING 6AM ET",
    "📈 LINE MOVEMENT ALERTS IN REAL TIME",
  ];

  return (
    <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-[var(--card-bg)] border-b border-[var(--card-border)] overflow-hidden">
      <div className="ticker-animate flex whitespace-nowrap py-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-block mx-8 text-xs font-mono font-semibold text-[var(--neon-green)]/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
