import React from "react";
import Layout from "../components/layout";
import { Button } from "react-bootstrap"

class Boba extends React.Component {

  render() {
    return (
      <Layout>
        <section id="boba">
          <h1>Spill the Tea</h1>
          <p id="boba-description">What do you call this drink? I call it 'bubble tea' but it goes by many names.
          A friend and I decided to investigate this variation for a
          socio-linguistics research project. We conducted a study on the social factors that could influence word choice,
        and surveyed over 200+ participants. Explore the results on Tableau, with interactive data visualizations.</p>
          <div className='flex-horizontal' id='boba-buttons'>
            <a href='https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Sheet1' target='_blank' rel="noreferrer"><Button>Demo choropleth maps</Button></a>
            <a href='https://public.tableau.com/profile/lucia.gomez#!/vizhome/BubbleTeaBobaWordChoice/Heatmaps' target='_blank' rel="noreferrer"><Button>Demo heatmaps</Button></a>
          </div>
        </section>
      </Layout>
    );
  }
}

export default Boba
