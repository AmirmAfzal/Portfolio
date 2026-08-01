"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ContactSectionContent from "./ContactSection";
import { prefersReducedMotion } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ContactSection = () => {
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
        tl.fromTo(
          "form",
          { y: 40, opacity: 0 },
          { duration: 0.6, opacity: 1, y: 0, ease: "power2.inOut" },
          0
        );
      });
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo(
          "form",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: "form", start: "top 88%" },
          }
        );
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} id="contact">
      <ContactSectionContent />
    </div>
  );
};

export default ContactSection;
