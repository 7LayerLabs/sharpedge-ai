"use client";

export default function SocialProofBar() {
  const items = [
    { icon: "⭐", text: "4.9 rating" },
    { icon: "", text: "2,847", sub: "subscribers" },
    { icon: "", text: "67%", sub: "win rate last 30 days" },
    { icon: "💬", text: "", sub: '"Best picks newsletter I\'ve found"' },
    { icon: "⭐", text: "4.9 rating" },
    { icon: "", text: "2,847", sub: "subscribers" },
    { icon: "", text: "67%", sub: "win rate last 30 days" },
    { icon: "💬", text: "", sub: '"Best picks newsletter I\'ve found"' },
  ];

  return (
    <div className="bg-[#0D0D14] border-y border-[var(--border)] overflow-hidden">
      <div className="ticker-animate flex items-center whitespace-nowrap h-[80px]">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 mx-10">
            {item.icon && <span className="text-sm">{item.icon}</span>}
            {item.text && (
              <span
                className="text-sm font-medium text-[var(--accent-green)]"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                {item.text}
              </span>
            )}
            {item.sub && (
              <span className="text-sm text-[var(--text-secondary)]">
                {item.sub}
              </span>
            )}
            <span className="text-[var(--text-muted)] mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
