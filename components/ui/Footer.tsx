import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="divider mt-64"></div>
      <div className="container mx-auto flex flex-row pb-8 justify-center">
        <p className="opacity-40">
          © {new Date().getFullYear()} Amirreza Mohammadi Afzal. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
