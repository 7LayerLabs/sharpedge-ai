"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-deep)]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span
                className="text-[16px] font-[800] tracking-tight text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                SHARPEDGE
              </span>
              <span className="bg-[var(--accent-green)] text-[#0A0A0F] text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                AI
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4 text-sm text-[var(--text-muted)]">
              <span>•</span>
              <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[var(--text-muted)] hover:text-white transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-[var(--text-muted)] hover:text-white transition-colors text-sm"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Mobile links */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-4 text-sm text-[var(--text-muted)]">
          <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
            Contact
          </a>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-[var(--text-muted)]">
              © 2026 SharpEdge AI. All rights reserved.
            </p>
            <p className="text-[12px] text-[var(--text-muted)] text-center md:text-right max-w-lg">
              ⚠️ For entertainment purposes only. Not financial advice. 21+ to
              wager. Please gamble responsibly.{" "}
              <a
                href="https://www.ncpgambling.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-secondary)] transition-colors underline"
              >
                1-800-522-4700
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
