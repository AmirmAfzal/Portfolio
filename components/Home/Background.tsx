"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Props {}

const Background = (props: Props) => {
  useGSAP(() => {

  });
  return (
    <div className="">
      <div className="absolute -top-1/2 left-1/2 z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary opacity-10 blur-[100px]"></div>
    </div>
  );
};

export default Background;
