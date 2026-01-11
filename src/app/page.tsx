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
      <section className="py-12 border-y bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-1">
              <p className="text-4xl font-bold text-primary">25+</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</p>
            </div>
            <div className="text-center space-y-1 border-l">
              <p className="text-4xl font-bold text-primary">5yr</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Minimum Warranty</p>
            </div>
            <div className="text-center space-y-1 border-l lg:border-l">
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Free Estimates</p>
            </div>
            <div className="text-center space-y-1 border-l">
              <p className="text-4xl font-bold text-primary">A+</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Customer Service</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[grid_rgba(255,255,255,0.2)_20px_20px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to get your car back on the road?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Contact Pacific Auto Body today for a free, no-obligation estimate. 
            We're here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact">
                Schedule an Estimate
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors" asChild>
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
