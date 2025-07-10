import React from "react";
import Image from "next/image";

import { ProjectInterface } from "@/lib/data/projects";

import TalkButton from "./TalkButton";

const ProjectCard = (props: ProjectInterface) => {
  return (
    <div className="from-base-200 to-primary/20 grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden rounded-3xl bg-linear-to-r" id="project-card">
      <div className="flex flex-col py-4 px-4 md:py-16 md:pl-32 order-2 lg:order-1">
        <div className="text-primary flex flex-row items-center gap-4 text-sm font-semibold">
          <span>{props.company}</span>
          <div className="bg-primary h-1 w-1 rounded-full"></div>
          <span>{props.year}</span>
        </div>
        <h3 className="mt-4 lg:mt-8 text-2xl md:text-3xl font-semibold">{props.title}</h3>
        <p className="text-base-content/80 mt-4 text-xs sm:text-sm md:text-base">{props.description}</p>
        <div className="divider my-4 lg:my-8"></div>
        <div className="flex flex-row flex-wrap gap-2">
          {props.tools.map((tool, index) => (
            <div className="btn btn-soft btn-primary rounded-full btn-sm md:btn-md" key={index}>
              {tool}
            </div>
          ))}
        </div>
        <TalkButton className="mt-8 w-full md:w-max" />
      </div>
      <div className="relative flex w-full items-center justify-center order-1 lg:order-2">
        <Image
          height={1000}
          width={1800}
          src={props.image}
          alt={props.title}
          className="m-0 lg:-mr-36 lg:-mb-36 w-full rounded-b-none lg:rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
