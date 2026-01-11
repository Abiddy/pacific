import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Pacific Auto Body | Expert Collision Repair in Gardena, CA",
  description: "Pacific Auto Body offers expert auto body and collision repair services in Gardena, CA. Family-owned with over 25 years of experience and a minimum 5-year warranty.",
  keywords: ["auto body repair", "collision repair", "Gardena CA", "car paint", "frame straightening", "scratch repair"],
  authors: [{ name: "Pacific Auto Body" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Navbar />
        
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        <Footer />

        {/* UserWay Accessibility Widget */}
        <Script
          id="userway-accessibility"
          strategy="afterInteractive"
          src="https://cdn.userway.org/widget.js"
          data-account="REPLACE_WITH_YOUR_ID"
        />
      </body>
    </html>
  );
}
