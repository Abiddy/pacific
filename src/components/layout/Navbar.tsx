"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Instagram, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 px-4 py-4 md:px-8",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div 
        className={cn(
          "container mx-auto flex h-14 items-center justify-between px-6 rounded-full transition-all duration-300",
          scrolled ? "bg-white/80 backdrop-blur-md border border-black/10 shadow-lg" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-xl font-bold tracking-tight text-black uppercase italic">
            Pacific <span className="text-black/40">Auto Body</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-black/70 transition-colors hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-5">
          <div className="flex items-center space-x-4 border-r border-black/10 pr-5 mr-1">
            <a href="#" className="text-black/60 hover:text-black transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-black/60 hover:text-black transition-colors" aria-label="WhatsApp">
              <MessageSquare className="h-5 w-5" />
            </a>
            <a href="tel:4242082113" className="text-black/60 hover:text-black transition-colors" aria-label="Call Us">
              <Phone className="h-5 w-5" />
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-black px-6 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
          >
            Get Estimate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-black/5 text-black md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white border border-black/10 rounded-3xl p-6 md:hidden z-50 shadow-2xl"
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-semibold text-black/80 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-black/10 flex flex-col space-y-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center h-14 rounded-2xl bg-black text-white font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Estimate
                </Link>
                <div className="flex justify-center space-x-8 pt-2">
                  <Instagram className="h-6 w-6 text-black/60" />
                  <MessageSquare className="h-6 w-6 text-black/60" />
                  <Phone className="h-6 w-6 text-black/60" />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
