import React from "react"
import { ProgressBar } from 'react-bootstrap'

class LangBars extends React.Component {
  constructor(props) {
    super(props);
    this.bars = [
      { name: "Python", progress: "95", }, { name: "Java", progress: "95", },
      { name: "OCaml", progress: "80", }, { name: "HTML/CSS", progress: "70", },
      { name: "Sass", progress: "50", }, { name: "React", progress: "50", },
    ];
  }

  render() {
    return (
      <div id='lang-bars-placeholder'>
        {this.bars.map((bar, key) => (
          <div className='lang-progress' key={key}>
            {/* <p className="progress-label">{bar.name}</p> */}
            <ProgressBar now={bar.progress} label={bar.name} key={key} />
          </div>
        ))}
      </div>
    );
  }
}

export default LangBars