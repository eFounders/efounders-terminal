import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { initialState } from './reducers';
import { typeCommand, executeCommand } from './actions';
import Main from './components/Main';
import './styles/style.scss';

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('./index.html');
}

const reduxDevToolsExtension = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(rootReducer, initialState, compose(reduxDevToolsExtension));
store.dispatch(typeCommand('efounders welcome'));
store.dispatch(executeCommand('efounders welcome'));
store.dispatch(typeCommand('efounders help'));
store.dispatch(executeCommand('efounders help'));

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

render(<App />, document.getElementById('react-root'));
