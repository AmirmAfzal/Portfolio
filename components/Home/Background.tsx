"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ScrambleTextPlugin,
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
} from "gsap/all";
gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  ScrambleTextPlugin
);

const Background = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      // let descriptionSplit = new SplitText("#hero-description", {
      //   type: "words",
      //   wordsClass: "border border-primary border-dotted rounded-2xl p-4 my-2",
      //   onSplit: (word) => {
      //     gsap.from(word.words, {
      //       backgroundColor: "#ffffff",
      //     });
      //   },
      //   onRevert : (word)=> {
      //     gsap.from(word.words, {
      //       backgroundColor: "#ffffff",
      //     });
      //   }
      // });
      // let titleSplit = new SplitText("#hero-title", { type: "words" });
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     scrub: 1,
      //     pin: true,
      //     trigger: "#hero",
      //     start: "center center",
      //     end: "+=4800px center",
      //   },
      // });
      // for (let [index, title] of titleSplit.words.entries()) {
      //   tl.add(`text-${index}`);
      //   tl.from(
      //     title,
      //     {
      //       // autoAlpha: 0,
      //       // x: -300,
      //       color: "#ffffff",
      //       // stagger: 0.05,
      //       duration: 1,
      //       ease: "power2.out",
      //       fontSize: "72px",
      //       fontWeight: 400,
      //       // opacity: 0,
      //     }
      //     // `text-${index}`
      //   );
      //   tl.to(title, {
      //     color: `var(--color-primary)`,
      //     stagger: 0.05,
      //     duration: 1,
      //     fontSize: "90px",
      //     fontWeight: 700,
      //     // opacity: 1,
      //   });
      //   if (index != 0)
      //     tl.to(titleSplit.words[index - 1], {
      //       color: "#ffffff",
      //       fontSize: "72px",
      //       fontWeight: 400,
      //       duration: 0.5,
      //     });
      // }
      // tl.to(titleSplit.words, {
      //   fontSize: "50px",
      //   x: -300,
      //   // autoAlpha: 0,
      //   // duration: 1,
      // });
      // tl.from(descriptionSplit.words, {
      //   yPercent: "100",
      //   autoAlpha: 0,
      //   stagger: {
      //     each: 0.05,
      //     from: "start",
      //   },
      // });
      //   for (let [index, title] of descriptionSplit.words.entries()) {
      //     tl.add(`desc-${index}`)
      //     tl.from(
      //       title,
      //       {
      //         // autoAlpha: 0,
      //         x: -200,
      //         color: "#ffffff",
      //         // stagger: 0.05,
      //         duration: 1,
      //         ease: "bounce.inOut",
      //         // fontSize: "50px",
      //         fontWeight: 400,
      //         autoAlpha: 0,
      //       },
      //       `desc-${index}`
      //     ).to(title, {
      //       color: `var(--color-primary)`,
      //       stagger: 0.1,
      //       duration: 1,
      //       ease: "bounce.inOut",
      //       // fontSize: "60px",
      //       // fontWeight: 700,
      //       x: 0,
      //       autoAlpha: 1,
      //     });
      //     if (index != 0)
      //       tl.to(
      //         descriptionSplit.words[index - 1],
      //         {
      //           color: "#ffffff",
      //           // fontSize: "50px",
      //           fontWeight: 400,
      //           duration: 2,
      //         },
      //         `desc-${index}`
      //       );
      //   }
    });
    return () => mm.revert();
  });
  return (
    <div className="">
      <div className="bg-primary absolute -top-1/2 left-1/2 z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full opacity-10 blur-[100px]"></div>
      <div className="from-primary to-secondary absolute top-full left-0 z-10 h-[1500px] w-[1500px] -translate-x-2/3 rounded-full bg-radial opacity-20 blur-[200px]"></div>
    </div>
  );
};

export default Background;
