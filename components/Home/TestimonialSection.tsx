import React from "react";

import { testimonials } from "@/lib/data/testimonials";

import HeroTitle from "./HeroTitle";

const TestimonialSectionContent = () => {
  return (
    <div
      className="relative z-20 container mx-auto mt-64 flex flex-col items-center px-4 md:px-0"
      id="testimonials"
    >
      <HeroTitle
        title="TESTIMONIALS"
        subtitle="What People Say About Me"
        description="Kind words from clients I have had the pleasure of working with."
      />
      <div className="mt-10 md:mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((t, index) => (
          <div
            className="flex w-full transform flex-col justify-between rounded-2xl border-2 border-[#71717120] bg-base-200/20 p-8 transition duration-300 hover:bg-primary/10"
            key={index}
          >
            <p className="text-base-content/80 text-sm leading-relaxed md:text-base">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-8 flex flex-col border-t border-base-content/10 pt-6">
              <span className="font-semibold">{t.name}</span>
              <span className="text-primary mt-1 text-xs md:text-sm">
                {t.role} · {t.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSectionContent;
