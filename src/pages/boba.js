import React from "react";
import Layout from "../components/layout";
import tableau from "tableau-api";

class Boba extends React.Component {

  componentDidMount() {
    this.initializeViz();
  }

  initializeViz() {
    var placeholderDiv1 = document.getElementById("tableauViz1");
    var placeholderDiv2 = document.getElementById("tableauViz2");
    var url1 = "https://public.tableau.com/views/BubbleTeaBobaWordChoice/Sheet1?:display_count=y&:origin=viz_share_link";
    var url2 = "https://public.tableau.com/views/BubbleTeaBobaWordChoice/Heatmaps?:display_count=y&:origin=viz_share_link";
    var options = {
      hideTabs: true,
      hideToolbar: true,
    };
    this.viz1 = new window.tableau.Viz(placeholderDiv1, url1, options);
    this.viz2 = new window.tableau.Viz(placeholderDiv2, url2, options);
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
          <div className='tableauPlaceholder' id="tableauViz1"></div>
          <div className='tableauPlaceholder' id="tableauViz2"></div>
        </section>
      </Layout>
    );
  }
}

export default Boba
