import { createStore, combineReducers } from 'redux'
import isPlainObject from './isPlainObject';

const configureStore = (options) => {
  const {
    reducer = undefined
  } = options || {}

  let rootReducer

  if (typeof reducer === 'function') {
    rootReducer = reducer
  } else if (isPlainObject(reducer)) {
    rootReducer = combineReducers(reducer)
  } else {
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    )
  }
 
  return createStore(rootReducer)
}

export {
  configureStore
}
