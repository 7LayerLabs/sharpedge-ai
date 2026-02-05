"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SuperBowlBanner from "@/components/SuperBowlBanner";
import Features from "@/components/Features";
import NewsletterPreview from "@/components/NewsletterPreview";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] grid-bg">
      <Navbar />
      <Ticker />
      <Hero />
      <SuperBowlBanner />
      <div className="section-divider max-w-6xl mx-auto" />
      <Features />
      <div className="section-divider max-w-6xl mx-auto" />
      <NewsletterPreview />
      <div className="section-divider max-w-6xl mx-auto" />
      <Pricing />
      <div className="section-divider max-w-6xl mx-auto" />
      <Testimonials />
      <div className="section-divider max-w-6xl mx-auto" />
      <EmailCapture />
      <Footer />
    </main>
  );
}
