"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import AboutSectionContent from "./AboutSection";
import { prefersReducedMotion } from "@/lib/scroll";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 30%",
            end: "bottom center",
          },
        });
        const text = new SplitText("#about-description", { type: "lines" });
        tl.add("start");
        tl.fromTo(
          text.lines,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.inOut",
          },
          "start"
        );
        tl.fromTo(
          "#about-image",
          {
            y: 100,
            x: 100,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
          },
          "start"
        );
        tl.fromTo(
          "#social-link",
          {
            y: 100,
            x: -200,
            opacity: 0,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
          },
          "start"
        );
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          "#about-description",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: "#about-description", start: "top 88%" },
          }
        );
        gsap.fromTo(
          "#about-image",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: "#about-image", start: "top 90%" },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} id="about">
      <AboutSectionContent />
    </div>
  );
};

export default AboutSection;
