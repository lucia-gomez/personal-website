import React from "react";
import Layout from "../components/layout";

class Boba extends React.Component {

  url1 = "https://public.tableau.com/views/BubbleTeaBobaWordChoice/Sheet1?:display_count=y&:origin=viz_share_link";
  url2 = "https://public.tableau.com/views/BubbleTeaBobaWordChoice/Heatmaps?:display_count=y&:origin=viz_share_link";

  renderTableau(url) {
    if (typeof window !== `undefined`) {
      var Tableau = require("tableau-react");
      return <div className='tableauDemo'><Tableau url={url} /></div>
    }
    return null;
  }

  render() {
    return (
      <Layout>
        <section id="boba">
          <h1>Spill the Tea</h1>
          <h2 style={{ marginBottom: '30px' }}>Survey Data Visualization</h2>
          <p id="boba-description">What do you call this drink? I call it 'bubble tea' but it goes by many names,
          similar to the famous soda/pop/coke divide. A friend and I decided to investigate this variation for a
          socio-linguistics research project. We conducted a study on the social factors that could influence word choice,
        and surveyed over 200+ participants. The data below summarizes the survey results. </p>
        </section>
        <section id="boba-demos">
          {this.renderTableau(this.url1)}
          {this.renderTableau(this.url2)}
        </section>
      </Layout>
    );
  }
}

export default Boba
