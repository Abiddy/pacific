import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Pacific Auto Body",
  description: "Our commitment to ensuring digital accessibility for people with disabilities.",
};

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col w-full text-black font-sans bg-white">
      {/* Page Header */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Accessibility <span className="text-black/40">Statement</span>
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-medium">
            Our commitment to ensuring digital accessibility for everyone.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg prose-black max-w-none space-y-12">
            
            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
              </p>
              <p className="text-xl leading-relaxed">
                Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, which define requirements for designers and developers to improve accessibility for people with disabilities.
              </p>
              <p className="text-xl leading-relaxed">
                Accessibility is an ongoing effort, and we regularly review our website to identify and fix potential accessibility barriers.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">Contact Us</h2>
              <p className="text-xl leading-relaxed">
                If you experience any difficulty accessing content on this website or have suggestions for improvement, please contact us:
              </p>
              <ul className="list-none space-y-4 text-xl">
                <li className="flex items-center gap-4">
                  <span className="font-bold text-black/40 w-24">Email:</span>
                  <a href="mailto:support@yourdomain.com" className="hover:text-black/60 transition-colors underline underline-offset-4">support@yourdomain.com</a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="font-bold text-black/40 w-24">Subject:</span>
                  <span className="italic text-black/60">Accessibility Assistance</span>
                </li>
              </ul>
              <p className="text-xl leading-relaxed">
                We aim to respond to accessibility feedback promptly and make reasonable efforts to address issues.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">Compliance Status</h2>
              <p className="text-xl leading-relaxed">
                While we strive to ensure full accessibility, some content or features may not yet fully conform to WCAG 2.1 AA standards. We are actively working to improve accessibility across our website.
              </p>
            </div>

            <div className="pt-20 text-center text-black/30 font-bold uppercase tracking-widest text-sm">
              <p>Last Updated: January 28, 2026</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
