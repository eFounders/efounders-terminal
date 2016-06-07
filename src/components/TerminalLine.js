import React, { PropTypes } from 'react';

const TerminalLine = ({ line }) => (
  <li>{line.replace(/ /g, '\u00a0')}</li>
);

TerminalLine.propTypes = {
  line: PropTypes.string.isRequired,
};

export default TerminalLine;
