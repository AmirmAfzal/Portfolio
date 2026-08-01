"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import StatsSectionContent from "./StatsSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const StatsSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.utils
          .toArray<HTMLElement>(".stat-card", root.current)
          .forEach((el, i) => {
            gsap.fromTo(
              el,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: i * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                },
              }
            );
          });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <StatsSectionContent />
    </div>
  );
};

export default StatsSection;
