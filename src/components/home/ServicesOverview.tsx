"use client";

import { motion } from "framer-motion";
import { Car, Hammer, Paintbrush, Ruler, ShieldAlert, Truck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Collision Repair",
    description: "Expert restoration for high-end vehicles, ensuring structural integrity and flawless bodywork.",
    icon: Car,
    href: "/services",
  },
  {
    title: "Bumper Repair",
    description: "Professional repair for minor and major bumper damages, restoring safety and factory finish.",
    icon: ShieldAlert,
    href: "/services",
  },
  {
    title: "Frame Alignment",
    description: "Laser-guided structural calibration to return your vehicle to exact manufacturer specifications.",
    icon: Ruler,
    href: "/services",
  },
  {
    title: "Scratch & Dent",
    description: "Meticulous paint correction and dent removal for a showroom-perfect appearance.",
    icon: Hammer,
    href: "/services",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold tracking-tight text-white"
            >
              The Art of <br />
              <span className="text-white/40">Vehicle Restoration</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/services" 
              className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors group"
            >
              <span className="text-lg font-medium">View All Services</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[2.5rem] overflow-hidden">
          {services.map((service, i) => (
            <div 
              key={service.title}
              className="group p-12 md:p-16 bg-black hover:bg-[#09090b] transition-colors duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">{service.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-sm">
                  {service.description}
                </p>
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-sm font-bold text-white uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Explore Service
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              {/* Background Glow */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.05] transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
