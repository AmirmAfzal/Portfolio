import React from "react";
import { twMerge } from "tailwind-merge";
import { scrollToHash } from "@/lib/scroll";
import Icon from "../ui/Icon";

interface Props {
  className?: string;
}

const TalkButton = (props: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToHash("#contact");
  };
  return (
    <button
      onClick={handleClick}
      className={twMerge(
        "btn btn-primary from-primary to-secondary px-16 z-50",
        props.className
      )}
    >
      <Icon icon="mynaui:sparkles-solid" width={24} />
      Let&apos;s talk
    </button>
  );
};

export default TalkButton;
