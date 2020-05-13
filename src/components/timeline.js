import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import facebook from "../images/timeline/facebook.svg"
import cornell from "../images/timeline/cornell.svg"

const FacebookIcon = <img src={facebook} alt='facebook' style={{ width: 'inherit' }} />;
const CornellIcon = <img src={cornell} alt='cornell logo' style={{ width: 'inherit' }} />;

class Timeline extends React.Component {
  render() {
    return (
      <VerticalTimeline className="vertical-timeline-custom-line">
        <VerticalTimelineElement
          date='June 2020-present'
          icon={FacebookIcon}>
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Facebook</h4>
          <p>Team TBD</p>
        </VerticalTimelineElement >
        <VerticalTimelineElement
          date='Aug. 2019-present'
          icon={CornellIcon}>
          <h3 className="vertical-timeline-element-title">Co-President</h3>
          <h4 className="vertical-timeline-element-subtitle">Cornell University Deaf Awareness Project</h4>
          <p>Description</p>
        </VerticalTimelineElement >
        <VerticalTimelineElement
          date='Summer 2019'
          icon={FacebookIcon}>
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Facebook</h4>
          <p>Again!</p>
        </VerticalTimelineElement >
        <VerticalTimelineElement
          date='Summer 2018'
          icon={FacebookIcon}>
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Aurora Flight Sciences</h4>
          <p>Description</p>
        </VerticalTimelineElement >
      </VerticalTimeline >
    );
  }
}

export default Timeline