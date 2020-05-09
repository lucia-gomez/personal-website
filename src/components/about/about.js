import React from "react";
import AboutSection from "./about-section"
import LangBars from "./lang-bars"
import Doughnut from "react-chartjs-2"

const chartData1 = {
  labels: ['Homework', 'Uber Eats', 'Re-reading Harry Potter', 'Pokemon Go', 'Building this website'],
  datasets: [
    {
      data: [5, 10, 15, 25, 45],
      backgroundColor: [
        '#f7868e',
        '#a8dadc',
        '#457b9d',
        '#1d3557',
        '#e63946'
      ],
      hoverBackgroundColor: [
        '#faafb4',
        '#bae4e6',
        '#5190b8',
        '#304f7a',
        '#eb6570'
      ],
    }
  ]
}

const chart1 = (<Doughnut data={chartData1}
  options={{
    aspectRatio: 1,
    responsive: true,
  }}
  legend={{
    "display": false,
    "position": "right",
    "fullWidth": false,
    "reverse": true,
    "labels": {
      "fontColor": "#1d3557",
      "fontFamily": 'Roboto',
    }
  }}
  height={null}
  width={null} />);

function buildLegend(chart) {
  const data = chart.props.data
  const items = [];
  for (var i = 0; i < data.datasets[0].data.length; i++) {
    items.push(
      <div style={{ backgroundColor: data.datasets[0].backgroundColor[i] }} className='legend-item' key={i}>
        {data.labels[i] ? data.labels[i] : ''}</div>
    )
  }
  items.reverse();
  return (
    <div id='chart1-legend'>
      {items}
    </div>
  );
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
      <div className='chart'>{chart1}</div>
      {buildLegend(chart1)}
    </AboutSection>
  </div>
)

export default About
