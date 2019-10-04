// reducer 仅仅做的事情：初始化和计算新的 state
export function createStore(reducer) {
    let state
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }
    dispatch({})
    return { getState, dispatch, subscribe }
}
