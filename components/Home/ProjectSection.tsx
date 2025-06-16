import React from "react";
import HeroTitle from "./HeroTitle";
import { projects } from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";

interface Props {}

const ProjectSection = (props: Props) => {
  return (
    <div className="relative z-20 mt-64 container mx-auto flex min-h-screen flex-col items-center justify-center">
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
