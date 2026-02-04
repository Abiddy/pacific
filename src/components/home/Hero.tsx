"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CarModel } from "./CarModel";

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

        <div className="container relative z-20 mx-auto px-6 flex flex-col items-center h-full pt-28 pb-20">
          {/* Top Quote - Overlaps the car slightly */}
          <div className="w-full text-center mt-4 md:mt-8 lg:mt-12 mb-auto">
            <h1
              id="hero-title"
              className="text-[12vw] md:text-[8vw] lg:text-[5.5vw] font-[800] leading-[0.85] tracking-tighter text-black select-none uppercase relative z-30 mix-blend-multiply"
            >
              RESTORED TO PERFECTION
            </h1>
          </div>
          
          {/* Bottom Narrative Section */}
          <div className="max-w-3xl text-center mt-auto">
            <h2 className="text-medium md:text-xl font-[300] tracking-tight text-black leading-[1.2] uppercase px-4">
              "WE RESTORE YOUR VEHICLE TO FACTORY PERFECTION WITH UNCOMPROMISING CARE."  <span className="font-bold"> - Donnie, Owner</span>
            </h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
