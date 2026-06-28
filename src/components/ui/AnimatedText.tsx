"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      {characters.map((char, index) => (
        <AnimatedCharacter
          key={`${char}-${index}`}
          char={char}
          index={index}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function AnimatedCharacter({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === " " ? "\u00A0" : char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}
