"use client";
import React, { useRef } from "react";
import HeroSectionContent from "./HeroSection";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const HeroSection = ({ s }: { s: string }) => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline();
        const split = new SplitText("#hero-section-title", { type: "words" });
        tl.from(split.words, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          stagger: 0.08,
        });
        tl.from(
          ".hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          ">-0.3"
        );
        tl.from(
          ".hero-buttons > *",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.15,
          },
          ">-0.2"
        );
      });
      mm.add("(max-width: 1024px)", () => {
        const tl = gsap.timeline();
        const split = new SplitText("#hero-section-title", { type: "words" });
        const descriptionSplit = new SplitText("#hero-section-description", {
          type: "lines",
        });
        tl.from(split.words, {
          opacity: 0,
          x: -40,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
        });
        tl.from(
          descriptionSplit.lines,
          {
            opacity: 0,
            x: -30,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.08,
          },
          ">-0.3"
        );
        tl.from(
          ".hero-buttons > *",
          {
            opacity: 0,
            x: -30,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.15,
          },
          ">-0.2"
        );
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <HeroSectionContent s={s} />
    </div>
  );
};

export default HeroSection;
