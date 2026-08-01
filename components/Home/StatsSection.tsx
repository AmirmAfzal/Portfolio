import React from "react";

import { stats } from "@/lib/data/stats";

const StatsSectionContent = () => {
  return (
    <div className="relative z-20 container mx-auto mt-32 px-4 md:px-0" id="stats">
      <div className="from-base-200 to-primary/20 grid grid-cols-2 gap-6 rounded-3xl bg-linear-to-r px-6 py-12 md:grid-cols-4 md:px-12">
        {stats.map((stat, index) => (
          <div
            className="stat-card flex flex-col items-center text-center"
            key={index}
          >
            <span className="text-primary text-4xl font-bold md:text-5xl">
              {stat.value}
            </span>
            <span className="text-base-content/70 mt-3 text-xs font-medium uppercase tracking-wider sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSectionContent;
