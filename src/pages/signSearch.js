import React from "react";
import Layout from "../components/layout";
import { Button } from "react-bootstrap"
import Mockup1 from "../images/portfolio/signSearch.png"
import Mockup2 from "../images/portfolio/signSearch2.png"
import Mockup3 from "../images/portfolio/signSearch3.png"
import Mockup4 from "../images/portfolio/signSearch4.png"
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

class SignSearch extends React.Component {

  Item(img) {
    return (
      <Paper>
        <img src={img} alt="Sign Search mock-up" />
      </Paper>
    )
  }

  render() {
    return (
      <Layout>
        <section id="sign-search">
          <h1>Sign Search</h1>
          <p id="boba-description">A Google Chrome extension for convenient look-up of words in American Sign Language.
          Highlight a word on any page of enter a search directly into the extension to learn multiple ways of signing it in ASL</p>
          <div className='flex-horizontal button-group'>
            <a href='https://github.com/lucia-gomez/Sign-Search' target='_blank' rel="noreferrer"><Button>View on Github</Button></a>
            <a href='https://chrome.google.com/webstore/detail/sign-search/gniinlnnpjdbeleojkghgdccpapkapma' target='_blank' rel="noreferrer"><Button>Install</Button></a>
          </div>
          <div className='custom-carousel'>
            <Carousel navButtonsAlwaysVisible fullHeightHover interval={6000}>
              {this.Item(Mockup2)}
              {this.Item(Mockup1)}
              {this.Item(Mockup3)}
              {this.Item(Mockup4)}
            </Carousel>
          </div>
        </section>
      </Layout>
    );
  }
}

export default SignSearch