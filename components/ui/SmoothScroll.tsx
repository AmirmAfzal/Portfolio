"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const SmoothScroll = () => {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    // Expose for the shared scrollToHash helper.
    window.__smoother = smoother as unknown as Window["__smoother"];

    return () => {
      smoother.kill();
      delete window.__smoother;
    };
  }, []);

  return null;
};

export default SmoothScroll;
