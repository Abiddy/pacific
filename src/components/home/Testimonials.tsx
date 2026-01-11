"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const testimonials = [
  {
    content: "Perfect paint match on my Tesla, looks factory new!",
    author: "MARIA RODRIGUEZ",
    location: "LOS ANGELES",
  },
  {
    content: "Best auto body shop I've ever used. Fast and honest.",
    author: "JAMES CHEN",
    location: "GARDENA",
  },
  {
    content: "Expert craftsmanship and incredible attention to detail.",
    author: "ROBERT TAYLOR",
    location: "TORRANCE",
  },
  {
    content: "They handled my insurance claim perfectly. Zero stress.",
    author: "SARAH M.",
    location: "REDONDO BEACH",
  },
  {
    content: "Restored my vintage Porsche to showroom condition.",
    author: "DAVID M.",
    location: "SANTA MONICA",
  },
  {
    content: "Unbelievable quality and turnaround time. Highly recommend.",
    author: "SOPHIE N.",
    location: "CULVER CITY",
  },
];

export function Testimonials() {
  // Triple the items to ensure a seamless infinite scroll
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="reviews" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6"
        >
          Client Stories      
        </motion.h2>
      </div>

      {/* Marquee Container with Fade Effect */}
      <div className="relative w-full">
        {/* Left & Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap py-12"
            animate={{
              x: ["0%", "-33.333%"],
            }}
            transition={{
              duration: 80, // Much slower
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {marqueeItems.map((t, i) => (
                <div 
                  key={i}
                  className="inline-flex flex-col items-center px-8 md:px-24 text-center group w-[300px] md:w-[600px] whitespace-normal"
                >
                <p className="text-xl md:text-3xl font-medium text-white/70 group-hover:text-white transition-colors duration-500 mb-8 leading-tight">
                  "{t.content}"
                </p>
                <div className="flex items-center justify-center space-x-3 text-[10px] md:text-[11px] font-bold tracking-[0.4em] text-white/30 uppercase shrink-0">
                  <span>{t.author}</span>
                  <span className="w-1 h-1 bg-white/10 rounded-full" />
                  <span>{t.location}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
