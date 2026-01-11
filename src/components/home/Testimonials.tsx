"use client";

import { motion } from "framer-motion";
import { Star, Diamond } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content: "The premium car I rented was impeccable. Smooth ride, elegant design, and absolutely reliable. The team made the entire process easy, professional, and stress-free. I'll definitely come back for my next trip.",
    author: "David Mitchell",
    role: "Client",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
  },
  {
    content: "I booked a premium car for a special occasion, and it exceeded all my expectations. The staff was very helpful and made everything simple, while the car itself turned the day into something truly memorable.",
    author: "Sophia Nguyen",
    role: "Client",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
  },
  {
    content: "The selection of high-end cars was impressive, and the booking process was effortless. I felt safe and confident behind the wheel. A perfect choice for anyone wanting to experience true quality on the road.",
    author: "Michael Thompson",
    role: "Client",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-8 backdrop-blur-sm"
          >
            <Diamond className="h-4 w-4 text-white/80" />
            <span className="text-xs font-medium tracking-wide text-white/80 uppercase">
              Chosen by more than 250 clients
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Read Testimonials, <br />
            <span className="text-white/40">Ride with confidence</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] bg-[#09090b] border border-white/[0.05] hover:border-white/10 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex space-x-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-xl leading-relaxed text-white/70 group-hover:text-white transition-colors duration-500 mb-12">
                  "{t.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                  <img 
                    src={t.avatar} 
                    alt={t.author}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{t.author}</p>
                  <p className="text-sm font-medium text-white/40 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
