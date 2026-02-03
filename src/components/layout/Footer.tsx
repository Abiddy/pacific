import Link from "next/link";
import { Phone, MapPin, Clock, Mail, ArrowRight, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-black pt-32 pb-12 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-12">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold tracking-tight text-black uppercase italic">
                Pacific <span className="text-black/40">Auto Body</span>
              </span>
            </Link>
            <p className="text-2xl md:text-3xl text-black/60 leading-tight max-w-md font-medium">
              Elite vehicle restoration and collision repair for the most discerning drivers in Los Angeles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-sm font-bold tracking-widest text-black/40 uppercase">Navigation</h3>
            <ul className="space-y-4 text-lg font-medium">
              <li><Link href="/" className="text-black/60 hover:text-black transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-black/60 hover:text-black transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-black/60 hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-black/60 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-sm font-bold tracking-widest text-black/40 uppercase">Business Hours</h3>
            <ul className="space-y-4 text-black/60">
              <li className="flex flex-col">
                <span className="text-black font-medium">Mon - Fri</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex flex-col pt-2">
                <span className="text-black font-medium">Saturday</span>
                <span>8:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-12">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-black/10 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Need an Estimate?</h3>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-between w-full p-4 bg-black text-white rounded-2xl font-bold group"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <ul className="space-y-6 text-black/60">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-black shrink-0 mt-1" />
                <span>17014 S. Western Ave, Gardena, CA</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-black shrink-0" />
                <a href="tel:4242082113" className="hover:text-black transition-colors">(424) 208-2113</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium tracking-wide">
          <a 
            href="https://work.devly.info/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-1.5 text-black/70 uppercase hover:text-black transition-colors group"
          >
             <span>Powered by Devly Studios</span>
             <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-black/40 uppercase">© {currentYear} Pacific Auto Body. All rights reserved.</p>
          <div className="flex gap-8 text-black/40 uppercase">
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-black transition-colors">Terms</Link>
            <Link href="/accessibility" className="hover:text-black transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
