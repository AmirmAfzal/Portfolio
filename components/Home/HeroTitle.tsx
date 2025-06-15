import React from 'react'

interface Props {
    title: string
    subtitle: string
    description: string
}

const HeroTitle = (props: Props) => {
    return (
      <div className="flex flex-col items-center">
        <span className="text-primary tracking-[0.3em]">{props.title}</span>
        <h2 className="mt-4 text-4xl font-bold">{props.subtitle}</h2>
        <p className="text-base-content/60 mt-4 text-sm">
          {props.description}
        </p>
      </div>
    );
}

export default HeroTitle
