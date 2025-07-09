"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import HeroTitleContent from "./HeroTitle";

type Props = React.ComponentProps<typeof HeroTitleContent>;

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const HeroTitle = (props: Props) => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-subtitle",
          start: window.innerWidth > 1024 ? "top center" : "top bottom",
          end: "bottom center",
          markers: true,
        },
      });

      gsap.utils
        .toArray<HTMLElement>(".hero-title", root.current)
        .forEach((el) => {
          tl.fromTo(
            el,
            { y: -30, opacity: 0, scale: 2, fontWeight: 600 },
            { duration: 0.5, opacity: 1, y: 0, scale: 1, fontWeight: 300 }
          );
        });
      gsap.utils
        .toArray<HTMLElement>(".hero-subtitle", root.current)
        .forEach((el) => {
          const text = new SplitText(el, { type: "words" });
          tl.fromTo(
            text.words,
            { y: 50, opacity: 0 },
            { duration: 0.5, opacity: 1, y: 0, stagger: 0.05 }
          );
        }, ">-0.3");
      gsap.utils
        .toArray<HTMLElement>(".hero-description", root.current)
        .forEach((el) => {
          const text = new SplitText(el, { type: "words" });
          tl.fromTo(
            text.words,
            { opacity: 0, y: -30 },
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
            }
          );
        }, ">-0.3");
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <HeroTitleContent {...props} />
    </div>
  );
};

export default HeroTitle;
