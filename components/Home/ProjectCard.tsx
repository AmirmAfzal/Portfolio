import React from "react";
import Image from "next/image";

import { ProjectInterface } from "@/lib/data/projects";

import TalkButton from "./TalkButton";

const ProjectCard = (props: ProjectInterface) => {
  return (
    <div className="from-base-200 to-primary/20 project-card grid grid-cols-1 gap-4 overflow-hidden rounded-3xl bg-linear-to-r lg:grid-cols-2">
      <div className="order-2 flex flex-col px-4 py-4 md:py-16 md:pl-32 lg:order-1">
        <div className="text-primary flex flex-row items-center gap-4 text-sm font-semibold">
          <span>{props.company}</span>
          <div className="bg-primary h-1 w-1 rounded-full"></div>
          <span>{props.year}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold md:text-3xl lg:mt-8">
          {props.title}
        </h3>
        <p className="text-base-content/80 mt-4 text-xs sm:text-sm md:text-base">
          {props.description}
        </p>
        <div className="divider my-4 lg:my-8"></div>
        <div className="flex flex-row flex-wrap gap-2">
          {props.tools.map((tool, index) => (
            <div
              className="btn btn-soft btn-primary btn-sm md:btn-md rounded-full"
              key={index}
            >
              {tool}
            </div>
          ))}
        </div>
        <TalkButton className="mt-8 w-full md:w-max" />
      </div>
      <div className="relative order-1 flex w-full items-center justify-center lg:order-2">
        <Image
          height={1000}
          width={1800}
          src={props.image}
          alt={props.title}
          className="m-0 w-full rounded-b-none object-cover lg:-mr-36 lg:-mb-36 lg:rounded-3xl"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
