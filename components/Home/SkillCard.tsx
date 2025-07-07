import React from "react";

import { SkillInterface } from "@/lib/data/skills";

import Icon from "../ui/Icon";
import TalkButton from "./TalkButton";

const SkillCard = (props: SkillInterface) => {
  return (
    <div className="border-opacity-20 bg-base-200/20 hover:bg-primary/10 flex w-full transform cursor-pointer flex-col justify-between rounded-2xl border-2 border-[#717171]/20 px-8 pt-12 pb-8 transition duration-300 ease-in-out hover:!scale-105">
      <div className="flex w-full flex-col">
        <div className="flex flex-row items-center gap-4">
          <Icon
            className="text-primary"
            width={32}
            icon="solar:star-shine-bold"
          />
          <span className="text-xl font-medium">{props.name}</span>
        </div>
        <ul className="mt-8">
          {props.tools.map((tool, index) => (
            <li
              className="flex cursor-pointer flex-row items-center gap-4 rounded-lg pl-4"
              key={index}
            >
              <div className="bg-primary h-1 w-1 rounded-full"></div>
              <span className="font-light opacity-80">{tool}</span>
            </li>
          ))}
        </ul>
      </div>
      <TalkButton className="mt-8 justify-self-end" />
    </div>
  );
};

export default SkillCard;
