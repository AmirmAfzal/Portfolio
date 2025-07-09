import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

const HeroTitleContent = (props: Props) => {
  return (
    <div className={twMerge("flex flex-col items-center text-center", props.className)}>
      <span className="text-primary tracking-[0.3em] hero-title text-xs sm:text-sm md:text-base">{props.title}</span>
      <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold hero-subtitle">{props.subtitle}</h2>
      <p className="text-base-content/60 mt-4 text-xs sm:text-sm md:text-base hero-description">{props.description}</p>
    </div>
  );
};

export default HeroTitleContent;
