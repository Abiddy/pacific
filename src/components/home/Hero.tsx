"use client";

import { CSSProperties, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

/** Base: damaged car. Reveal on hover: restored car. */
const BG_BROKEN = "/pacific-car-broken.png";
const BG_FIXED = "/pacific-car-fixed.png";
const SPOTLIGHT_R = 260;
const HERO_BG_POSITION = "center center";

type CursorPosition = {
  x: number;
  y: number;
};

export function Hero() {
  const mouse = useRef<CursorPosition>({ x: -999, y: -999 });
  const smooth = useRef<CursorPosition>({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };

    const animate = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;

      revealRef.current?.style.setProperty("--spotlight-x", `${smooth.current.x}px`);
      revealRef.current?.style.setProperty("--spotlight-y", `${smooth.current.y}px`);

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white tracking-[-0.02em]">
      <section
        className="relative w-full overflow-hidden h-screen bg-black"
        style={{ height: "100dvh" }}
        aria-labelledby="hero-title"
      >
        <HeroNav />

        <div
          className="absolute inset-0 z-10 bg-cover bg-no-repeat hero-zoom"
          style={{
            backgroundImage: `url(${BG_BROKEN})`,
            backgroundPosition: HERO_BG_POSITION,
          }}
          aria-hidden="true"
        />

        <RevealLayer ref={revealRef} image={BG_FIXED} backgroundPosition={HERO_BG_POSITION} />

        <div className="absolute top-[14%] left-0 right-0 z-50 flex flex-col items-center text-center px-5 pointer-events-none">
          <h1 id="hero-title" className="text-white leading-[0.95]">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
              style={{ letterSpacing: "-0.05em", animationDelay: "0.25s" }}
            >
              Damage fades
            </span>
            <span
              className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
              style={{ letterSpacing: "-0.08em", animationDelay: "0.42s" }}
            >
              craft remains
            </span>
          </h1>
        </div>

        <div
          className="hidden sm:block absolute bottom-14 left-10 md:left-14 z-50 max-w-[260px] hero-anim hero-fade"
          style={{ animationDelay: "0.7s" }}
        >
          <p className="text-sm text-white/80 leading-relaxed">
            Every panel tells the story of the impact. Our technicians read those
            marks carefully, restoring structure, shape, and finish with factory-level precision.
          </p>
        </div>

        <div
          className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 z-50 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 hero-anim hero-fade"
          style={{ animationDelay: "0.85s" }}
        >
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Move your cursor across the car to reveal the restored finish underneath —
            see what expert repair can do.
          </p>
          <Link
            href="/contact"
            className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30"
          >
            Get an Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}

function HeroNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
      <Link href="/" className="flex items-center gap-2" aria-label="Pacific Auto Body home">
        <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff" aria-hidden="true">
          <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
        </svg>
        <span className="text-white text-2xl font-playfair italic">Pacific</span>
      </Link>

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
        {["Repair", "Services", "Paint", "Estimates", "Contact"].map((item, index) => (
          <Link
            key={item}
            href={index === 4 ? "/contact" : index === 0 ? "/" : "/services"}
            className={
              index === 0
                ? "bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium"
                : "text-white/80 hover:bg-white/20 hover:text-white transition-colors px-4 py-1.5 rounded-full text-sm font-medium"
            }
          >
            {item}
          </Link>
        ))}
      </div>

      <Link
        href="/contact"
        className="hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100"
      >
        Get Estimate
      </Link>

      <button
        className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>
    </nav>
  );
}

function RevealLayer({
  ref,
  image,
  backgroundPosition,
}: {
  ref: React.Ref<HTMLDivElement>;
  image: string;
  backgroundPosition: string;
}) {
  const mask = `radial-gradient(circle ${SPOTLIGHT_R}px at var(--spotlight-x, -999px) var(--spotlight-y, -999px), rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`;
  const style = {
    backgroundImage: `url(${image})`,
    backgroundPosition,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maskImage: mask,
    WebkitMaskImage: mask,
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-cover bg-no-repeat z-30 pointer-events-none"
      style={style}
      aria-hidden="true"
    />
  );
}
