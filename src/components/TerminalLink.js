import React, { PropTypes } from 'react';

const styles = {
  link: {
    color: 'lime',
  },
};

const TerminalLink = ({ link }) => (
  <li><a href={link.href} style={styles.link}>{link.href}</a></li>
);

TerminalLink.propTypes = {
  link: PropTypes.object.isRequired,
};

export default TerminalLink;
