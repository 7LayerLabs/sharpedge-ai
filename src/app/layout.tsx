import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Paula's spec: Inter for body/subheads, Inter Tight for display/headlines.
   next/font doesn't have Inter Tight separately — using Inter with wght range,
   and loading Inter Tight via Google Fonts link for display usage. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SharpEdge AI — AI-Powered Sports Betting Intelligence",
  description:
    "The house always wins. Now you do too. AI-powered daily sports betting analysis, prop models, and line movement tracking delivered to your inbox.",
  keywords: [
    "sports betting",
    "AI picks",
    "betting newsletter",
    "NFL picks",
    "NBA picks",
    "prop bets",
    "line movement",
    "Super Bowl",
    "betting analysis",
  ],
  openGraph: {
    title: "SharpEdge AI — The House Always Wins. Now You Do Too.",
    description:
      "AI-powered sports betting intelligence delivered daily. Prop models, line movement alerts, and data-driven analysis.",
    type: "website",
    url: "https://sharpedge-ai.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "SharpEdge AI — AI-Powered Betting Intelligence",
    description:
      "The house always wins. Now you do too. Get AI-powered sports betting analysis daily.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Inter Tight for display/headline use — Paula's spec */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
