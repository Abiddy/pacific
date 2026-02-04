import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pacific Auto Body",
  description: "How we collect, use and disclose personal information of users of our services.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full text-black font-sans bg-white">
      {/* Page Header */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Privacy <span className="text-black/40">Policy</span>
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto font-medium">
            How we protect and respect your privacy. Last Updated: January 2026.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg prose-black max-w-none space-y-12">
            
            {/* Accessibility Link Notice */}
            <div className="p-6 bg-black/5 rounded-2xl border border-black/5 text-sm md:text-base leading-relaxed text-black/60 italic">
              We are committed to digital accessibility. For more information, please review our <Link href="/accessibility" className="underline hover:text-black transition-colors font-bold">Accessibility Statement</Link>.
            </div>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed">
                We are committed to protecting and respecting your privacy. This Privacy Policy (this “Policy”) describes how we collect, use and disclose personal information of users of our services, including our Website (our “Site”). Please read this Privacy Policy carefully.
              </p>
              <p className="text-xl leading-relaxed">
                By using our Site, you agree to the terms of this Policy. If you do not agree with the terms of this Policy, do not use our Site. Your use of our Site for the limited and exclusive purpose of reviewing this Policy does not constitute your agreement to this Policy unless you make further use of our Site. This Policy may be updated from time to time.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">Information We Collect</h2>
              <p className="text-xl leading-relaxed">
                We and our third-party service providers may collect and process the following types of personal information about you:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-black/70">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Social network profile information</li>
                <li>Information we collect when you use our Site, such as your domain name, Internet protocol (IP) address, mobile device model, Internet service provider, Site access times, websites that referred you to us and web pages within our Site that you visit</li>
                <li>Information you communicate to us through our Site, our social media pages or through other means</li>
              </ul>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">How We Collect Information</h2>
              <p className="text-xl leading-relaxed">
                We and our third-party service providers may collect personal information as follows:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-black/70">
                <li>We may collect information you provide when you use our Site, including when you fill in forms on our Site, subscribe to any of our services, complete a survey on our Site, post material to our Site or download content from our Site.</li>
                <li>We may collect information you provide when you contact us by phone, email, text message or messaging application on social media.</li>
                <li>We may collect social network profile information that you have made publicly available through your social network account settings if you choose to access our social media pages or connect or otherwise link to our Site with your own social media page. We also may collect customers’ and public feedback on social media.</li>
                <li>We may collect information such as your name and phone number if we are engaging in SMS text messaging marketing and you opt in to our text messaging campaign.</li>
                <li>Our Site may use tracking pixels and other similar technologies to collect information about visitors to our Site. A tracking pixel is a graphic that is loaded when a user visits a website or opens an email and is used to track certain user activities.</li>
              </ul>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">How We Use The Information Collected</h2>
              <p className="text-xl leading-relaxed">
                We and our third-party service providers may use information collected to:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-black/70">
                <li>Operate, maintain and improve our Site.</li>
                <li>Conduct analytics to help us better understand our customers and improve our products and services.</li>
                <li>Process and manage purchases made by you.</li>
                <li>Respond to your customer service inquiries, post your comments related to our products and services on our social network pages and take other actions in response to your questions, comments or Site activity.</li>
                <li>Communicate with you about special offers, services and promotions that may be of interest to you.</li>
                <li>Help us develop, customize, deliver, support and improve our services.</li>
                <li>Allow you to participate in interactive features of our service when you choose to do so.</li>
                <li>Notify you about changes to our service.</li>
                <li>Conduct market research in order to serve targeted advertisements.</li>
              </ul>
              <p className="text-xl leading-relaxed pt-4">
                We and our third-party service providers may use the information collected from tracking pixels and other similar technologies to target advertising to you personally, through online and offline methods including email, display media, video media and direct mail.
              </p>
              <p className="text-xl leading-relaxed">
                When you log in to or visit our Site, your IP address may be combined with other de-identified data (such as a hashed, non-readable email or postal address) and such information may be used by third-party service providers to send ads and materials to you based on your preferences, interests and attributes.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">How We Disclose The Information Collected</h2>
              <p className="text-xl leading-relaxed">
                We and our third-party service providers may share your personal information under the following circumstances:
              </p>
              <ul className="list-disc space-y-3 pl-6 text-black/70">
                <li>We may share your personal information with any member of our group of companies (our subsidiaries and our ultimate parent company and its subsidiaries).</li>
                <li>We may share your personal information with companies that provide services to us, such as credit card processors, website hosts, email vendors and other companies that help us provide our services or our Site.</li>
                <li>We may disclose your personal information in response to legal process, when required to comply with laws, to combat fraudulent or criminal activity, to enforce our agreements, corporate policies and the terms of use of our Site, and to protect the rights, property and safety of our business, our employees, agents, customers or others.</li>
                <li>We may share technical data that we collect about your browsing habits and your device (such as data collected via tracking pixels and similar technologies, as discussed above) with third-party service providers and other advertising companies. This enables them and us to better target ads to you and other consumers.</li>
              </ul>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">SMS Text Messaging</h2>
              <p className="text-xl leading-relaxed">
                If we are engaging in SMS text message marketing, we and our third-party providers may collect your personal information, such as your name and phone number, when you opt in to our SMS text messaging campaign. The information we collect is used to send notifications, alerts, and marketing communications and to comply with 10-Digit Long Code (10DLC) regulations.
              </p>
              <p className="text-xl leading-relaxed">
                We may share your information with third-party providers for purpose of delivering our text messaging services. Our providers will not sell or share your information for marketing purposes. You may opt out of our SMS text messaging by replying “STOP” at any time.
              </p>
            </div>

            <div className="space-y-6 pt-12 border-t border-black/5">
              <h2 className="text-2xl font-bold uppercase tracking-widest text-black/40">How To Contact Us</h2>
              <p className="text-xl leading-relaxed">
                If you have any questions, comments or requests regarding this Policy, please contact us using the contact information shown on our Site.
              </p>
            </div>

            <div className="pt-20 text-center text-black/30 font-bold uppercase tracking-widest text-sm">
              <p>© All rights reserved</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
