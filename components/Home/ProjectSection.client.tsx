"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectSectionContent from "./ProjectSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 20%",
            end: "bottom center",
          },
        });
        gsap.utils
          .toArray<HTMLElement>(".grid > div", root.current)
          .forEach((el, i) => {
            tl.fromTo(
              el,
              { y: 40, opacity: 0 },
              { duration: 0.4, opacity: 1, y: 0, delay: i * 0.05 },
              ">"
            );
          });
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
