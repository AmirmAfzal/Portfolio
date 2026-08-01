"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SkillsSectionContent from "./SkillsSection";
import { prefersReducedMotion } from "@/lib/scroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SkillsSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const mm = gsap.matchMedia();
      const staggerIn = (from: { y: number; opacity: number }) =>
        gsap.utils
          .toArray<HTMLElement>(".grid > div", root.current)
          .forEach((el, i) => {
            gsap.fromTo(
              el,
              from,
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: i * 0.06,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                },
              }
            );
          });

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 30%",
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

      mm.add("(max-width: 1023px)", () => {
        staggerIn({ y: 24, opacity: 0 });
      });

      return () => mm.revert();
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
