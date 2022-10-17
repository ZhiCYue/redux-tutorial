const codeSplitA = {
  aValue: ''
}

const splitReducerA = (state = codeSplitA, action) => {
  switch (action.type) {
    case 'SET_A':
      return { ...state, aValue: action.value };
    default:
  }
  return state;
}

export default splitReducerA;
