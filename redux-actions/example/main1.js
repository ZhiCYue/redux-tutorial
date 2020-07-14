
const { createStore } = window.Redux;
const { createAction, handleAction } = window.ReduxActions;

const increment = createAction('INCREMENT');
const defaultState = { counter: 0 };

const reducer = handleAction(
  increment,
  (state, action) => ({
    ...state,
    counter: state.counter + 1
  }),
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