"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

declare global {
  interface Window {
    __smoother?: {
      scrollTo: (target: string | number, smooth?: boolean, position?: string) => void;
    };
  }
}

/**
 * Scroll to an anchor hash, routing through the GSAP ScrollSmoother
 * instance when it exists, otherwise falling back to native GSAP scrollTo.
 */
export function scrollToHash(hash: string) {
  const smoother = typeof window !== "undefined" ? window.__smoother : undefined;
  if (smoother && typeof smoother.scrollTo === "function") {
    smoother.scrollTo(hash, true, "top 110");
    return;
  }
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: hash, offsetY: 110 },
  });
}

/** True when the user prefers reduced motion (checked client-side). */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
