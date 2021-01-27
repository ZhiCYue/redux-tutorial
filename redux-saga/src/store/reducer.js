import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from './actions';

const PENDING = 'PENDING'
const IN = 'IN'
const OUT = 'OUT'

function user(state = null, action) {
  switch(action.type) {
    case LOGIN.REQUEST:
      return {
        name: action.name, 
        password: action.password,
        status: PENDING
      }
      
    case LOGIN.SUCCESS:
      return {
        ...state, 
        status: IN,
        token: action.token
      }
      
    case LOGIN.ERROR:
      return {
        ...state, 
        status: OUT,
        token: null,
        error: action.error
      }
      
    case LOGOUT:
      return null  
      
    default:
      return state  
  }
}
      
const rootReducer = combineReducers({
  user
})

export default rootReducer;
