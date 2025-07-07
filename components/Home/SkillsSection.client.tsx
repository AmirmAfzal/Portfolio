"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SkillsSectionContent from "./SkillsSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SkillsSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 30%",
          end: "bottom center",
          
        },
      });

      gsap.utils.toArray<HTMLElement>(".grid > div", root.current).forEach((el, i) => {
        tl.fromTo(
          el,
          { y: 40, opacity: 0 },
          { duration: 0.4, opacity: 1, y: 0, delay: i * 0.05 },
          ">"
        );
      });
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <SkillsSectionContent />
    </div>
  );
};

export default SkillsSection; 