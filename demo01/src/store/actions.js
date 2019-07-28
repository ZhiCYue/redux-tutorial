/**
 * action 类型
 */
export const CHANGE_INPUT = 'CHANGE_INPUT'
export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const SET_LIST = 'SET_LIST'
export const GET_MY_LIST = 'GET_MY_LIST'

/*
 * action 创建函数
 */
export const changeInputAction = (value) => ({ 
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const setListAction = (data) => ({
  type: SET_LIST,
  data
})

/**
 * 使用插件 redux-thunk
 */
export const getTodoList = () => {
  return (dispatch) => {
    // axios.get...
    const data = [
      'item -01',
      'item -02',
      'item -03'
    ]
    const action = setListAction(data)
    dispatch(action)
  }
}

/**
 * 使用插件 redux-saga
 */
export const getMyListAction = () => ({
  type: GET_MY_LIST
})