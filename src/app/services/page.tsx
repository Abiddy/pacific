import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, Car, Paintbrush, Ruler, Shield, Hammer, ClipboardCheck, ArrowRight, Truck, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collision Repair Services",
  description: "Comprehensive auto body repair services in Gardena, CA. Expert collision repair, bumper repair, frame alignment, and color-matched painting with a 5-year warranty.",
  openGraph: {
    title: "Collision Repair Services | Pacific Auto Body",
    description: "Expert auto body services including precision frame alignment, scratch/dent repair, and structural restoration in Gardena, CA.",
  },
};

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
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.03)_0%,transparent_50%)]" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 opacity-100 translate-y-0 text-left">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 max-w-4xl leading-[1.1] md:leading-tight uppercase italic text-black">
                Experience Exceptional <br />
                <span className="text-black/40 font-normal">Auto Body Repair</span>
              </h1>
              <p className="text-lg md:text-2xl text-black/70 max-w-3xl leading-relaxed mb-8 md:mb-10 font-medium">
                When your car or truck needs bodywork, turn to Pacific Auto Body of Gardena, CA. 
                We specialize in vehicle collision repairs and more with 25 years of experience. 
                Contact us for a FREE estimate.
              </p>
              <Button size="lg" asChild className="w-full sm:w-auto rounded-full bg-black text-white hover:bg-black/90 px-8 h-12 md:h-14 text-sm md:text-base font-bold shadow-lg">
                <Link href="/contact">Get Your Free Estimate</Link>
              </Button>
            </div>
            
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image 
                  src="/a1.jpg" 
                  alt="Pacific Auto Body Repair Workshop" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 border-b border-black/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 md:mb-8 text-black">
              Why Choose Our <br />
              <span className="text-black/40">Auto Body Repair Services?</span>
            </h2>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed font-medium">
              At Pacific Auto Body, we understand your vehicle is more than just a mode of transport; 
              it's an integral part of your daily life. Here's why our services stand out:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/5">
            {whyChooseUs.map((service, i) => (
              <div key={i} className="group p-10 md:p-16 bg-white hover:bg-slate-50 transition-colors duration-500">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-black/5 flex items-center justify-center mb-6 md:mb-8 border border-black/10 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 md:h-7 md:w-7 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 md:mb-4 tracking-tight">{service.title}</h3>
                <p className="text-base md:text-lg text-black/60 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:mt-16 text-center">
             <p className="text-base md:text-lg text-black/40 italic font-medium">
               Experience our outstanding services. Contact Pacific Auto Body today.
             </p>
          </div>
        </div>
      </section>

      {/* The Pacific Auto Body Difference */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
            <div className="flex-1 space-y-10 md:space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black">
                  Experience the <br />
                  <span className="text-black/40">Pacific Auto Body Difference</span>
                </h2>
                <p className="text-lg md:text-xl text-black/70 leading-relaxed font-medium">
                  Our commitment to delivering value-added services that caters to your unique needs sets us apart. 
                  Here's what you can expect when you choose us:
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-black/5 group hover:border-black/10 transition-all shadow-sm">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center">
                    <Award className="h-6 w-6 text-black" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-bold uppercase tracking-widest text-black/80">Minimum 5-Year Warranty</h4>
                    <p className="text-black/60 leading-relaxed font-medium">We stand by our work, offering a minimum 5-year warranty on all our services.</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-black/5 group hover:border-black/10 transition-all shadow-sm">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-black" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg md:text-xl font-bold uppercase tracking-widest text-black/80">Towing Available</h4>
                    <p className="text-black/60 leading-relaxed font-medium">We understand that breakdowns can happen. That's why we offer towing services during business hours.</p>
                  </div>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-black/40 font-bold tracking-wide uppercase italic">Reach out to Pacific Auto Body today.</p>
            </div>
            
            <div className="flex-1 w-full aspect-square rounded-[2rem] md:rounded-[3rem] bg-white border border-black/5 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-black/5">
                <Image 
                  src="/a2.jpg" 
                  alt="Quality Auto Body Repair detail" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                <span className="absolute bottom-10 right-10 text-white/90 font-black text-4xl md:text-6xl uppercase tracking-tighter select-none -rotate-12 drop-shadow-2xl">Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 border-t border-black/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-10">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-black">
              Get in Touch with <br />
              <span className="text-black/40">Pacific Auto Body</span>
            </h2>
            <p className="text-lg md:text-2xl text-black/70 leading-relaxed mx-auto font-medium">
              Dents and scratches will bring down the value of your car. Contact Pacific Auto Body 
              for impressive bodywork. Remember, your vehicle deserves the best, and that's what we offer. 
              We look forward to hearing from you soon.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 md:pt-8">
              <Button size="lg" asChild className="w-full sm:w-auto rounded-full bg-black text-white hover:bg-black/90 px-8 h-12 md:h-14 text-sm md:text-base font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg">
                <Link href="/contact">Request Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto rounded-full border-black/20 text-black hover:bg-black/5 px-8 h-12 md:h-14 text-sm md:text-base font-bold backdrop-blur-sm transition-transform hover:scale-105 active:scale-95">
                <a href="tel:4242082113">Call (424) 208-2113</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
