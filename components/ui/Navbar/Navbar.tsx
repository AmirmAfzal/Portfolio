import React from "react";

import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div
      className="container mx-auto flex items-center justify-center lg:justify-between py-16"
      id="navbar"
    >
      <NavLink href={"#skills"}>SKILLS</NavLink>
      <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20 hidden lg:inline"></div>
      <NavLink href={"#projects"}>PROJECTS</NavLink>
      <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20 hidden lg:inline"></div>
      <span className="text-primary text-xl font-bold">A.MOHAMMADI</span>
      <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20 hidden lg:inline"></div>
      <NavLink href={"#about"}>ABOUT</NavLink>
      <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20 hidden lg:inline"></div>
      <NavLink href={"#contact"}>CONTACT</NavLink>
    </div>
  );
};

export default Navbar;
