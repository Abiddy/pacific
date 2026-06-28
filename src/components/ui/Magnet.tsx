"use client";

import { useRef, useState, type ReactNode, type CSSProperties } from "react";

type MagnetProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
};

export function Magnet({
  children,
  className = "",
  style,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const withinX =
      event.clientX >= rect.left - padding && event.clientX <= rect.right + padding;
    const withinY =
      event.clientY >= rect.top - padding && event.clientY <= rect.bottom + padding;

    if (withinX && withinY) {
      setActive(true);
      setPosition({
        x: (event.clientX - centerX) / strength,
        y: (event.clientY - centerY) / strength,
      });
    } else {
      setActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setActive(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
