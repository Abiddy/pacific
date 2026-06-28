"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const SERVICES = [
  {
    number: "01",
    name: "Collision Repair",
    description:
      "Full structural and cosmetic restoration after accidents — from minor fender benders to major collision damage — with OEM-grade parts and techniques.",
  },
  {
    number: "02",
    name: "Paint & Refinish",
    description:
      "Factory-matched paint blending, clear coat application, and color correction that restores your vehicle's original finish with seamless results.",
  },
  {
    number: "03",
    name: "Frame Straightening",
    description:
      "Laser-guided frame measurement and precision alignment to return your vehicle to exact manufacturer specifications for safety and handling.",
  },
  {
    number: "04",
    name: "Dent & Scratch Removal",
    description:
      "Meticulous paintless dent repair and scratch correction for a showroom-perfect appearance without unnecessary panel replacement.",
  },
  {
    number: "05",
    name: "Insurance Claims",
    description:
      "We work directly with all major insurance providers, handling estimates, documentation, and repairs so you can focus on getting back on the road.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mb-16 flex w-full justify-center px-2 sm:mb-20 md:mb-28">
        <h2
          className="w-full text-center font-display font-extrabold uppercase leading-[0.9] text-[#0C0C0C]"
          style={{ fontSize: "clamp(2.5rem, 11vw, 160px)" }}
        >
          Services
        </h2>
      </div>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} y={20}>
            <div
              className="flex flex-col gap-4 border-t border-[rgba(12,12,12,0.15)] py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10 md:py-12"
            >
              <span
                className="shrink-0 font-display font-extrabold text-[#0C0C0C]"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <h3
                  className="font-display font-semibold uppercase tracking-wide text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        <div className="border-t border-[rgba(12,12,12,0.15)]" />
      </div>
    </section>
  );
}
