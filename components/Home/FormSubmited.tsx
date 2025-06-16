"use client";
import React from "react";
import Lottie from "lottie-react";
import SubmitAnimation from "@/public/animations/email-sent.json";
interface Props {
  name: string;
}

const FormSubmited = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Lottie
        animationData={SubmitAnimation}
        loop={false}
        className="h-64 w-64"
      />
      <span className="text-center">
        Thank you <span className="text-primary font-medium">{props.name}</span> for contacting me,<br/> I will contact
        you back.
      </span>
    </div>
  );
};

export default FormSubmited;
