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
      className="relative z-10 text-lg font-medium transition-[color] ease-in-out before:absolute before:left-1/2 before:top-1/2 before:z-0 before:h-12 before:w-12 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-secondary before:opacity-0 before:blur-2xl before:transition-[opacity] before:duration-300 before:ease-out before:content-[''] hover:text-secondary hover:before:opacity-40"
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
