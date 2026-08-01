"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectSectionContent from "./ProjectSection";
import { prefersReducedMotion } from "@/lib/scroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const mm = gsap.matchMedia();
      const revealCard = (el: HTMLElement, from: { x?: number; y?: number }) => {
        gsap.fromTo(
          el,
          { ...from, opacity: 0 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      };

      mm.add("(min-width: 1024px)", () => {
        gsap.utils
          .toArray<HTMLElement>(".project-card", root.current)
          .forEach((el) => revealCard(el, { x: -200 }));
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils
          .toArray<HTMLElement>(".project-card", root.current)
          .forEach((el) => revealCard(el, { y: 32 }));
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} id="projects">
      <ProjectSectionContent />
    </div>
  );
};

export default ProjectSection;
