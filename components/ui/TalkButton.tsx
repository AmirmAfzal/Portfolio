import Link from "next/link";
import React from "react";
import Icon from "./Icon";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

const TalkButton = (props: Props) => {
  return (
    <Link
      href={"/"}
      className={twMerge(
        "btn btn-primary bg-gradient-to-r from-primary to-secondary px-16 hover:shadow-lg hover:shadow-primary/40",
        props.className
      )}
    >
      <Icon icon="mynaui:sparkles-solid" width={24} />
      Let's talk
    </Link>
  );
};

export default TalkButton;
