import React from "react";

import TalkButton from "./TalkButton";
import ViewSkillButton from "./ViewSkillButton";


const HeroSectionContent = () => {
  return (
    <section className="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4 md:px-0">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-7xl leading-tight md:leading-relaxed" id="hero-section-title">
          Hey! My Name is <br className="hidden md:inline" />
          <span className="text-primary text-5xl sm:text-6xl md:text-8xl font-bold">Amirreza</span>
        </h1>
        <p className="mt-4 opacity-60 hero-description text-base">
          I am a full stack developer specializing in Next.js, Nest.js, and
          React.
          <br />
          Passionate about building modern web applications and learning new
          technologies.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 hero-buttons">
          <TalkButton />
          <ViewSkillButton/>
        </div>
      </div>
      {/* <Image
        width={1000}
        height={1000}
        className="w-full"
        src={"/images/about.jpg"}
        alt=""
      /> */}
    </section>
  );
};

export default HeroSectionContent;
