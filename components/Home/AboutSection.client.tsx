"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import AboutSectionContent from "./AboutSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start:window.innerWidth > 1024 ? "top 30%" : "top 90%",
          end: "bottom center",
        },
      });
      const text = new SplitText("#about-description", { type: "lines" });
      tl.add("start")
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
        } , "start"
      );
      tl.fromTo(
        "#about-image",
        {
          y: 100,
          x: 100,
          opacity : 0
        },
        {
            opacity : 1,
          y: 0,
          x: 0,
        } , "start"
      );
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
