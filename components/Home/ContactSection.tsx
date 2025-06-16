import React from 'react'
import HeroTitle from './HeroTitle';
import ContactForm from './ContactForm';

interface Props {
    
}

const ContactSection = (props: Props) => {
    return (
      <div className="relative z-20 container mx-auto mt-32 flex flex-col items-center">
        <HeroTitle
          title="CONTACT ME"
          subtitle="Let's work together"
          description="I'm always open to new opportunities and discussions."
        /> 
       <ContactForm/>
      </div>
    );
}

export default ContactSection
