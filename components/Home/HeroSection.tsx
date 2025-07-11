import React from "react";

import TalkButton from "./TalkButton";
import ViewSkillButton from "./ViewSkillButton";

const HeroSectionContent = () => {
  return (
    <section className="container mx-auto grid min-h-[70vh] grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-0">
      <div className="flex flex-col">
        <h1
          className="text-5xl leading-tight md:text-7xl md:leading-relaxed"
          id="hero-section-title"
        >
          Hey! My Name is <br className="hidden md:inline" />
          <span className="text-primary text-5xl font-bold sm:text-6xl md:text-8xl">
            Amirreza
          </span>
        </h1>
        <p
          className="hero-description mt-4 text-base opacity-60"
          id="hero-section-description"
        >
          I am a full stack developer specializing in Next.js, Nest.js, and
          React.
          <br />
          Passionate about building modern web applications and learning new
          technologies.
        </p>
        <div className="hero-buttons mt-8 flex flex-col gap-4 sm:flex-row">
          <TalkButton />
          <ViewSkillButton />
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
