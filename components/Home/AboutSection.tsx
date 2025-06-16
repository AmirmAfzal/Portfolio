import React from "react";
import HeroTitle from "./HeroTitle";
import Image from "next/image";

interface Props {}

const AboutSection = (props: Props) => {
  return (
    <div className="relative z-20 container mx-auto mt-64 grid gap-8 min-h-screen items-center grid-cols-2">
      <div className="flex flex-col">
        <HeroTitle
          className="items-start"
          title="ABOUT ME"
          subtitle="Get To Know Me Better"
          description="My journey in few words"
        />
        <p className="text-base-content/80 mt-8 leading-relaxed">
          Hi, I'm a passionate and detail-oriented developer with a strong
          interest in building creative, user-focused digital experiences. I
          specialize in modern web technologies like React, Next.js, and
          Node.js, and I enjoy turning complex problems into elegant, efficient
          solutions. With a background in both front-end and back-end
          development, I'm always looking to learn new tools, contribute to
          meaningful projects, and grow as a developer. When I'm not coding, you
          might find me exploring electronics with Raspberry Pi, playing
          volleyball, or sketching something new. Let's build something great
          together!
        </p>
      </div>
      <div className="w-full flex justify-end">

      <Image
        src={"/images/about.jpg"}
        height={500}
        width={500}
        alt={"About Me"}
        className="aspect-square object-cover rounded-lg shadow-lg"
      />
      </div>
    </div>
  );
};

export default AboutSection;
