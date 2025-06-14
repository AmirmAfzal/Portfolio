import Link from "next/link";
import React from "react";
import Icon from "../ui/Icon";

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <section className="container mx-auto h-screen flex items-center">
      <div className="flex flex-col">
        <h1 className="text-7xl leading-relaxed">
          Hey! My Name is <br />{" "}
          <span className="text-8xl font-bold text-primary">Amirreza</span>{" "}
        </h1>
        <p className="mt-4 opacity-60">
          I am a full stack developer specializing in Next.js, Nest.js, and React.
          <br />
          Passionate about building modern web applications and learning new technologies.
        </p>
        <div className="mt-8 flex flex-row gap-4">
          <Link href={"/"} className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:shadow-primary/40 hover:shadow-lg px-16">
            <Icon icon="mynaui:sparkles-solid" width={24} />
            Let's talk
          </Link>
          <Link href={"/"} className="btn btn-outline border-base-content/40 px-16">
            View skills
            <Icon icon="mynaui:arrow-up-right" width={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
