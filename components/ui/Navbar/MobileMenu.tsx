"use client";
import React, { useState } from "react";
import Link from "next/link";
import { scrollToHash } from "@/lib/scroll";
import Icon from "../Icon";

const LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (href: string) => {
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <div className="relative lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="btn btn-ghost btn-circle z-40 flex items-center justify-center"
      >
        <Icon
          icon={open ? "lucide:x" : "lucide:menu"}
          width={28}
          height={28}
        />
      </button>

      {open && (
        <div className="bg-base-200 absolute right-0 top-14 z-50 flex w-56 flex-col gap-1 rounded-2xl border border-base-content/10 p-2 shadow-xl">
          {LINKS.map((link, index) => (
            <button
              key={index}
              onClick={() => handleScroll(link.href)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
              <Icon icon="mynaui:arrow-up-right" width={18} height={18} />
            </button>
          ))}
          <Link
            href="/notes"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition hover:bg-primary/10 hover:text-primary"
          >
            Notes
            <Icon icon="mynaui:arrow-up-right" width={18} height={18} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
