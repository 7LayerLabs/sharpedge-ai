"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Features from "@/components/Features";
import NewsletterPreview from "@/components/NewsletterPreview";
import Pricing from "@/components/Pricing";
import TrackRecord from "@/components/TrackRecord";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen grid-bg">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <Features />
      <div className="section-divider max-w-[1200px] mx-auto" />
      <NewsletterPreview />
      <div className="section-divider max-w-[1200px] mx-auto" />
      <Pricing />
      <div className="section-divider max-w-[1200px] mx-auto" />
      <TrackRecord />
      <div className="section-divider max-w-[1200px] mx-auto" />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
