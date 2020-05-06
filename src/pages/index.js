import React from "react"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import ProfileImage from "../images/profile-circle.png"

import "../scss/main.scss"

const IndexPage = () => (
  <div className="body" data-offset="0">
    <Layout>
      <section id="home">
        <div id="home-content">
          <div className="hover-wrap" id="hover-wrap-profile-pic">
            <img id="profile-pic" src={ProfileImage} alt="profile" />
            <div className="overlay" id="overlay-profile-pic">
              <p>Sadly, this dog isn't mine. But her name is also Lucia and I cried
            when I met her</p>
            </div>
          </div>
          <h1 style={{ paddingTop: '20px' }}>LUCIA GOMEZ</h1>
          <h2>Software Engineer</h2>
        </div>
      </section>
      <section id="about">
        <h1>About Me</h1>
      </section>
      <section id="portfolio">
        <h1>Things I've Made</h1>
        <Portfolio />
      </section>
    </Layout >
  </div>
)

export default IndexPage
