import React from "react";
import AboutSection from "./about-section"
import LangBars from "./lang-bars"
import LineGraph from "./line-graph"

const About = () => (
  <div>
    <AboutSection title='Hello world!' id='about-blurb'>
      <p>I'm a senior at <span>Cornell University</span> majoring in Computer Science and Linguistics (graduating in May, 2021).
      I'm passionate about the <span>intersection of language and technology</span>, as well as augmented and virtual reality.
      I enjoy learning new languages, both human and programming, because doing so lets me see the world in new ways.
      For the past few years, I've been interested in <span>American Sign Language</span> and the challenges associated with machine translation-
      I was featured <a href='https://www.leadwithlanguages.org/2019/03/14/ask-away-5-questions-cornell-computer-science-linguistics-major-mixing-asl-innovation/'>here</a>.
      I have at least one ABBA song stuck in my head at any given time.</p>
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
