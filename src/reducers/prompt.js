const initialState = {
  value: '',
  caret: 0,
};

const promptReducer = (state = initialState, action, history) => {
  switch (action.type) {
    case 'EXECUTE_COMMAND': {
      return initialState;
    }
    case 'TYPE_COMMAND': {
      return {
        value: action.value,
        caret: state.caret + (action.value.length - state.value.length),
      };
    }
    case 'CARET_LEFT': {
      return {
        value: state.value,
        caret: state.caret - 1,
      };
    }
    case 'CARET_RIGHT': {
      return {
        value: state.value,
        caret: state.caret + 1,
      };
    }
    case 'HISTORY_PREVIOUS':case 'HISTORY_NEXT': {
      const value = history.commands[history.index];
      return {
        value,
        caret: value.length,
      };
    }
    default: {
      return state;
    }
  }
};

export { promptReducer as default, initialState };
