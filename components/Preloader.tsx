"use client";
import React, { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, SplitText);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Preloader = () => {
  const root = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(root.current, { display: "none" });
        return;
      }

      const split = new SplitText(lettersRef.current, { type: "chars" });
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(root.current, { display: "none" });
        },
      });

      tl.fromTo(
        root.current,
        { autoAlpha: 1 },
        { duration: 1.4, autoAlpha: 1 }
      )
        .fromTo(
          split.chars,
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.04 },
          0.2
        )
        .fromTo(
          ".preloader-bar",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.0, ease: "power2.inOut" },
          0.3
        )
        .to(
          ".preloader-fill",
          { scaleX: 1, duration: 0.4, ease: "power2.in" },
          1.4
        )
        .to(root.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "+=0.15");

      split.revert();
      return () => {
        split.revert();
      };
    },
    { scope: root }
  );

  useLayoutEffect(() => {
    // If the page is restored from bfcache or already scrolled, skip.
    if (document.hidden) {
      gsap.set(root.current, { display: "none" });
    }
  }, []);

  return (
    <div
      ref={root}
      className="no-scrollbar fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-base-100"
      aria-hidden="true"
    >
      <span className="text-primary text-4xl font-bold tracking-[0.2em] sm:text-6xl">
        <span ref={lettersRef}>AMIRREZA</span>
      </span>
      <div className="mt-8 h-px w-40 overflow-hidden rounded-full bg-base-content/10 sm:w-64">
        <div className="preloader-bar h-full w-full origin-left scale-x-0 bg-primary"></div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary preloader-fill"></div>
    </div>
  );
};

export default Preloader;
