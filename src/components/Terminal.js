import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import TerminalLine from './TerminalLine';
import TerminalLink from './TerminalLink';
import TerminalPrompt from './TerminalPrompt';

class Terminal extends Component {
  propTypes = {
    lines: PropTypes.array.isRequired,
  };
  componentDidUpdate() {
    const node = findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }
  onClick = () => {
    const { prompt } = this.refs;
    const { input } = prompt.refs;
    input.focus();
  };
  render() {
    const { lines } = this.props;
    return (
      <div className="l-console" ref="terminal" onClick={this.onClick}>
        <ul className="l-console__lines">
          {lines.map((line, index) => {
            if (line.href) {
              return <TerminalLink key={index} link={line} />;
            }
            const color = line.color ? line.color : '';
            const value = line.color ? line.value : line;
            return <TerminalLine key={index} color={color} value={value} />;
          })}
        </ul>
        <TerminalPrompt ref="prompt" {...this.props} />
      </div>
    );
  }
}

export default Terminal;
