import React from 'react'
import PropTypes from 'prop-types'

import Hoverable from '../hoverable'
import HoverOverlay from '../hoverOverlay'

class GalleryItem extends React.Component {
  render() {
    return (
      <Hoverable>
        <div className="gallery-item">
          <div className="gallery-image" style={{
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: this.props.backgroundSize
          }} ></div>
          <a href={this.props.link}>
            <div className="gallery-text"><h5>{this.props.title}</h5></div>
          </a>
          <HoverOverlay>
            <p>{this.props.caption}<br /><br />{this.props.tools}</p>
          </HoverOverlay>
        </div>
      </Hoverable>);
  }
}

GalleryItem.propTypes = {
  backgroundSize: PropTypes.string,
  caption: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
}

export default GalleryItem