import React from 'react'
import HeroTitle from './HeroTitle';

interface Props {
    
}

const ProjectSection = (props: Props) => {
    return (
      <div className="relative z-20 container mx-auto flex h-screen flex-col items-center justify-center">
        <HeroTitle
          title="MY PROJECTS"
          subtitle="Some Of My Projects"
          description="You can see some of my projects I have done in the past."
        />
        <div className="mt-16 grid w-full grid-cols-4 gap-8">
         
        </div>
      </div>
    );
}

export default ProjectSection
