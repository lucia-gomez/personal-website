import React from "react";
import AboutSection from "./about-section"
import AboutNumber from "./about-number"
import LangBars from "./lang-bars"

const About = () => (
  <div id='about-layout'>
    <AboutSection title='Hello world!' id='about-blurb'>
      <p>I'm a junior at Cornell University majoring in Compuer Science and Linguistics.
      I'm interested in the intersection of language and technology, and I'm constantly learning new
      languages, both human and programming. </p>
    </AboutSection>
    <AboutSection title='Languages & Tools'>
      <LangBars />
    </AboutSection>
    <AboutSection title='Numbers'>
      <AboutNumber number='10' text='years old when I started coding' />
      <AboutNumber number='2.5' text='calzones eaten per month, on average' />
    </AboutSection>
  </div>
)

export default About
