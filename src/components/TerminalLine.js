import React, { PropTypes } from 'react';

const TerminalLine = ({ color, value }) => (
  <li style={{ color }}>{value.replace(/ /g, '\u00a0')}</li>
);

TerminalLine.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TerminalLine;
