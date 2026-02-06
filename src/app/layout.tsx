import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pacificautobody.com"),
  title: {
    default: "Pacific Auto Body | Expert Collision Repair in Gardena, CA",
    template: "%s | Pacific Auto Body"
  },
  description: "Pacific Auto Body offers expert auto body and collision repair services in Gardena, CA. Family-owned with over 25 years of experience and a minimum 5-year warranty.",
  keywords: ["auto body repair", "collision repair", "Gardena CA", "car paint", "frame straightening", "scratch repair", "bumper repair", "dent removal"],
  authors: [{ name: "Pacific Auto Body" }],
  creator: "Pacific Auto Body",
  publisher: "Pacific Auto Body",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pacificautobody.com",
    siteName: "Pacific Auto Body",
    title: "Pacific Auto Body | Expert Collision Repair in Gardena, CA",
    description: "Expert auto body and collision repair in Gardena, CA. 25+ years experience, 5-year warranty, 100% free estimates.",
    images: [
      {
        url: "/a1.jpg",
        width: 1200,
        height: 630,
        alt: "Pacific Auto Body Repair Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pacific Auto Body | Expert Collision Repair in Gardena, CA",
    description: "Expert auto body and collision repair in Gardena, CA. 25+ years experience, 5-year warranty.",
    images: ["/a1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <head>
        <link rel="preload" href="/mercedes.glb" as="fetch" crossOrigin="anonymous" />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
      >
        {/* JSON-LD for Local Business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoBodyShop",
              "name": "Pacific Auto Body",
              "image": "https://pacificautobody.com/a1.jpg",
              "@id": "https://pacificautobody.com",
              "url": "https://pacificautobody.com",
              "telephone": "(424) 208-2113",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "13501 S Western Ave",
                "addressLocality": "Gardena",
                "addressRegion": "CA",
                "postalCode": "90249",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 33.9085,
                "longitude": -118.3089
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.facebook.com/pacificautobody",
                "https://www.instagram.com/pacificautobody"
              ]
            })
          }}
        />
        <SmoothScroll>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          
          <Navbar />
          
          <main id="main-content" className="flex-grow">
          {children}
          </main>
          
          <Footer />
        </SmoothScroll>

        {/* UserWay Accessibility Widget - Load lazily */}
        <Script
          id="userway-accessibility"
          strategy="lazyOnload"
          src="https://cdn.userway.org/widget.js"
          data-account="REPLACE_WITH_YOUR_ID"
          data-position="3" 
        />
      </body>
    </html>
  );
}
