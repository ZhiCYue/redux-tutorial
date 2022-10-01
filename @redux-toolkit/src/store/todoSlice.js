import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    inputValue: 'Some world',
    list: []
  },
  reducers: {
    changeInput: (state, action) => {
      state.inputValue = action.payload
    },
    addItem: state => {
      state.list.push(state.inputValue)
    },
    deleteItem: (state, action) => {
      state.list.splice(action.payload, 1)
    },
    setList: (state, action) => {
      state.list = action.payload
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { changeInput, addItem, deleteItem, setList } = todoSlice.actions

export default todoSlice.reducer