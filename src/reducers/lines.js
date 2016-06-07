const initialState = [];

const linesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXECUTE_COMMAND': {
      return [...state, ...action.lines];
    }
    default: {
      return state;
    }
  }
};

export { linesReducer as default, initialState };
