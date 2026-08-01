"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import StatsSectionContent from "./StatsSection";
import { prefersReducedMotion } from "@/lib/scroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const StatsSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reduced-motion: just show final values, no animation.
      if (prefersReducedMotion()) {
        gsap.utils.toArray<HTMLElement>(".stat-value", root.current).forEach((el) => {
          el.textContent = `${el.dataset.value}${el.dataset.suffix ?? ""}`;
        });
        return;
      }

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

      // Count-up for all screen sizes.
      gsap.utils
        .toArray<HTMLElement>(".stat-value", root.current)
        .forEach((el) => {
          const target = Number(el.dataset.value || 0);
          const suffix = el.dataset.suffix || "";
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            snap: { v: 1 },
            onUpdate: () => {
              el.textContent = `${Math.round(obj.v)}${suffix}`;
            },
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
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
