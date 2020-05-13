import React from "react"

import Hoverable from "../components/hoverable"
import HoverOverlay from "../components/hoverOverlay"
import Layout from "../components/layout"
import About from "../components/about/about"
import Portfolio from "../components/portfolio/portfolio"
import Timeline from "../components/timeline"

import ProfileImage from "../images/profile-circle.png"

import "../scss/main.scss"

const IndexPage = () => (
  <div className="body">
    <Layout>
      <section id="home" className='bg-image'>
        <div className='section-content'>
          <Hoverable id="hover-wrap-profile-pic">
            <img id="profile-pic" src={ProfileImage} alt="profile" />
            <HoverOverlay id="overlay-profile-pic">
              <p>Sadly, this dog isn't mine. But her name is also Lucia and I cried
            when I met her</p>
            </HoverOverlay>
          </Hoverable>
          <h1 style={{ paddingTop: '20px' }}>LUCIA GOMEZ</h1>
          <h2>Developer</h2>
        </div>
      </section>
      <section id="about">
        <h1>About Me</h1>
        <About />
      </section>
      <section id="portfolio" className='bg-image'>
        <h1>Things I've Made</h1>
        <Portfolio />
      </section>
      <section id='experience' className='bg-image'>
        <div className='section-content'>
          <h1>Experience</h1>
          <p>What have I been up to for the past few years?</p>
          <Timeline />
        </div>
      </section>
    </Layout >
  </div>
)

export default IndexPage
