import { takeEvery, put } from 'redux-saga/effects'

import {
  GET_MY_LIST,
  setListAction
} from './actions'

function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
  // axios.get...
  const data = [
    'item -01',
    'item -02',
    'item -03'
  ]
  const action = setListAction(data)
  yield put(action)
}

export default mySaga
