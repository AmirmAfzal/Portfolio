import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

const HeroTitle = (props: Props) => {
  return (
    <div className={twMerge("flex flex-col items-center ", props.className)}>
      <span className="text-primary tracking-[0.3em] hero-title">{props.title}</span>
      <h2 className="mt-4 text-4xl font-bold hero-subtitle">{props.subtitle}</h2>
      <p className="text-base-content/60 mt-4 text-sm hero-description">{props.description}</p>
    </div>
  );
};

export default HeroTitle;
