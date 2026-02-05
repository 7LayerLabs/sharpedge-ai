"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#preview", label: "Preview" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Proof" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-lg border-b border-[var(--card-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[var(--neon-green)] rounded-sm flex items-center justify-center font-black text-black text-sm">
              SE
            </div>
            <span className="text-lg font-extrabold tracking-tight">
              Sharp<span className="text-[var(--neon-green)]">Edge</span>
              <span className="text-[var(--neon-blue)] text-sm font-mono ml-1">
                AI
              </span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-[var(--neon-green)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#signup"
              className="bg-[var(--neon-green)] text-black font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[var(--neon-green)]/90 transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
            >
              Get Free Picks →
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--background)]/95 backdrop-blur-lg border-b border-[var(--card-border)]"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-gray-400 hover:text-[var(--neon-green)] transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#signup"
                onClick={() => setMobileOpen(false)}
                className="block bg-[var(--neon-green)] text-black font-bold text-center text-sm px-5 py-3 rounded-md"
              >
                Get Free Picks →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
