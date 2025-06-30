import React from "react";

import AboutSection from "@/components/Home/AboutSection";
import Animations from "@/components/Home/Animations";
import Background from "@/components/Home/Background";
import ContactSection from "@/components/Home/ContactSection";
import HeroSection from "@/components/Home/HeroSection";
import ProjectSection from "@/components/Home/ProjectSection";
import SkillsSection from "@/components/Home/SkillsSection";

const HomePage = () => {
  return (
    <div>
      <Animations />
      <Background />
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
