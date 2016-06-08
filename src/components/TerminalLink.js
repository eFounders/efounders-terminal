import React, { PropTypes } from 'react';

const TerminalLink = ({ link }) => (
  <li><a href={link.href} className="l-console__link">{link.href}</a></li>
);

TerminalLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default TerminalLink;
