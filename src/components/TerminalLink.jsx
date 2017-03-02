import React, { PropTypes } from 'react';

const TerminalLink = props => (
  <li>
    <a
      href={props.link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="l-console__link"
    >
      {props.link.href}
    </a>
  </li>
);

TerminalLink.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string,
  }).isRequired,
};

export default TerminalLink;
