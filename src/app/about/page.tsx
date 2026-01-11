import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Users, History, ShieldCheck, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-black text-white">
      {/* Page Header */}
      <section className="relative py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-8xl font-bold tracking-tight mb-8">
            About <span className="text-white/40">Our Shop</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            A family-owned legacy of quality, integrity, and exceptional service in Gardena since 2001.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">25 Years of <br /><span className="text-white/40">Trusted Service</span></h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Founded on the principles of honesty and craftsmanship, Pacific Auto Body has grown 
                from a small local shop into Gardena's premier destination for collision repair. 
                Our family-owned business treats every vehicle as if it were our own.
              </p>
              <p className="text-xl text-white/60 leading-relaxed">
                We understand that an accident is more than just a dent in your car—it's a 
                disruption to your life. That's why we focus on making the repair process as 
                transparent and stress-free as possible.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white font-bold">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <History className="h-5 w-5" />
                    </div>
                    <span>Established 2001</span>
                  </div>
                  <p className="text-base text-white/40">Decades of local expertise and reliability in the South Bay.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white font-bold">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <Users className="h-5 w-5" />
                    </div>
                    <span>Bilingual Staff</span>
                  </div>
                  <p className="text-base text-white/40">Providing clear communication in both English and Spanish.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="text-white/20 font-medium italic tracking-widest uppercase">Family Business / Workshop Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#09090b] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />
        <div className="container relative z-10 mx-auto px-6 text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Core Values</h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            These principles guide everything we do, from the first estimate to the final polish.
          </p>
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: ShieldCheck, 
                title: "Uncompromising Quality", 
                desc: "We never cut corners. Every repair meets or exceeds strict manufacturer standards for safety and finish." 
              },
              { 
                icon: Users, 
                title: "Honest Communication", 
                desc: "No hidden fees. No unnecessary repairs. Just clear, professional advice you can trust for your vehicle." 
              },
              { 
                icon: Heart, 
                title: "Community First", 
                desc: "As a family business, we take immense pride in supporting the Gardena and South Bay community since day one." 
              }
            ].map((value, i) => (
              <div key={i} className="bg-black p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Want to see <br /><span className="text-white/40">our work?</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" asChild className="rounded-full bg-white text-black hover:bg-white/90 px-10 h-16 text-lg font-bold transition-transform hover:scale-105 active:scale-95">
              <Link href="/services">View Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-white/20 text-white hover:bg-white/10 px-10 h-16 text-lg font-bold backdrop-blur-sm transition-transform hover:scale-105 active:scale-95">
              <Link href="/contact">Visit Our Shop</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
