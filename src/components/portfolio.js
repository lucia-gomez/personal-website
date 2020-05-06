/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import ImageWebsite from "../images/website.png"
import ImageSubreddit from "../images/subreddit.png"
import ImageBoba from "../images/boba-map.png"
import ImageCAC from "../images/CAC-cards.png"
import ImageSpaceBears from "../images/spacebears2.png"

const projects = [
  {
    src: ImageSubreddit,
    title: "Subreddit Recommender",
    caption: "A search engine to help navigate Reddit's thousands of subreddits. Group project for Cornell's CS4300",
    tools: "Python, Flask, HTML/CSS, Bootstrap, NLTK",
    link: "https://github.com/lucia-gomez/cs4300sp2020-ael226-ilg7-nr292-vmw9-zjs28",
  },
  {
    src: ImageWebsite,
    title: "Personal Website",
    caption: "This one! That you're on right now!",
    tools: "React, HTML/CSS, Bootstrap, Sass",
    link: "https://github.com/lucia-gomez/lucia-gomez.github.io",
    customSize: "85%",
  },
  {
    src: ImageBoba,
    title: "Spill the Tea",
    caption: "Interactive data visualizations for socio-linguistics research on the use of 'bubble tea' vs 'boba'",
    tools: "Tableau",
    link: "",
  },
  {
    src: ImageCAC,
    title: "Cards Against Cornellians",
    caption: "A text-based Cards Against Humanity engine with lots of ASCII art. Supports local and networked gameplay",
    tools: "Python",
    link: "",
  },
  {
    src: ImageSpaceBears,
    title: "Space Bears",
    caption: "My first experience with virtual reality. Explore a space station manned by teddy bears! Group project for Cornell's CS1620",
    tools: "Unreal Engine",
    link: "",
  },
];

function getStyle(project) {
  return {
    // backgroundImage: 'url(../../static/images/' + project.src + ')',
    backgroundImage: `url(${project.src})`,
    backgroundSize: project.customSize
  };
}

const Portfolio = () => {
  return (
    <div className="gallery-flex-container">
      {projects.map((project, key) => (
        <div className="hover-wrap" key={key}>
          <a href={project.link}>
            <div className="gallery-item">
              <div className="gallery-image" style={getStyle(project)} ></div>
              <div className="gallery-text">
                <h5>{project.title}</h5>
              </div>
              <div className="overlay">
                <p>{project.caption}<br /><br />{project.tools}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio
