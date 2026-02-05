"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--card-bg)]">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--neon-green)] rounded-sm flex items-center justify-center font-black text-black text-sm">
                SE
              </div>
              <span className="text-lg font-extrabold tracking-tight">
                Sharp<span className="text-[var(--neon-green)]">Edge</span>
                <span className="text-[var(--neon-blue)] text-sm font-mono ml-1">
                  AI
                </span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-4">
              AI-powered sports betting intelligence delivered daily. Data-driven
              analysis, prop models, and line movement tracking for smarter
              bettors.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-[var(--neon-green)] transition-colors text-sm"
              >
                𝕏 Twitter
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[var(--neon-blue)] transition-colors text-sm"
              >
                Discord
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[var(--neon-green)] transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Newsletter Preview", href: "#preview" },
                { label: "Free Picks", href: "#signup" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                "Terms of Service",
                "Privacy Policy",
                "Responsible Gambling",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--card-border)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              © 2026 SharpEdge AI. All rights reserved. Built by{" "}
              <a
                href="https://github.com/Milobuilds45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[var(--neon-green)] transition-colors"
              >
                Milobuilds45
              </a>
            </p>
            <p className="text-xs text-gray-600 text-center md:text-right max-w-md">
              ⚠️ SharpEdge AI provides analysis for entertainment and
              informational purposes only. Not financial advice. Must be 21+ to
              place bets. Please gamble responsibly.{" "}
              <a
                href="https://www.ncpgambling.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-300"
              >
                National Council on Problem Gambling: 1-800-522-4700
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
