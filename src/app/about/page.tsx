import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Users, History, ShieldCheck, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pacific Auto Body</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A family-owned legacy of quality, integrity, and exceptional service in Gardena since 2001.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">25 Years of Trusted Service</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded on the principles of honesty and craftsmanship, Pacific Auto Body has grown 
                from a small local shop into Gardena's premier destination for collision repair. 
                Our family-owned business treats every vehicle as if it were our own.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that an accident is more than just a dent in your car—it's a 
                disruption to your life. That's why we focus on making the repair process as 
                transparent and stress-free as possible.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <History className="h-5 w-5" />
                    <span>Established 2001</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Decades of local expertise.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Users className="h-5 w-5" />
                    <span>Bilingual Staff</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Serving our diverse community.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl bg-muted overflow-hidden flex items-center justify-center border-2 border-dashed">
              <span className="text-muted-foreground italic">Family Business / Shop Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do, from the first estimate to the final polish.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-2xl border shadow-sm space-y-4">
              <ShieldCheck className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Uncompromising Quality</h3>
              <p className="text-muted-foreground">
                We never cut corners. Every repair meets or exceeds manufacturer standards.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl border shadow-sm space-y-4">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Honest Communication</h3>
              <p className="text-muted-foreground">
                No hidden fees. No unnecessary repairs. Just clear, honest advice you can trust.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl border shadow-sm space-y-4">
              <Heart className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Community First</h3>
              <p className="text-muted-foreground">
                As a family business, we take pride in supporting the Gardena and South Bay community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold">Want to learn more?</h2>
          <Button size="lg" asChild>
            <Link href="/contact">Visit Our Shop</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

