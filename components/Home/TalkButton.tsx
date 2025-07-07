import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { twMerge } from "tailwind-merge";
import Icon from "../ui/Icon";

gsap.registerPlugin(ScrollToPlugin);

interface Props {
  className?: string;
}

const TalkButton = (props: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: { y: "#contact", offsetY: 200 } });
  };
  return (
    <button
      onClick={handleClick}
      className={twMerge(
        "btn btn-primary from-primary to-secondary px-16",
        props.className
      )}
    >
      <Icon icon="mynaui:sparkles-solid" width={24} />
      Let&apos;s talk
    </button>
  );
};

export default TalkButton;
