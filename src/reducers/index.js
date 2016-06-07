import linesReducer, { initialState as linesInitialState } from './lines';
import historyReducer, { initialState as historyInitialState } from './history';
import promptReducer, { initialState as promptInitialState } from './prompt';

const initialState = {
  lines: linesInitialState,
  history: historyInitialState,
  prompt: promptInitialState,
};

const rootReducer = (state = initialState, action) => {
  const lines = linesReducer(state.lines, action);
  const history = historyReducer(state.history, action);
  const prompt = promptReducer(state.prompt, action, history);
  return { lines, history, prompt };
};

export { rootReducer as default, initialState };
