"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#sample", label: "Sample" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/85 backdrop-blur-[12px] border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo — Paula: SHARPEDGE all caps Inter Tight 800, AI in green pill */}
          <a href="#" className="flex items-center gap-1.5">
            <span
              className="text-[20px] font-[800] tracking-tight text-white"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              SHARPEDGE
            </span>
            <span className="bg-[var(--accent-green)] text-[#0A0A0F] text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              AI
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-[var(--text-secondary)] hover:text-white transition-colors duration-200 group"
              >
                {link.label}
                {/* Animated underline — slides in from left on hover */}
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-[var(--accent-green)] group-hover:w-full transition-all duration-200" />
              </a>
            ))}
            <a
              href="#hero-signup"
              className="bg-[var(--accent-green)] text-[#0A0A0F] font-bold text-sm px-6 py-2.5 rounded-lg hover:scale-[1.02] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,255,135,0.3)]"
            >
              Sign Up Free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay — full screen, per Paula's spec */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[72px] bg-[var(--bg-deep)]/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-[var(--text-secondary)] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#hero-signup"
              onClick={() => setMobileOpen(false)}
              className="bg-[var(--accent-green)] text-[#0A0A0F] font-bold text-lg px-10 py-4 rounded-lg"
            >
              Sign Up Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
