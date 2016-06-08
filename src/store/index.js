import { createStore, compose } from 'redux';
import rootReducer, { initialState } from '../reducers';
import { typeCommand, executeCommand } from '../actions';

const reduxDevToolsExtension = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(rootReducer, initialState, compose(reduxDevToolsExtension));
const initialCommands = ['efounders logo', 'efounders help'];
for (const command of initialCommands) {
  store.dispatch(typeCommand(command));
  store.dispatch(executeCommand(command));
}

export default store;
