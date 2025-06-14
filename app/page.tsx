import Background from "@/components/Home/Background";
import HeroSection from "@/components/Home/HeroSection";
import SkillsSection from "@/components/Home/SkillsSection";
import React from "react";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div className="">
      <Background />
      <HeroSection />
      <SkillsSection/>
    </div>
  );
};

export default HomePage;
