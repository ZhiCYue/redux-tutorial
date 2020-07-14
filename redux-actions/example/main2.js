
const { createStore } = window.Redux;
const { createAction, handleActions } = window.ReduxActions;

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

const defaultState = { counter: 0 };

const reducer = handleActions(
  {
    [increment]: state => ({ ...state, counter: state.counter + 1 }),
    [decrement]: state => ({ ...state, counter: state.counter - 1 })
  },
  defaultState
);

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