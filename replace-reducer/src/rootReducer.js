
const rootReducerInitialState = {
  rootA: 1,
  rootB: 1
}

export default (state = rootReducerInitialState, action) => {
  switch (action.type) {
    case 'INC_A':
      return { ...state, rootA: state.rootA + 1 };
    case 'DEC_A':
      return { ...state, rootA: state.rootA - 1 };
    case 'INC_B':
      return { ...state, rootB: state.rootB + 1 };
    case 'DEC_B':
      return { ...state, rootB: state.rootB - 1 };
    default:
      return state;
  }
}
