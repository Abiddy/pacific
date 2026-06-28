"use client";

import { useEffect, useRef, useState } from "react";

const MARQUEE_IMAGES = [
  "/a1.jpg",
  "/a2.jpg",
  "/a3.jpg",
  "/a4.jpg",
  "/a5.jpg",
  "/a6.jpg",
  "/car1.jpg",
  "/p1.jpg",
  "/car2.png",
  "/pacific-car-broken.png",
  "/pacific-car-fixed.png",
];

const ROW_1 = MARQUEE_IMAGES.slice(0, 6);
const ROW_2 = MARQUEE_IMAGES.slice(6);

function MarqueeRow({
  images,
  direction,
  offset,
}: {
  images: string[];
  direction: "left" | "right";
  offset: number;
}) {
  const tripled = [...images, ...images, ...images];
  const translateX = direction === "right" ? offset - 200 : -(offset - 200);

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${translateX}px)`,
        willChange: "transform",
      }}
    >
      {tripled.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt="Pacific Auto Body repair work"
          loading="lazy"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const nextOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(nextOffset);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      aria-label="Repair work gallery"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW_1} direction="right" offset={offset} />
        <MarqueeRow images={ROW_2} direction="left" offset={offset} />
      </div>
    </section>
  );
}
