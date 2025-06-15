import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Icon from "../ui/Icon";

interface Props {
  className?: string;
}

const TalkButton = (props: Props) => {
  return (
    <Link
      href={"/"}
      className={twMerge(
        "btn btn-primary from-primary to-secondary  px-16 ",
        props.className
      )}
    >
      <Icon icon="mynaui:sparkles-solid" width={24} />
      Let's talk
    </Link>
  );
};

export default TalkButton;
