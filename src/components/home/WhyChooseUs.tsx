"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Languages, Truck, Users, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const features = [
  {
    title: "Free Estimates and Quotes",
    icon: ClipboardCheck,
  },
  {
    title: "We Speak English and Spanish",
    icon: Languages,
  },
  {
    title: "Towing During Business Hours",
    icon: Truck,
  },
  {
    title: "Family-Owned",
    icon: Users,
  },
  {
    title: "25 Years of Experience",
    icon: Award,
  },
  {
    title: "Minimum 5-Year Warranty",
    icon: ShieldCheck,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Content */}
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                Why Choose Pacific Auto Body for <br />
                <span className="text-black/50">Your Auto Body Repair Needs?</span>
              </h2>
              <p className="text-xl text-black/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Trust family-owned Pacific Auto Body for the best auto body service in town. 
                Our minimum 5-year warranty is a testament to our confidence in the quality of our work. 
                We also offer convenient towing services during business hours. We are proud of our 25 years of experience! 
                We invite you to call or visit us today.
              </p>
              <div className="pt-4">
                <Button size="lg" asChild className="rounded-full bg-black text-white hover:bg-black/90 px-12 h-16 text-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg">
                  <Link href="/contact">
                    Visit Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Features Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-black/20 transition-all duration-500">
                    <feature.icon className="h-7 w-7 text-black" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-black/80 leading-snug tracking-tight">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
