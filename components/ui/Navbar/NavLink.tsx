"use client";
import gsap from "gsap/all";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
}

const NavLink = (props: Props) => {
  const handleClick = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: props.href, offsetY: 100 } });
  };
  return (
    <button className="btn btn-ghost z-30 btn-lg font-medium hidden lg:flex" onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default NavLink;
