import React from "react";
import AboutSection from "./about-section"
import LangBars from "./lang-bars"
import Doughnut from "react-chartjs-2"

const chartData1 = {
  labels: ['Homework', 'Uber Eats', 'Re-reading Harry Potter', 'Pokemon Go', 'Building this website'],
  datasets: [
    {
      data: [5, 10, 15, 25, 45],
      label: 'Rainfall',
      backgroundColor: [
        '#A8222A',
        '#a8dadc',
        '#457b9d',
        '#1d3557',
        '#e63946'
      ],
      hoverBackgroundColor: [
        '#A8222A',
        '#a8dadc',
        '#457b9d',
        '#1d3557',
        '#e63946'
      ],
    }
  ]
}

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
    <AboutSection title="How I'm Spending My Quarantine">
      <Doughnut data={chartData1}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
        legend={{
          "display": true,
          "position": "bottom",
          "fullWidth": false,
          "reverse": false,
          "labels": {
            "fontColor": "#1d3557",
            "fontFamily": 'Roboto',
          }
        }} className='chart' />
    </AboutSection>
  </div>
)

export default About
