import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SharpEdge AI — AI-Powered Sports Betting Intelligence",
  description:
    "The house always wins. Now you do too. AI-powered daily sports betting analysis, prop models, and line movement tracking. Join 10,000+ bettors getting sharper every day.",
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
