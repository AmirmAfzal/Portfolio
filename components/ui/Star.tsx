import React from "react";

interface Props {}

const Star = (props: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1_171"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="32"
      >
        <path d="M32 0H0V32H32V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1_171)">
        <path
          d="M16 32C15.5368 16.8419 15.1581 16.4656 0 16C15.1581 15.5368 15.5344 15.1581 16 0C16.4632 15.1581 16.8419 15.5344 32 16C16.8419 16.4656 16.4656 16.8373 16 32Z"
          fill="url(#paint0_linear_1_171)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_171"
          x1="-3.0605e-07"
          y1="0.842107"
          x2="35.8171"
          y2="6.96337"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C6FCA6" />
          <stop offset="1" stop-color="#A7FCEE" stop-opacity="0.74" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Star;
