"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React from "react";

const Animations = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".hero-title").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: -100,
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          scrollTrigger: {
            //   scrub: 1,
            // pin: true,
            trigger: el,
            start: "top center",
            end: "bottom center",
            markers: true,
            pinSpacing: true,
          },
        }
      );
    });
    gsap.utils.toArray<HTMLElement>(".hero-subtitle").forEach((el) => {
      const text = new SplitText(el, { type: "words" });
      gsap.fromTo(
        text.words,
        {
          x: -100,
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
          x: 0,
          stagger: 0.05,
          scrollTrigger: {
            //   scrub: 1,
            // pin: true,
            trigger: ".hero-title",
            start: "top center",
            end: "bottom center",
            markers: true,
            pinSpacing: true,
          },
        }
      );
    });
    gsap.utils.toArray<HTMLElement>(".hero-description").forEach((el) => {
      const text = new SplitText(el, { type: "words" });
      gsap.fromTo(
        text.words,
        {
          // x: -100,
          opacity: 0,
        },
        {
          duration: 1,
          opacity: 1,
          x: 0,
          stagger: 0.05,
          scrollTrigger: {
            //   scrub: 1,
            // pin: true,
            trigger: ".hero-title",
            start: "top center",
            end: "bottom center",
            markers: true,
            pinSpacing: true,
          },
        }
      );
    });
  }, []);
  return <></>;
};

export default Animations;
