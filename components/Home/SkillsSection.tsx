import { skills } from "@/lib/data/skills";
import React from "react";
import SkillCard from "./SkillCard";

interface Props {}

const SkillsSection = (props: Props) => {
  return (
    <div className="container relative z-20 mx-auto flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="tracking-[0.3em] text-primary">MY SKILLS</span>
        <h2 className="mt-4 text-4xl font-bold">Thing I Am Good At</h2>
        <p className="mt-4 text-sm text-base-content/60">
          All these skills have been developed through years of hands-on
          experience.
        </p>
      </div>
      <div className="mt-16 grid w-full grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <SkillCard {...skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
