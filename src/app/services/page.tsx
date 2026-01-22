"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Car, Paintbrush, Ruler, Shield, Hammer, ClipboardCheck, ArrowRight, Truck, Award } from "lucide-react";

const whyChooseUs = [
  {
    title: "Expert Collision Repair",
    description: "We restore your vehicle to its pre-accident condition with precision bodywork and structural restoration.",
    icon: Car
  },
  {
    title: "Professional Bumper Repair",
    description: "We fix minor and major bumper damages efficiently, restoring both safety and appearance.",
    icon: Shield
  },
  {
    title: "Precision Frame Alignment",
    description: "We ensure your vehicle has safe vehicle alignment using advanced laser-guided measurement systems.",
    icon: Ruler
  },
  {
    title: "Scratch and Dent Repair",
    description: "We eliminate unsightly scratches and dents, renewing your car's appearance to showroom quality.",
    icon: Hammer
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full text-black font-sans">
      {/* Page Header */}
      <section className="relative py-32 overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl leading-tight uppercase italic text-black">
              Experience Exceptional <br />
              <span className="text-black/40 font-normal">Auto Body Repair</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/70 max-w-3xl leading-relaxed mb-10 font-medium">
              When your car or truck needs bodywork, turn to Pacific Auto Body of Gardena, CA. 
              We specialize in vehicle collision repairs and more with 25 years of experience. 
              Contact us for a FREE estimate.
            </p>
            <Button size="lg" asChild className="rounded-full bg-black text-white hover:bg-black/90 px-10 h-16 text-lg font-bold shadow-lg">
              <Link href="/contact">Get Your Free Estimate</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-black">
              Why Choose Our <br />
              <span className="text-black/40">Auto Body Repair Services?</span>
            </h2>
            <p className="text-xl text-black/70 leading-relaxed font-medium">
              At Pacific Auto Body, we understand your vehicle is more than just a mode of transport; 
              it's an integral part of your daily life. Here's why our services stand out:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/5">
            {whyChooseUs.map((service, i) => (
              <div key={i} className="group p-12 md:p-16 bg-white hover:bg-slate-50 transition-colors duration-500">
                <div className="w-14 h-14 rounded-2xl bg-black/5 flex items-center justify-center mb-8 border border-black/10 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-black" />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">{service.title}</h3>
                <p className="text-lg text-black/60 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-lg text-black/40 italic font-medium">
               Experience our outstanding services. Contact Pacific Auto Body today.
             </p>
          </div>
        </div>
      </section>

      {/* The Pacific Auto Body Difference */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
                  Experience the <br />
                  <span className="text-black/40">Pacific Auto Body Difference</span>
                </h2>
                <p className="text-xl text-black/70 leading-relaxed font-medium">
                  Our commitment to delivering value-added services that caters to your unique needs sets us apart. 
                  Here's what you can expect when you choose us:
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 p-8 rounded-3xl bg-white border border-black/5 group hover:border-black/10 transition-all shadow-sm">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center">
                    <Award className="h-6 w-6 text-black" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-black/80">Minimum 5-Year Warranty</h4>
                    <p className="text-black/60 leading-relaxed font-medium">We stand by our work, offering a minimum 5-year warranty on all our services.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-8 rounded-3xl bg-white border border-black/5 group hover:border-black/10 transition-all shadow-sm">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-black" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold uppercase tracking-widest text-black/80">Towing Available</h4>
                    <p className="text-black/60 leading-relaxed font-medium">We understand that breakdowns can happen. That's why we offer towing services during business hours.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-black/40 font-bold tracking-wide uppercase italic">Reach out to Pacific Auto Body today.</p>
            </div>
            
            <div className="flex-1 w-full aspect-square rounded-[3rem] bg-white border border-black/5 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-black/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.01] to-transparent" />
                <span className="text-black/5 font-black text-9xl uppercase tracking-tighter opacity-10 select-none -rotate-12">Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 border-t border-black/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
              Get in Touch with <br />
              <span className="text-black/40">Pacific Auto Body</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/70 leading-relaxed mx-auto font-medium">
              Dents and scratches will bring down the value of your car. Contact Pacific Auto Body 
              for impressive bodywork. Remember, your vehicle deserves the best, and that's what we offer. 
              We look forward to hearing from you soon.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Button size="lg" asChild className="rounded-full bg-black text-white hover:bg-black/90 px-12 h-16 text-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg">
                <Link href="/contact">Request Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-black/20 text-black hover:bg-black/5 px-12 h-16 text-lg font-bold backdrop-blur-sm transition-transform hover:scale-105 active:scale-95">
                <a href="tel:4242082113">Call (424) 208-2113</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
