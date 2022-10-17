import { combineReducers } from 'redux';

// 标准版
export const combineLazyReducers = (reducers, initialState) => {
  let reducerKeys = new Set(Object.keys(reducers));
  Object.keys(initialState)
    .filter(k => !reducerKeys.has(k))
    .forEach(k => {
      reducers[k] = state => initialState[k] ? { ...state, ...initialState[k] } : state
    });

  return combineReducers(reducers, initialState);
}

// proxy 版本
export const combineLazyReducersProxy = (reducers, initialState = {}) => {
  return combineReducers(new Proxy(reducers, {
    ownKeys(target) {
      return Array.from(new Set([...Reflect.ownKeys(target), ...Reflect.ownKeys(initialState)]));
    },
    get(target, key) {
      return target[key] || (state => state === undefined ? null : state);
    },
    getOwnPropertyDescriptor(target, key) {
      return Reflect.getOwnPropertyDescriptor(target, key) || 
              Reflect.getOwnPropertyDescriptor(initialState, key);
    }
  }));
}