"use client";

import { motion } from "framer-motion";
import { CarModel } from "./CarModel";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#d1d5db]">
      {/* Background Studio Lighting */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,255,255,1)_0%,_rgba(180,188,201,1)_100%)]" />

      {/* 3D Car Canvas - Absolute Background/Foreground Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <CarModel />
      </div>

      <div className="container relative z-20 mx-auto px-6 flex flex-col items-center justify-between h-full pt-32 pb-20">
        {/* Top Quote */}
        <div className="w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[8vw] md:text-[6vw] lg:text-[5.5vw] font-[900] leading-[0.9] tracking-tighter text-white select-none uppercase"
          >
            RESTORED TO
            PERFECTION
          </motion.h1>
        </div>
        
        {/* Bottom Narrative Section */}
        <div className="max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-medium md:text-xl font-[300] tracking-tight text-black leading-[1.2] uppercase px-4">
              "WE RESTORE YOUR VEHICLE TO FACTORY PERFECTION WITH UNCOMPROMISING CARE—SEAMLESSLY INTEGRATING QUALITY CRAFTSMANSHIP FOR A MODERN DRIVING EXPERIENCE." <span className="font-bold">- Donnie, Owner</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
