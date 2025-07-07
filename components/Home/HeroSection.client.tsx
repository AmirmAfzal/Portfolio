"use client";
import React, { useRef } from "react";
import HeroSectionContent from "./HeroSection";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";


const HeroSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      // Animate title words
      const split = new SplitText("#hero-section-title", { type: "words" });
      tl.from(split.words, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
      });
      // Animate description
      tl.from(
        ".hero-description",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        ">-0.3" // start slightly before previous ends
      );
      // Animate buttons with stagger
      tl.from(
        ".hero-buttons > *",
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
        },
        ">-0.2" // start slightly before previous ends
      );
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <HeroSectionContent />
    </div>
  );
};

export default HeroSection;
