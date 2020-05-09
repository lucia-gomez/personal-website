import React from "react"
import PropTypes from "prop-types"

const AboutSection = ({ title, children, id }) => {
  return (
    <div className='about-section' id={id}>
      <h4>{title}</h4>
      <main>{children}</main>
    </div>
  )
}

AboutSection.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default AboutSection
