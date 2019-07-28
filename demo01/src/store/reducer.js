import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, SET_LIST } from './actions'

const defaultState = {
  inputValue: 'Some world',
  list: []
}

export default (state = defaultState, action)=>{
  // reducer 只能接受 state，不能改变 state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === SET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }

  return state
}