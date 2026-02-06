import { Hero } from "@/components/home/Hero";
import { ImageParallax } from "@/components/home/ImageParallax";
import { Stats } from "@/components/home/Stats";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      
      <ImageParallax text="WE RESTORE YOUR VEHICLE TO FACTORY PERFECTION WITH UNCOMPROMISING CARE." />
      
      <Stats />

      <Testimonials />

      <ServicesOverview />

      <WhyChooseUs />
      
      <FinalCTA />
    </>
  );
}
