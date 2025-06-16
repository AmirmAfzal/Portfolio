import { ProjectInterface } from "@/lib/data/projects";
import React from "react";
import TalkButton from "./TalkButton";
import Image from "next/image";

interface Props extends ProjectInterface {}

const ProjectCard = (props: Props) => {
  return (
    <div className="from-base-200 to-primary/20 grid grid-cols-2 gap-4 overflow-hidden rounded-3xl bg-linear-to-r">
      <div className="flex flex-col py-16 pl-32">
        <div className="text-primary flex flex-row items-center gap-4 text-sm font-semibold">
          <span>{props.company}</span>
          <div className="bg-primary h-1 w-1 rounded-full"></div>
          <span>{props.year}</span>
        </div>
        <h3 className="mt-8 text-3xl font-semibold">{props.title}</h3>
        <p className="text-base-content/80 mt-4 text-sm">{props.description}</p>
        <div className="divider my-8"></div>
        <div className="flex flex-row flex-wrap gap-2">
          {props.tools.map((tool, index) => (
            <div className="btn btn-soft btn-primary rounded-full" key={index}>
              {tool}
            </div>
          ))}
        </div>
        <TalkButton className="mt-8 w-max" />
      </div>
      <div className="relative flex w-full items-center justify-center">
        <Image
          height={1000}
          width={1800}
          src={props.image}
          alt={props.title}
          className="-mr-36 -mb-36 w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
