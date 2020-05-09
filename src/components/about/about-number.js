import React from "react"
import PropTypes from "prop-types"

const AboutNumber = ({ number, text }) => {
  return (
    <div className='about-number-item'>
      <p className='about-number'>{number}</p>
      <p>{text}</p>
    </div>
  )
}

AboutNumber.propTypes = {
  number: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
}

export default AboutNumber
