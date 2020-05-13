import React from 'react'
import PropTypes from 'prop-types'

class HoverOverlay extends React.Component {
  render() {
    return (
      <div className="overlay" id={this.props.id}>{this.props.children}</div>
    );
  }
}

HoverOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}

export default HoverOverlay