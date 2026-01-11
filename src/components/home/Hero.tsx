"use client";

import { motion } from "framer-motion";
import { Diamond, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80')" 
          }}
        />
        {/* Animated Radial Highlight */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(59,130,246,0.15)_0%,_transparent_60%)]"
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
            <Diamond className="h-4 w-4 text-white/80" />
            <span className="text-xs font-medium tracking-wide text-white/80 uppercase">
              Chosen by more than 250 clients
            </span>
          </motion.div>
          
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-8"
          >
            Premium Car Rental <br />
            <span className="text-white/40">in Los Angeles</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-12"
          >
            Experience unmatched comfort, style, and service — wherever the road takes you.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-5"
          >
            <Button 
              size="lg" 
              asChild 
              className="rounded-full bg-white text-black hover:bg-white/90 px-8 h-14 text-lg font-bold transition-transform hover:scale-105 active:scale-95"
            >
              <Link href="/services">
                Choose Your Car
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full border-white/20 text-white hover:bg-white/10 px-8 h-14 text-lg font-bold backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
              asChild
            >
              <Link href="/about">
                Our Approach
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Info Box (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="bg-white rounded-[2rem] p-8 w-64 shadow-2xl">
          <p className="text-black/60 text-sm font-medium mb-4">Want this template?</p>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-5 py-3 bg-black text-white rounded-xl text-sm font-bold group">
              Buy Template
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="w-full text-center py-3 text-black text-sm font-bold hover:bg-black/5 rounded-xl transition-colors">
              Our Approach
            </button>
          </div>
          <div className="mt-6 pt-6 border-t border-black/5 flex items-center justify-center space-x-2">
             <div className="w-4 h-4 bg-black rotate-45" />
             <span className="text-xs font-bold text-black uppercase tracking-tighter">Made in Framer</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
