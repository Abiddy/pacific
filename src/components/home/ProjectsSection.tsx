"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LiveProjectButton } from "@/components/ui/LiveProjectButton";

type Project = {
  number: string;
  category: string;
  name: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Insurance",
    name: "Mercedes CLS Restoration",
    col1Image1: "/a1.jpg",
    col1Image2: "/a2.jpg",
    col2Image: "/a3.jpg",
  },
  {
    number: "02",
    category: "Collision",
    name: "Full Body Respray",
    col1Image1: "/a4.jpg",
    col1Image2: "/a5.jpg",
    col2Image: "/a6.jpg",
  },
  {
    number: "03",
    category: "Frame Repair",
    name: "Structural Realignment",
    col1Image1: "/p1.jpg",
    col1Image2: "/car1.jpg",
    col2Image: "/car2.png",
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        className="sticky top-24 md:top-32"
        style={{ scale, transformOrigin: "top center" }}
      >
        <div className="rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-6">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {project.number}
              </span>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/60">
                  {project.category}
                </p>
                <h3
                  className="font-display font-semibold uppercase tracking-wide text-[#D7E2EA]"
                  style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <div className="flex w-full flex-col gap-3 sm:w-[40%] sm:gap-4">
              <img
                src={project.col1Image1}
                alt=""
                className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
              />
              <img
                src={project.col1Image2}
                alt=""
                className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
              />
            </div>
            <div className="w-full sm:w-[60%]">
              <img
                src={project.col2Image}
                alt=""
                className="h-full min-h-[280px] w-full rounded-[40px] object-cover sm:min-h-[400px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pt-12 pb-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-16 sm:pb-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-20 md:pb-32"
    >
      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
