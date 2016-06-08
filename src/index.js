import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';
import './styles/style.scss';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('./index.html');
}

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

render(<App />, document.getElementById('react-root'));
