import store from './store';
import { login, logout } from './store/actions';

store.dispatch(login.request('admin', 'admin'))

setTimeout(() => {
  store.dispatch(logout())  
}, 14333)
