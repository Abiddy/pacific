import { Hero } from "@/components/home/Hero";
import { MarqueeSection } from "@/components/home/MarqueeSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="post-hero-page">
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </div>
    </>
  );
}
