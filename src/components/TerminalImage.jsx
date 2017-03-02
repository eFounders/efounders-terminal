import React, { PropTypes } from 'react';

const TerminalImage = props => (
  <li>
    <img src={props.image.src} alt={props.image.alt} style={props.image.style} />
  </li>
);

TerminalImage.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object,
  }).isRequired,
};

export default TerminalImage;
