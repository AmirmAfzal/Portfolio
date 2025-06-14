import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div
      className="container absolute left-1/2 top-0 z-[9999] mx-auto flex -translate-x-1/2 items-center justify-between py-16"
      id="navbar"
    >
      <NavLink href={"/"}>ABOUT</NavLink>
      <div className="h-1 w-1 animate-pulse rounded-full bg-primary opacity-20"></div>
      <NavLink href={"/"}>WORK</NavLink>
      <div className="h-1 w-1 animate-pulse rounded-full bg-primary opacity-20"></div>
      <span className="text-xl font-bold text-primary">A.MOHAMMADI</span>
      <div className="h-1 w-1 animate-pulse rounded-full bg-primary opacity-20"></div>
      <NavLink href={"/"}>SHOP</NavLink>
      <div className="h-1 w-1 animate-pulse rounded-full bg-primary opacity-20"></div>
      <NavLink href={"/"}>CONTACTS</NavLink>
    </div>
  );
};

export default Navbar;
