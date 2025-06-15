import { skills } from "@/lib/data/skills";
import React from "react";
import SkillCard from "./SkillCard";
import HeroTitle from "./HeroTitle";

interface Props {}

const SkillsSection = (props: Props) => {
  return (
    <div className="relative z-20 container mx-auto flex h-screen flex-col items-center justify-center">
      <HeroTitle
        title="MY SKILLS"
        subtitle="Thing I Am Good At"
        description="All these skills have been developed through years of hands-on
          experience."
      />
      <div className="mt-16 grid w-full grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <SkillCard {...skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
