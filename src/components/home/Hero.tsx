"use client";

import { motion } from "framer-motion";
import { Diamond, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/p1.jpg')" 
          }}
        />
        {/* Deep Vignette & Darkening Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(0,0,0,0.95)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        
        {/* Animated Radial Highlight */}
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,255,255,0.05)_0%,_transparent_60%)]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-8 backdrop-blur-sm"
          >
            <ShieldCheck className="h-4 w-4 text-white/80" />
            <span className="text-xs font-medium tracking-wide text-white/80 uppercase">
              25+ Years of Expert Craftsmanship
            </span>
          </motion.div>
          
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8"
          >
            Expert Auto Body <br />
            <span className="text-white/50">Restoration & Repair</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-12"
          >
            Precision collision repair and factory-finish painting for high-end vehicles. 
            We restore your peace of mind with a minimum 5-year warranty.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="md" 
              asChild 
              className="rounded-full bg-white text-black hover:bg-white/90 px-7 h-12 text-xs font-bold transition-transform hover:scale-105 active:scale-95"
            >
              <Link href="/contact">
                Request Free Estimate
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="md" 
              className="rounded-full border-white/20 text-white hover:bg-white/10 px-7 h-12 text-xs font-bold backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
              asChild
            >
              <Link href="/services">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
