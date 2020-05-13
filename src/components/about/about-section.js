import React from "react"
import PropTypes from "prop-types"

class AboutSection extends React.Component {
  render() {
    return (
      <div className={this.props.showbg ? 'about-section bg-image' : 'about-section'} id={this.props.id}>
        <h4>{this.props.title}</h4>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showbg: PropTypes.bool,
  id: PropTypes.string,
}

export default AboutSection
