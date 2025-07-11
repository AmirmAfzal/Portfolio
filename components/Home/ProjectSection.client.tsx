"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectSectionContent from "./ProjectSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectSection = () => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        // const tl = gsap.timeline({
          // scrollTrigger: {
          //   trigger: root.current,
          //   start: "top 20%",
          //   end: "bottom center",
          // },
        // });
        // gsap.utils
        //   .toArray<HTMLElement>(".grid > div", root.current)
        //   .forEach((el, i) => {
        //     gsap.fromTo(
        //       el,
        //       {
        //         y: 40,
        //         opacity: 0,
        //         scrollTrigger: {
        //           trigger: el,
        //           start: "top 10%",
        //           end: "bottom center",
        //           markers : true,
        //           id: `project-${i + 1}`
        //         },
        //       },
        //       { duration: 0.4, opacity: 1, y: 0 },
        //       // ">"
        //     );
        //   });
        gsap.utils
          .toArray<HTMLElement>(".project-card", root.current)
          .forEach((el,) => {
            console.log(el);
            gsap.fromTo(
              el,
              {
                x: -200,
                opacity: 0,
              },
              {
                duration: 1,
                opacity: 1,
                x: 0,
                scrollTrigger: {
                  trigger: el,
                  start: "10% 70%",
                  end: "bottom center",
                },
              }
              // ">"
            );
          });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root} id="projects">
      <ProjectSectionContent />
    </div>
  );
};

export default ProjectSection;
