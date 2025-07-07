import React from "react";

import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div
      className="container mx-auto flex items-center justify-between py-16"
      id="navbar"
    >
      <NavLink href={"/"}>ABOUT</NavLink>
      <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20"></div>
      <NavLink href={"/"}>WORK</NavLink>
      <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20"></div>
      <span className="text-primary text-xl font-bold">A.MOHAMMADI</span>
      <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20"></div>
      <NavLink href={"/"}>SHOP</NavLink>
      <div className="bg-primary h-1 w-1 animate-pulse rounded-full opacity-20"></div>
      <NavLink href={"/"}>CONTACTS</NavLink>
    </div>
  );
};

export default Navbar;
