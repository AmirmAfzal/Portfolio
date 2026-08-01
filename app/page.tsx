import React from "react";

import AboutSection from "@/components/Home/AboutSection.client";
// import Background from "@/components/Home/Background";
import ContactSection from "@/components/Home/ContactSection.client";
import HeroSection from "@/components/Home/HeroSection.client";
import ProjectSection from "@/components/Home/ProjectSection.client";
import SkillsSection from "@/components/Home/SkillsSection.client";
import StatsSection from "@/components/Home/StatsSection.client";
import TestimonialSection from "@/components/Home/TestimonialSection";
import Marquee from "@/components/ui/Marquee";

const HomePage = () => {
  return (
    <div>
      {/* <Background /> */}
      <HeroSection />
      <Marquee />
      <StatsSection />
      <SkillsSection />
      <ProjectSection />
      <TestimonialSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
