import React from "react";
import Icon from "./Icon";

const ITEMS = [
  "Available for work",
  "Next.js",
  "React",
  "Nest.js",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "Let's build something great",
];

const Group = () => (
  <div className="flex shrink-0 items-center" aria-hidden="true">
    {ITEMS.map((item, i) => (
      <div className="flex items-center" key={i}>
        <span className="text-2xl font-semibold tracking-tight text-base-content/70 whitespace-nowrap sm:text-3xl">
          {item}
        </span>
        <Icon
          icon="mynaui:sparkles"
          width={24}
          height={24}
          className="text-primary mx-8 sm:mx-12"
        />
      </div>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <div className="relative z-20 mt-24 overflow-hidden border-y border-base-content/10 py-6 select-none">
      <div className="animate-marquee flex w-max">
        <Group />
        <Group />
      </div>
    </div>
  );
};

export default Marquee;
