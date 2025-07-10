import React from "react";

import { skills } from "@/lib/data/skills";

import HeroTitle from "./HeroTitle.client";
import SkillCard from "./SkillCard";

const SkillsSectionContent = () => {
  return (
    <div className="relative z-20 container mx-auto flex mt-64 flex-col items-center px-4 md:px-0" id="skills">
      <HeroTitle
        title="MY SKILLS"
        subtitle="Things I Am Good At"
        description="All these skills have been developed through years of hands-on
          experience."
      />
      <div className="mt-10 md:mt-16 grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <SkillCard {...skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSectionContent;
