import React from "react";

import { projects } from "@/lib/data/projects";

import HeroTitle from "./HeroTitle";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="relative z-20 container mx-auto mt-64 flex flex-col items-center justify-center">
      <HeroTitle
        title="MY PROJECTS"
        subtitle="Some Of My Projects"
        description="You can see some of my projects I have done in the past."
      />
      <div className="mt-16 grid w-full grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
