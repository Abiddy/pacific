"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Instagram, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Cars", href: "/services" },
  { name: "Rental Terms", href: "/terms" },
  { name: "News", href: "/about" },
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
          scrolled ? "bg-black/80 backdrop-blur-md border border-white/10 shadow-2xl" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
            <div className="w-4 h-4 bg-white rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase italic">
            Pacific <span className="text-white/40">Auto Body</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-5">
          <div className="flex items-center space-x-4 border-r border-white/10 pr-5 mr-1">
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="WhatsApp">
              <MessageSquare className="h-5 w-5" />
            </a>
            <a href="tel:4242082113" className="text-white/60 hover:text-white transition-colors" aria-label="Call Us">
              <Phone className="h-5 w-5" />
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-full w-10 h-10 bg-white/10 text-white md:hidden"
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
            className="absolute top-24 left-4 right-4 bg-black border border-white/10 rounded-3xl p-6 md:hidden z-50 shadow-2xl"
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-semibold text-white/80 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center h-14 rounded-2xl bg-white text-black font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
                <div className="flex justify-center space-x-8 pt-2">
                  <Instagram className="h-6 w-6 text-white/60" />
                  <MessageSquare className="h-6 w-6 text-white/60" />
                  <Phone className="h-6 w-6 text-white/60" />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
