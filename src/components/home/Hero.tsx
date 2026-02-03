"use client";

import { motion } from "framer-motion";
import { CarModel } from "./CarModel";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden" aria-labelledby="hero-title">
      {/* 3D Car Model - Positioned behind text but integrated */}
      <div className="absolute inset-0 z-30 pointer-events-none" aria-hidden="true">
        <CarModel />
      </div>

      <div className="container relative z-20 mx-auto px-6 flex flex-col items-center h-full pt-28 pb-20">
        {/* Top Quote - Overlaps the car slightly */}
        <div className="w-full text-center mt-4 md:mt-8 lg:mt-12 mb-auto">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12vw] md:text-[8vw] lg:text-[5.5vw] font-[800] leading-[0.85] tracking-tighter text-black select-none uppercase relative z-30 mix-blend-multiply"
          >
            RESTORED TO PERFECTION
          </motion.h1>
        </div>
        
        {/* Bottom Narrative Section */}
        <div className="max-w-3xl text-center mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-medium md:text-xl font-[300] tracking-tight text-black leading-[1.2] uppercase px-4">
              "WE RESTORE YOUR VEHICLE TO FACTORY PERFECTION WITH UNCOMPROMISING CARE."  <span className="font-bold"> - Donnie, Owner</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
