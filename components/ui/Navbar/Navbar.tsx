import React from "react";
import Link from "next/link";

import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div
      className="container mx-auto flex items-center justify-between py-16"
      id="navbar"
    >
      {/* Desktop nav */}
      <div className="hidden w-full items-center justify-center gap-4 lg:flex">
        <NavLink href={"#skills"}>SKILLS</NavLink>
        <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20"></div>
        <NavLink href={"#projects"}>PROJECTS</NavLink>
        <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20"></div>
        <span className="text-primary px-4 text-xl font-bold">
          A.MOHAMMADI
        </span>
        <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20"></div>
        <NavLink href={"#about"}>ABOUT</NavLink>
        <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20"></div>
        <Link href="/notes" className="btn btn-ghost z-30 btn-lg font-medium">
          NOTES
        </Link>
        <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20"></div>
        <NavLink href={"#contact"}>CONTACT</NavLink>
      </div>

      {/* Mobile nav */}
      <div className="flex w-full items-center justify-between lg:hidden">
        <span className="text-primary text-xl font-bold">A.MOHAMMADI</span>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
