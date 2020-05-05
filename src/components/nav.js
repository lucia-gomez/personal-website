import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

class CustomNav extends React.Component {
  constructor(props) {
    super(props);
    this.sections = [
      { name: "Home", link: "/" }, { name: "About", link: "/#about" },
      { name: "Portfolio", link: "/#portfolio" },
    ];

    this.icons = [
      {
        icon: faGithub,
        link: "https://github.com/lucia-gomez",
      },
      {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/lucia-g-22115110b/",
      }
    ];
  }

  render() {
    return (
      <Navbar id="main-navbar" className="navbar navbar-dark" expand="sm" fixed="top" >
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
          <Scrollspy componentTag='div' defaultActiveKey="./#home"
            className="navbar-nav mr-auto" items={['home', 'about', 'portfolio']}
            currentClassName='isCurrent'>
            {this.sections.map((section, key) => (
              <Nav.Item as="li" key={key}>
                <Nav.Link as="a" href={section.link}>{section.name}</Nav.Link>
              </Nav.Item>
            ))}
          </Scrollspy>
          <Nav>
            {this.icons.map((icon, key) => (
              <Nav.Link key={key} href={icon.link}>
                <FontAwesomeIcon icon={icon.icon} size={'lg'} />
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    );
  }
}

export default CustomNav