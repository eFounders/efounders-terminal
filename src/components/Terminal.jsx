import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import TerminalLine from './TerminalLine';
import TerminalLink from './TerminalLink';
import TerminalImage from './TerminalImage';
import TerminalPrompt from './TerminalPrompt';

class Terminal extends Component {
  static propTypes = {
    lines: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  componentDidUpdate() {
    const node = findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }
  onClick = () => {
    this.prompt.input.focus();
  };
  render() {
    const { lines } = this.props;
    return (
      <div className="l-console" onClick={this.onClick}>
        <ul className="l-console__lines">
          <li>
            <div className="l-console__ascii">
              <div className="l-console__ascii-logo">
                <span>    ▄▄▓▓▓▓▓▓▓▓▄▄    </span>
                <span>  ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄  </span>
                <span> ▓▓▓▓▓▓▀▀  ▀▀▓▓▓▓▓▓ </span>
                <span>▓▓▓▓▓▀  ▄▄▄   ▀▓▓▓▓▓</span>
                <span>▓▓▓▓▓   ▓  ▄▄█▀▓▓▓▓▓</span>
                <span>█▓▓▓▓▄  ▀▀▀▀  ▄▓▓▓▓▓</span>
                <span> ▓▓▓▓▓▓▄▄  ▄▄▓▓▓▓▓▓ </span>
                <span>  ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀  </span>
                <span>    ▀▀█▓▓▓▓▓▓█▀▀    </span>
              </div>
              <div className="l-console__ascii-title">
                <span> _   _         _             _                 _                                                  _                             </span>
                <span>| | | |       | |           | |               | |                                                | |                            </span>
                <span>| |_| |  ___  | |_      ___ | |_   __ _  _ __ | |_  _   _  _ __   ___      _ __    ___   ___   __| |                            </span>
                <span>|  _  | / _ \ | __|    / __|| __| / _` || '__|| __|| | | || '_ \ / __|    | '_ \  / _ \ / _ \ / _` |                            </span>
                <span>| | | || (_) || |_     \__ \| |_ | (_| || |   | |_ | |_| || |_) |\__ \    | | | ||  __/|  __/| (_| |                            </span>
                <span>\_| |_/ \___/  \__|    |___/ \__| \__,_||_|    \__| \__,_|| .__/ |___/    |_| |_| \___| \___| \__,_|                            </span>
                <span> _                                                _       | |           _                                                       </span>
                <span>| |                                              | |      |_|          | |                                                      </span>
                <span>| |__   _   _  _ __    __ _  _ __  _   _       __| |  ___ __   __  ___ | |  ___   _ __    ___  _ __  ___                        </span>
                <span>| '_ \ | | | || '_ \  / _` || '__|| | | |     / _` | / _ \\ \ / / / _ \| | / _ \ | '_ \  / _ \| '__|/ __|                       </span>
                <span>| | | || |_| || | | || (_| || |   | |_| |    | (_| ||  __/ \ V / |  __/| || (_) || |_) ||  __/| |   \__ \                       </span>
                <span>|_| |_| \__,_||_| |_| \__, ||_|    \__, |     \__,_| \___|  \_/   \___||_| \___/ | .__/  \___||_|   |___/                       </span>
                <span>                       __/ |        __/ |                                        | |                                            </span>
                <span>                      |___/        |___/                                         |_|                                            </span>
              </div>
            </div>
          </li>
          {lines.map((line, index) => {
            if (line.href) {
              return <TerminalLink key={index} link={line} />;
            }
            if (line.src) {
              return <TerminalImage key={index} image={line} />;
            }
            const color = line.color ? line.color : '';
            const value = line.color ? line.value : line;
            return <TerminalLine key={index} color={color} value={value} />;
          })}
        </ul>
        <TerminalPrompt ref={(component) => { this.prompt = component; }} {...this.props} />
      </div>
    );
  }
}

export default Terminal;
