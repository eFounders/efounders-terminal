const initialState = {
  commands: [''],
  index: 0,
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE_COMMAND': {
      const commands = [
        ...state.commands.slice(0, state.index),
        action.value,
        ...state.commands.slice(state.index + 1, state.commands.length),
      ];
      return {
        commands,
        index: state.index,
      };
    }
    case 'EXECUTE_COMMAND': {
      const command = state.commands[state.index];
      const previousHistory = state.commands.slice(0, state.commands.length - 1);
      const commands = command ? [...previousHistory, command, ''] : [...state.commands];
      return {
        commands,
        index: commands.length - 1,
      };
    }
    case 'HISTORY_PREVIOUS': {
      return {
        commands: [...state.commands],
        index: state.index - 1,
      };
    }
    case 'HISTORY_NEXT': {
      return {
        commands: [...state.commands],
        index: state.index + 1,
      };
    }
    default: {
      return state;
    }
  }
};

export { historyReducer as default, initialState };
