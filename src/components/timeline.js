import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import facebook from "../images/timeline/facebook.svg"
import cornell from "../images/timeline/cornell.svg"
import cornellCIS from "../images/timeline/cornellCIS.jpg"
import aurora from "../images/timeline/aurora.png"

const FacebookIcon = <img src={facebook} alt='Facebook logo' style={{ width: 'inherit' }} />;
const CornellIcon = <img src={cornell} alt='Cornell logo' style={{ width: 'inherit' }} />;
const CornellCISIcon = <img src={cornellCIS} alt='Cornell CIS logo' style={{ width: 'inherit', borderRadius: '40px' }} />;
const AuroraIcon = <img src={aurora} alt='Aurora logo' style={{ width: 'inherit', borderRadius: '40px' }} />;

class Timeline extends React.Component {
  render() {
    return (
      <VerticalTimeline className="vertical-timeline-custom-line">
        <VerticalTimelineElement
          date='June 2020-present'
          icon={FacebookIcon}>
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Facebook</h4>
          <p>TBD</p>
        </VerticalTimelineElement >
        <VerticalTimelineElement
          date='Aug. 2019-present'
          icon={CornellIcon}>
          <h3 className="vertical-timeline-element-title">Co-President</h3>
          <h4 className="vertical-timeline-element-subtitle">Cornell University Deaf Awareness Project</h4>
          <p>As Co-President, I lead weekly meetings and oversee other board members as we plan events to raise awareness of and educate about the Deaf community and Deaf culture.
          Member since Jan. 2018, and previously served as Events Coordinator.
            We successfully advocated for the establishment of an <a href='https://cornellsun.com/2018/11/02/american-sign-language-courses-will-be-offered-as-soon-as-fall-2019/'>ASL curriculum at Cornell! </a></p>
        </VerticalTimelineElement >
        <VerticalTimelineElement
          date='Fall 2018-present'
          icon={CornellCISIcon}>
          <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">CS Department, Cornell University</h4>
          <p>As a TA/Consultant, my responsibilities have included leading a recitation section, organizing assignments, holding weekly office hours, and grading.
            Most importantly, I instruct students on effective programming practices, debugging, and concepts in Java, Python, and OCaml. <br /><br />
            <a href='https://www.cs.cornell.edu/courses/cs2112/2019fa/'>CS 2112</a>- Object-Oriented Data Structures Honors- 2 semesters, received TA award <br />
            <a href='https://www.cs.cornell.edu/courses/cs4700/2019sp/'>CS 4700</a>- Foundations of Artificial Intelligence- 1 semester <br />
            <a href='http://www.cs.cornell.edu/courses/cs3110/2020sp/'>CS 3110</a>- Functional Programming- 1 semester</p>
        </VerticalTimelineElement >
        <VerticalTimelineElement
          date='Summer 2019'
          icon={FacebookIcon}>
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Facebook</h4>
          <p>Full-stack web developer on the Integrity Review Platform Accuracy team.
            My project involved implementing a web app using Hack, React, and Redux to provide feedback to Facebook's content reviewers.</p>
        </VerticalTimelineElement >
        <VerticalTimelineElement
          date='Summer 2018'
          icon={AuroraIcon}>
          <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Aurora Flight Sciences Corporation</h4>
          <p>Created Java UIs to pilot and communicate with an unmanned aircraft.
          The UIs were created with a newly introduced framework, which I was the first to adopt within the company.
          I created documentation, setup guides, and trained other employees on the framework.
          </p>
        </VerticalTimelineElement >
      </VerticalTimeline >
    );
  }
}

export default Timeline