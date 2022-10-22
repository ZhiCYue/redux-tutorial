const defaultState = {
  width: 100,
  height: 100,
  color: 'green'
}

export default (state = defaultState, action) => {
  if (action.type === 'change_size') {
    return { ...state, width: state.width/2, height: state.height/2 }
  }

  if (action.type === 'change_color') {
    const color = state.color === 'green' ? 'red' : 'green';
    return { ...state, color };
  }

  return state
} 