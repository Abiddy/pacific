"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ImageParallaxProps {
  text: string;
}

export const ImageParallax = ({ text }: ImageParallaxProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the 300vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Text fill animation happens in the middle of the sticky period
  const clipPath = useTransform(
    scrollYProgress, 
    [0.3, 0.7], 
    ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']
  );

  // Parallax transforms for scattered images flying up
  // Tighter ranges for better control on mobile
  const y1 = useTransform(scrollYProgress, [0, 0.7], ["70vh", "-100vh"]);
  const y2 = useTransform(scrollYProgress, [0.1, 0.8], ["90vh", "-130vh"]);
  const y3 = useTransform(scrollYProgress, [0, 0.6], ["50vh", "-80vh"]);
  const y4 = useTransform(scrollYProgress, [0.2, 0.9], ["110vh", "-140vh"]);
  const y5 = useTransform(scrollYProgress, [0.3, 1], ["130vh", "-160vh"]);
  const y6 = useTransform(scrollYProgress, [0.4, 1], ["140vh", "-180vh"]);

  // Badge animation - fades in and floats above text
  const badgeOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const badgeScale = useTransform(scrollYProgress, [0.3, 0.45], [0.8, 1]);

  const images = [
    // Top Left - Portrait
    { src: "/a1.jpg", y: y1, className: "left-[4%] top-0 w-[28vw] sm:w-[20vw] aspect-[3/4] z-10" },
    // Top Right - Large Portrait
    { src: "/a4.jpg", y: y2, className: "right-[2%] top-0 w-[32vw] sm:w-[25vw] aspect-[4/5] z-10" },
    // Middle Center - Small Square
    { src: "/a5.jpg", y: y3, className: "left-[35%] top-0 w-[24vw] sm:w-[18vw] aspect-square z-20" },
    // Lower Right - Landscape
    { src: "/a2.jpg", y: y4, className: "right-[5%] top-0 w-[35vw] sm:w-[28vw] aspect-[3/2] z-10" },
    // Lower Left - Wide Landscape
    { src: "/a3.jpg", y: y5, className: "left-[2%] top-0 w-[30vw] sm:w-[24vw] aspect-[4/3] z-10" },
    // Bottom Right - Small Portrait
    { src: "/a6.jpg", y: y6, className: "right-[8%] top-0 w-[26vw] sm:w-[16vw] aspect-[2/3] z-20" },
  ];

  return (
    <div 
      ref={containerRef} 
      className="h-[300vh] relative bg-white z-20"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Center Text Layer */}
        <div className="max-w-5xl relative z-10 px-8 md:px-24 w-full flex flex-col items-center">
          {/* Gold Class Badge */}
          <motion.div 
            style={{ opacity: badgeOpacity, scale: badgeScale }}
            className="mb-8 md:mb-12 relative w-24 h-24 md:w-32 md:h-32"
          >
            <Image
              src="/image.png"
              alt="I-CAR Gold Class Collision Repair"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Background Text (Lighter) */}
          <div className="relative text-center">
            <h2 className="text-xl sm:text-4xl lg:text-6xl font-black leading-[1] text-black/5 uppercase tracking-tighter select-none">
              {text}
            </h2>
            
            {/* Foreground Text (Filling) */}
            <motion.h2 
              style={{ clipPath }}
              className="absolute inset-0 text-xl sm:text-4xl lg:text-6xl font-black leading-[1] text-black uppercase tracking-tighter select-none"
            >
              {text}
            </motion.h2>
          </div>
        </div>

        {/* Scattered Images Layer - IN FRONT (z-20) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              style={{ y: img.y }}
              className={`absolute top-0 rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl ${img.className}`}
            >
              <div className="relative w-full h-full min-h-[80px] sm:min-h-[250px]">
                <Image
                  src={img.src}
                  alt={`Project detail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 35vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual fades for entry/exit */}
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-48 bg-gradient-to-t from-white to-transparent z-30 pointer-events-none" />
      </div>
    </div>
  );
};
