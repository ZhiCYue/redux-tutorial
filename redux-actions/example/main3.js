
const { createStore } = window.Redux;
const { createActions, handleActions } = window.ReduxActions;

const defaultState = { counter: 0 };

// 方式一
// const { increment, decrement } = createActions('INCREMENT', 'DECREMENT');

// const reducer = handleActions(
//   {
//     [increment]: state => ({ ...state, counter: state.counter + 1 }),
//     [decrement]: state => ({ ...state, counter: state.counter - 1 })
//   },
//   defaultState
// );

// 方式二 （包含参数）
const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});

const reducer = handleActions(
  {
    [increment]: (state, { payload: { amount } }) => {
      return { ...state, counter: state.counter + amount };
    },
    [decrement]: (state, { payload: { amount } }) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  defaultState
);

// 创建 store
const store = createStore(reducer, defaultState);

const content = document.getElementById('content');
const render = () => {
  content.innerHTML = store.getState().counter;
};
store.subscribe(render);

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment());
});
document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(decrement());
});