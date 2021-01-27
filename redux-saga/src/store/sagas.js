import {
  take,
  put,
  call,
  // fork, join, cancel,
  race
} from 'redux-saga/effects';
import { LOGIN, LOGOUT } from './actions';
import { login } from './actions';
import api from './api';
import { delay } from './utils';

function* authorize(credentials) {
  const token = yield call(api.authorize, credentials)
  yield put(login.success(token))
  return token
}

function* authAndRefreshTokenOnExpiry(name, password) {
  let token = yield call(authorize, { name, password })
  while (true) {
    yield call(delay, token.expires_in)
    token = yield call(authorize, { token })
  }
}

function* watchAuth() {
  while (true) {
    const { name, password } = yield take(LOGIN.REQUEST)

    yield race([
      take(LOGOUT),
      call(authAndRefreshTokenOnExpiry, name, password)
    ])
  }
}

export default watchAuth;
