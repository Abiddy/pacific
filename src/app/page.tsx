import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Featured Stats / Trust Badges */}
      <section className="py-12 border-y border-black/5 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold text-black tracking-tighter">25+</p>
              <p className="text-xs font-bold text-black/40 uppercase tracking-[0.2em]">Years Experience</p>
            </div>
            <div className="text-center space-y-2 border-l border-black/5">
              <p className="text-5xl font-bold text-black tracking-tighter">5yr</p>
              <p className="text-xs font-bold text-black/40 uppercase tracking-[0.2em]">Min. Warranty</p>
            </div>
            <div className="text-center space-y-2 border-l border-black/5">
              <p className="text-5xl font-bold text-black tracking-tighter">100%</p>
              <p className="text-xs font-bold text-black/40 uppercase tracking-[0.2em]">Free Estimates</p>
            </div>
            <div className="text-center space-y-2 border-l border-black/5">
              <p className="text-5xl font-bold text-black tracking-tighter">A+</p>
              <p className="text-xs font-bold text-black/40 uppercase tracking-[0.2em]">Customer Care</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <ServicesOverview />

      <WhyChooseUs />
      
      {/* Final CTA Section - Premium Light Styling */}
      <section className="py-32 bg-white border-t border-black/5 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-black">
            Ready to restore your <br />
            <span className="text-black/40">vehicle to perfection?</span>
          </h2>
          <p className="text-xl text-black/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Contact Pacific Auto Body today for a free, no-obligation estimate. 
            Our expert team is ready to bring your car back to factory condition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" asChild className="rounded-full bg-black text-white hover:bg-black/90 px-10 h-16 text-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
              <Link href="/contact">
                Schedule an Estimate
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-black/20 text-black hover:bg-black/5 px-10 h-16 text-lg font-bold backdrop-blur-sm transition-transform hover:scale-105 active:scale-95" asChild>
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
