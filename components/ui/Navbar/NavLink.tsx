"use client";
import React from "react";
import { scrollToHash } from "@/lib/scroll";

interface Props {
  children: React.ReactNode;
  href: string;
}

const NavLink = (props: Props) => {
  const handleClick = () => {
    scrollToHash(props.href);
  };
  return (
    <button className="btn btn-ghost z-30 btn-lg font-medium hidden lg:flex" onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default NavLink;
