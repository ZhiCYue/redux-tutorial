const codeSplitB = {
  bValue: ''
}

const splitReducerB = (state = codeSplitB, action) => {
  switch (action.type) {
    case 'SET_B':
      return { ...state, bValue: action.value };
    default:
  }
  return state;
}

export default splitReducerB;
