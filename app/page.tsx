import React from "react";

import AboutSection from "@/components/Home/AboutSection.client";
import Background from "@/components/Home/Background";
import ContactSection from "@/components/Home/ContactSection.client";
import HeroSection from "@/components/Home/HeroSection.client";
import ProjectSection from "@/components/Home/ProjectSection.client";
import SkillsSection from "@/components/Home/SkillsSection.client";

const HomePage = () => {
  return (
    <div>
      {/* <Background /> */}
      <HeroSection />
      <SkillsSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
