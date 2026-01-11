import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, Car, Paintbrush, Ruler, Shield, Hammer, ClipboardCheck } from "lucide-react";

const detailedServices = [
  {
    title: "Collision Repair",
    icon: Car,
    description: "Our certified technicians restore your vehicle's structural integrity and aesthetic appearance using manufacturer-approved methods.",
    features: [
      "Body panel replacement & repair",
      "Structural alignment",
      "Bumper & grill repair",
      "Window & glass replacement"
    ]
  },
  {
    title: "Precision Painting",
    icon: Paintbrush,
    description: "We use advanced computer-controlled color matching to ensure a perfect finish that matches your car's original factory paint.",
    features: [
      "Environmentally friendly paints",
      "Baked-on finishes for durability",
      "Multi-step polishing process",
      "UV protection clear coats"
    ]
  },
  {
    title: "Frame Straightening",
    icon: Ruler,
    description: "Safety is our priority. We use laser-guided measurement systems to return your vehicle's frame to its exact factory specifications.",
    features: [
      "Laser measurement technology",
      "Precision pulling systems",
      "Safety system recalibration",
      "Structural certification"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Professional auto body and collision repair services backed by 25 years of experience 
            and a commitment to quality that's second to none.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {detailedServices.map((service, index) => (
              <div 
                key={service.title} 
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full aspect-video rounded-3xl bg-muted flex items-center justify-center border-2 border-dashed">
                  {/* Placeholder for service image */}
                  <span className="text-muted-foreground font-medium italic">Service Imagery: {service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-background rounded-3xl p-8 md:p-16 border shadow-sm">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                  <Shield className="h-4 w-4" />
                  Hassle-Free Repairs
                </div>
                <h2 className="text-3xl font-bold">We Work With All Insurance Companies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Navigating insurance claims can be stressful. We handle the paperwork and 
                  communication with your insurance provider to ensure a smooth, worry-free 
                  repair process from start to finish.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/contact">Ask about insurance</Link>
                </Button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-muted/50 text-center space-y-2">
                  <ClipboardCheck className="h-8 w-8 mx-auto text-primary" />
                  <p className="font-bold text-sm">Direct Billing</p>
                </div>
                <div className="p-6 rounded-2xl bg-muted/50 text-center space-y-2">
                  <Hammer className="h-8 w-8 mx-auto text-primary" />
                  <p className="font-bold text-sm">Expert Claims</p>
                </div>
                <div className="p-6 rounded-2xl bg-muted/50 text-center space-y-2">
                  <Shield className="h-8 w-8 mx-auto text-primary" />
                  <p className="font-bold text-sm">Fully Insured</p>
                </div>
                <div className="p-6 rounded-2xl bg-muted/50 text-center space-y-2">
                  <Car className="h-8 w-8 mx-auto text-primary" />
                  <p className="font-bold text-sm">Rental Assist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to start your repair?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Request Your Free Estimate</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:4242082113">Call (424) 208-2113</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

