const defaultState = {
  inputValue: 'Write...',
  list: []
}

export default (state = defaultState, action) => {

  let newState = JSON.parse(JSON.stringify(state))

  if (action.type === 'change_input') {
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'add_item') {
    newState.list.push(newState.inputValue)
    return newState
  }

  return state
} 