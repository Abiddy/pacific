"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const testimonials = [
  {
    content: "I recently had my car repaired at Pacific and I couldn't be happier. Donnie and his team were professional and friendly...",
    author: "KEV NAL",
    location: "GARDENA, CA",
  },
  {
    content: "I like how the owner Donny operates. He is very respectful and empathetic. He will give you a quick quote at a fantastic price...",
    author: "ISAAC MORRISON",
    location: "LOS ANGELES, CA",
  },
  {
    content: "Love this body shop. Professional work with excellent price and great customer service. You can't go wrong here...",
    author: "JACK DA RIPPER",
    location: "GARDENA, CA",
  },
  {
    content: "Amazing experience for a large dent in my car. Paint match was exact. Haven't had this good of service since living in Texas...",
    author: "SCOTT",
    location: "TORRANCE, CA",
  },
  {
    content: "You can't even tell the car was in an accident. I have a 2026 Tesla Model Y and they got the paint 100% perfect...",
    author: "AHMED NGHAZI",
    location: "LOS ANGELES, CA",
  },
  {
    content: "By far one of the best places to go. Honest, fast, efficient and good customer service. Highly recommend!...",
    author: "MOISES RAMIREZ",
    location: "GARDENA, CA",
  },
  {
    content: "Shout out to Pacific! They helped me fix my front bumper at a great price. They color matched it perfectly like nothing happened...",
    author: "AONANI GOMEZ",
    location: "SOUTH BAY, CA",
  },
  {
    content: "Donnie and his crew worked on my bumper damaged 2022 Corvette C8 and did an excellent job! Perfect match of metallic paint...",
    author: "SEKSAN SREPHICHIT",
    location: "GARDENA, CA",
  },
  {
    content: "I brought my car to Pacific Auto Body and it was an experience I'll never forget! The customer service was excellent...",
    author: "LORNA GUZMAN",
    location: "LOS ANGELES, CA",
  },
  {
    content: "If I could put more than 5 stars I would. Went for a back panel repair and they made it better than new...",
    author: "DANIEL ACOSTA",
    location: "GARDENA, CA",
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
              duration: 100, // Even slower for better readability of real reviews
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {marqueeItems.map((t, i) => (
              <div 
                key={i}
                className="inline-flex flex-col items-center px-12 md:px-24 text-center group w-[400px] md:w-[600px] whitespace-normal"
              >
                <p className="text-xl md:text-2xl font-medium text-white/70 group-hover:text-white transition-colors duration-500 mb-8 leading-relaxed italic">
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
