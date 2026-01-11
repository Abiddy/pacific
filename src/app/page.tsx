import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Testimonials } from "@/components/home/Testimonials";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Featured Stats / Trust Badges */}
      <section className="py-12 border-y border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-white tracking-tighter">25+</p>
              <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Years Experience</p>
            </div>
            <div className="text-center space-y-2 border-l border-white/5">
              <p className="text-5xl font-bold text-white tracking-tighter">5yr</p>
              <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Min. Warranty</p>
            </div>
            <div className="text-center space-y-2 border-l border-white/5">
              <p className="text-5xl font-bold text-white tracking-tighter">100%</p>
              <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Free Estimates</p>
            </div>
            <div className="text-center space-y-2 border-l border-white/5">
              <p className="text-5xl font-bold text-white tracking-tighter">A+</p>
              <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Customer Care</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      
      <Testimonials />

      {/* Final CTA Section - Premium Dark Styling */}
      <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
            Ready to restore your <br />
            <span className="text-white/40">vehicle to perfection?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact Pacific Auto Body today for a free, no-obligation estimate. 
            Our expert team is ready to bring your car back to factory condition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" asChild className="rounded-full bg-white text-black hover:bg-white/90 px-10 h-16 text-lg font-bold transition-transform hover:scale-105 active:scale-95">
              <Link href="/contact">
                Schedule an Estimate
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 px-10 h-16 text-lg font-bold backdrop-blur-sm transition-transform hover:scale-105 active:scale-95" asChild>
              <a href="tel:4242082113">
                Call Us (424) 208-2113
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
