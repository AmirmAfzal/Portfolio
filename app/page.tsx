import React from "react";

import AboutSection from "@/components/Home/AboutSection.client";
// import Background from "@/components/Home/Background";
import ContactSection from "@/components/Home/ContactSection.client";
import HeroSection from "@/components/Home/HeroSection.client";
import ProjectSection from "@/components/Home/ProjectSection.client";
import SkillsSection from "@/components/Home/SkillsSection.client";
interface Props {
 searchParams : Promise<{s : string}>
}
const HomePage = async({searchParams}:Props) => {
  const s = (await searchParams).s
  return (
    <div>
      {/* <Background /> */}
      <HeroSection s={s} />
      <SkillsSection />
      <ProjectSection />
      <AboutSection s={s} />
      <ContactSection />
    </div>
  );
};

export default HomePage;
