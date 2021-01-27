import reduceReducers from 'reduce-reducers';

const initialState = { A: 0, B: 0 };

const addReducer = (state, payload) => ({ ...state, A: state.A + payload });
const multReducer = (state, payload) => ({ ...state, B: state.B * payload });

const reducer = reduceReducers(initialState, addReducer, multReducer);

const state = { A: 1, B: 2 };
const payload = 3;

const res = reducer(state, payload); // { A: 4, B: 6 }
console.log(res)
