import { createStore, compose } from 'redux';
import rootReducer, { initialState } from '../reducers';
import { typeCommand, executeCommand } from '../actions';

const reduxDevToolsExtension = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(rootReducer, initialState, compose(reduxDevToolsExtension));
store.dispatch(typeCommand('efounders welcome'));
store.dispatch(executeCommand('efounders welcome'));
store.dispatch(typeCommand('efounders help'));
store.dispatch(executeCommand('efounders help'));

export default store;
