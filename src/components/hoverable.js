import React from "react"
import PropTypes from "prop-types"

class Hoverable extends React.Component {
  render() {
    return (
      <div className="hover-wrap" id={this.props.id}>
        {this.props.children}
      </div >);
  }
}

Hoverable.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}

export default Hoverable