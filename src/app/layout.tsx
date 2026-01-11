import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Navbar />
        
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
