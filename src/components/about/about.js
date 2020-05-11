import React from "react";
import AboutSection from "./about-section"
import LangBars from "./lang-bars"
import LineGraph from "./line-graph"

const About = () => (
  <div>
    <AboutSection title='Hello world!' id='about-blurb'>
      <p>I'm a junior at Cornell University majoring in Computer Science and Linguistics.
      I'm interested in the intersection of language and technology, and I'm constantly learning new
      languages, both human and programming. </p>
    </AboutSection>
    <div id='about-layout'>
      <AboutSection title='Languages & Tools'>
        <p>I fell in love with programming when I was 10 years old, thanks
        to <a href='https://scratch.mit.edu/' target='_blank' rel='noopener noreferrer'>Scratch* </a>
        and <a href='https://www.codecademy.com/' target='_blank' rel='noopener noreferrer'>Codecademy</a>.
        My humble nerd beginnings include
        an <a href='https://scratch.mit.edu/projects/1554944/' target='_blank' rel='noopener noreferrer'>
            animated Star Trek fanfiction</a> in Scratch, which is somehow still getting views.
          Since then, I've gained experience with more ~legitimate~ programming languages and tools:</p>
        <LangBars />
        <p id='scratch-note'>* My Scratch experience surpasses this scale</p>
      </AboutSection>
      <AboutSection title="My Quarantine Activities Over Time">
        <LineGraph />
      </AboutSection>
    </div>
  </div>
)

export default About
