import Link from "next/link";
import React from "react";
import Icon from "../ui/Icon";
import TalkButton from "./TalkButton";

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <section className="container mx-auto flex h-screen items-center">
      <div className="flex flex-col">
        <h1 className="text-7xl leading-relaxed">
          Hey! My Name is <br />{" "}
          <span className="text-primary text-8xl font-bold">Amirreza</span>{" "}
        </h1>
        <p className="mt-4 opacity-60">
          I am a full stack developer specializing in Next.js, Nest.js, and
          React.
          <br />
          Passionate about building modern web applications and learning new
          technologies.
        </p>
        <div className="mt-8 flex flex-row gap-4">
          <TalkButton />
          <Link href={"/"} className="btn btn-primary btn-soft px-16">
            View skills
            <Icon icon="mynaui:arrow-up-right" width={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
