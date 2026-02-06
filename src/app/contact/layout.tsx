import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate",
  description: "Contact Pacific Auto Body in Gardena, CA for a free collision repair estimate. Call, text, or use our online form to document your vehicle damage.",
  openGraph: {
    title: "Contact Pacific Auto Body | Free Collision Repair Estimate",
    description: "Get in touch for expert auto body repairs. We offer free estimates and work with all major insurance companies.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
