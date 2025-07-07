import React from "react";
import Link from "next/link";

import Icon from "../ui/Icon";
import TalkButton from "./TalkButton";
import ViewSkillButton from "./ViewSkillButton";


const HeroSectionContent = () => {
  return (
    <section className="container mx-auto mt-32 grid grid-cols-2 items-center gap-8">
      <div className="flex flex-col">
        <h1 className="text-7xl leading-relaxed" id="hero-section-title">
          Hey! My Name is <br />
          <span className="text-primary text-8xl font-bold">Amirreza</span>
        </h1>
        <p className="mt-4 opacity-60 hero-description">
          I am a full stack developer specializing in Next.js, Nest.js, and
          React.
          <br />
          Passionate about building modern web applications and learning new
          technologies.
        </p>
        <div className="mt-8 flex flex-row gap-4 hero-buttons">
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
