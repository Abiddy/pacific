"use client";

import { Car, Paintbrush, ShieldCheck, Wrench } from "lucide-react";
import { ContactButton } from "@/components/ui/ContactButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedText } from "@/components/ui/AnimatedText";
import type { LucideIcon } from "lucide-react";

const ABOUT_TEXT =
  "With more than twenty-five years of experience in collision repair, we focus on structural integrity, factory-matched paint, and customer care. Pacific Auto Body is a family-owned shop in Gardena, CA that helps drivers restore their vehicles with precision and pride. Let's get you back on the road.";

type Decoration = {
  Icon: LucideIcon;
  className: string;
  delay: number;
  x: number;
};

const DECORATIONS: Decoration[] = [
  {
    Icon: Car,
    className:
      "pointer-events-none absolute left-[2%] top-[5%] sm:left-[3%] md:left-[5%]",
    delay: 0.1,
    x: -80,
  },
  {
    Icon: Wrench,
    className:
      "pointer-events-none absolute bottom-[10%] left-[4%] sm:left-[7%] md:left-[11%]",
    delay: 0.25,
    x: -80,
  },
  {
    Icon: Paintbrush,
    className:
      "pointer-events-none absolute right-[2%] top-[5%] sm:right-[3%] md:right-[5%]",
    delay: 0.15,
    x: 80,
  },
  {
    Icon: ShieldCheck,
    className:
      "pointer-events-none absolute bottom-[10%] right-[4%] sm:right-[7%] md:right-[11%]",
    delay: 0.3,
    x: 80,
  },
];

function AutoDecoration({ Icon, className, delay, x }: Decoration) {
  return (
    <FadeIn delay={delay} x={x} y={0} duration={0.9} className={className}>
      <div className="flex h-[88px] w-[88px] items-center justify-center rounded-[28px] border border-[#D7E2EA]/15 bg-gradient-to-br from-[#D7E2EA]/12 to-transparent shadow-[0_0_40px_rgba(187,204,215,0.08)] backdrop-blur-sm sm:h-[120px] sm:w-[120px] sm:rounded-[36px] md:h-[150px] md:w-[150px] md:rounded-[44px]">
        <Icon
          className="h-[42px] w-[42px] text-[#BBCCD7]/55 sm:h-[56px] sm:w-[56px] md:h-[72px] md:w-[72px]"
          strokeWidth={1.25}
        />
      </div>
    </FadeIn>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      {DECORATIONS.map((decoration) => (
        <AutoDecoration key={decoration.className} {...decoration} />
      ))}

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading w-full text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About us
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="max-w-[560px] font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />

        <FadeIn delay={0.2} y={20} className="mt-4 sm:mt-8 md:mt-12">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
