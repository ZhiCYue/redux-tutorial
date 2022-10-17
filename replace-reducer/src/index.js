import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

import { combineLazyReducersProxy as combineLazyReducers } from './combineLazyReducers';
import rootReducer from './rootReducer';

const storeInitialState = {
  app: { rootA: 10, rootB: 12 },
  aModule: { aValue: 'saved value a' },
  bModule: { bValue: 'saved value b' },
}

const store = createStore(combineLazyReducers({
  app: rootReducer
}, storeInitialState));

console.log(store.getState());

// 代码优化
const asyncReducers = {};
const addNewReducer = newModuleInfo => {
  asyncReducers[newModuleInfo.name] = newModuleInfo.reducer;

  store.replaceReducer(combineReducers({
    app: rootReducer,
    ...asyncReducers
  }))
}

// 异步加载
import('./splitReducerA').then(({ default: reducer }) => {
  addNewReducer({ name: 'aModule', reducer })
  console.log(store.getState());
});

import('./splitReducerB').then(({ default: reducer }) => {
  addNewReducer({ name: 'bModule', reducer })
  console.log(store.getState());
});


ReactDOM.render(<div>hello</div>, document.getElementById('root'));
