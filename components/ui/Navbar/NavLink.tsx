import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
}

const NavLink = (props: Props) => {
  return (
    <Link
      href={props.href}
      className="relative z-10 text-lg font-medium"
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
