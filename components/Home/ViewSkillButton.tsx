import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Icon from "../ui/Icon";

gsap.registerPlugin(ScrollToPlugin);



const ViewSkillButton: React.FC = ({

}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: { y: "#skills", offsetY: 100 } });
  };

  return (
    <button className="btn btn-primary btn-soft px-16" onClick={handleClick}>
      View skills
      <Icon icon="mynaui:arrow-up-right" width={24} />
    </button>
  );
};

export default ViewSkillButton;
