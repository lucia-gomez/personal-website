import React from "react"

import GalleryItem from './gallery-item'

import ImageSignSearch from "../../images/portfolio/signSearch.png"
import ImageWebsite from "../../images/portfolio/website.png"
import ImageSubreddit from "../../images/portfolio/subreddit.png"
import ImageBoba from "../../images/portfolio/boba-map.png"
import ImageCAC from "../../images/portfolio/CAC-cards.png"
import ImageSpaceBears from "../../images/portfolio/spacebears2.png"

const projects = [
  {
    src: ImageSignSearch,
    title: "Sign Search",
    caption: "Chrome extension for convenient look-up of words in American Sign Language",
    tools: "React, Javascript",
    link: "/signSearch",
  },
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
    tools: "React, GatsbyJS, Sass",
    link: "https://github.com/lucia-gomez/personal-website",
    customSize: "85%",
  },
  {
    src: ImageBoba,
    title: "Spill the Tea",
    caption: "Interactive data visualizations for socio-linguistics research on the use of 'bubble tea' vs 'boba'",
    tools: "Tableau",
    link: "/boba",
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

const Portfolio = () => {
  return (
    <div className="gallery-flex-container">
      {projects.map((project, key) => (
        <GalleryItem
          image={project.src}
          caption={project.caption}
          title={project.title}
          tools={project.tools}
          link={project.link}
          backgroundSize={project.customSize}
          key={key} />
      ))}
    </div>
  );
}

export default Portfolio
