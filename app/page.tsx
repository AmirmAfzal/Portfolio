import Background from "@/components/Home/Background";
import HeroSection from "@/components/Home/HeroSection";
import ProjectSection from "@/components/Home/ProjectSection";
import SkillsSection from "@/components/Home/SkillsSection";
import React from "react";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div className="">
      <Background />
      <HeroSection />
      <SkillsSection/>
      <ProjectSection/>
    </div>
  );
};

export default HomePage;
