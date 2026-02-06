"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CarModel } from "./CarModel";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative h-screen overflow-hidden" aria-labelledby="hero-title">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        {/* 3D Car Model - Positioned behind text but integrated */}
        <div className="absolute inset-0 z-30 pointer-events-none" aria-hidden="true">
          <CarModel onLoad={() => setIsLoaded(true)} />
        </div>

        <div className="container relative z-40 mx-auto px-6 flex flex-col items-center h-full pt-28 pb-20">
          {/* Top Quote - Overlaps the car slightly */}
          <div className="w-full text-center mt-4 md:mt-8 lg:mt-12">
            <h1
              id="hero-title"
              className="text-[12vw] md:text-[8vw] lg:text-[5.5vw] font-[800] leading-[0.85] tracking-tighter text-black select-none uppercase relative z-30 mix-blend-multiply"
            >
              RESTORED TO PERFECTION
            </h1>
          </div>
          
          {/* Action Buttons Section - Pushed down further and in front of car */}
          <div className="flex flex-row items-center justify-center gap-3 mt-auto mb-10 sm:mb-20 w-full px-6 sm:px-0">
            <Button 
              size="lg" 
              asChild 
              className="rounded-full bg-black text-white hover:bg-black/90 px-5 sm:px-8 h-9 sm:h-14 text-[10px] sm:text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/20 w-auto sm:min-w-[220px]"
            >
              <Link href="/services" className="flex items-center justify-center">
                <span className="whitespace-nowrap">View Services</span>
                <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full border-black/20 text-black hover:bg-black/5 px-5 sm:px-8 h-9 sm:h-14 text-[10px] sm:text-base font-bold backdrop-blur-md transition-all hover:scale-105 active:scale-95 w-auto sm:min-w-[220px] bg-white/50"
              asChild
            >
              <Link href="/contact" className="flex items-center justify-center">
                <span className="whitespace-nowrap">Contact Garage</span>
                <MessageSquare className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
