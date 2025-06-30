import React from "react";

import ContactForm from "./ContactForm";
import HeroTitle from "./HeroTitle";

const ContactSection = () => {
  return (
    <div className="relative z-20 container mx-auto mt-32 flex flex-col items-center">
      <HeroTitle
        title="CONTACT ME"
        subtitle="Let's work together"
        description="I'm always open to new opportunities and discussions."
      />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
