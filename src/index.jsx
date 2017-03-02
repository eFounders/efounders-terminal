import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

window.renderTerminal = (id) => {
  render(<App />, document.getElementById(id));
};

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('./index.html');
  //
  window.renderTerminal('react-root');
}
