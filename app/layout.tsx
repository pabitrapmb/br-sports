import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Ridge Champions Trophy 2026 – Season 3",
  description:
    "Games Event Season 3 at Blue Ridge — Cricket, Football, Badminton, Table Tennis, Chess, Carrom, Cycling, Mini Marathon, Pickleball. Brought to you by Paranjape Schemes.",
  openGraph: {
    title: "Blue Ridge Champions Trophy 2026",
    description: "Games Event Season 3 – Bigger, Better, More Energetic than ever!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0d0d1a] text-white overflow-x-hidden">
        {children}
        <Analytics />   {/* ← add this */}
      </body>
    </html>
  );
}
