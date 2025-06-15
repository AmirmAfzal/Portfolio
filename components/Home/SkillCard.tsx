import React from "react";
import Icon from "../ui/Icon";
import TalkButton from "../ui/TalkButton";
import { SkillInterface } from "@/lib/data/skills";

interface Props extends SkillInterface {}

const SkillCard = (props: Props) => {
  return (
    <div className="flex w-full flex-col justify-between rounded-lg border-2 border-[#717171] border-opacity-20 bg-base-200/20 px-8 pb-8 pt-12">
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
            <li className="flex flex-row items-center gap-4 pl-4" key={index}>
              <div className="h-1 w-1 rounded-full bg-primary"></div>
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
