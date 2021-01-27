import {
    createStore,
    applyMiddleware
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import watchAuth from './sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchAuth)


let lastState
store.subscribe(() => {
  const state = store.getState()
  if(state !== lastState) {
    lastState = state
    console.log('user:', lastState.user)
  }
})

export default store;
