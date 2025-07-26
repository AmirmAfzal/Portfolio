"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import AboutSectionContent from "./AboutSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = ({ s }: { s: string }) => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} id="about">
      <AboutSectionContent s={s} />
    </div>
  );
};

export default AboutSection;
