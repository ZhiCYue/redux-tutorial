import { configureStore } from './toolkit/configureStore'
import todoReducer from './todoSlice'

export default configureStore({
  reducer: {
    todo: todoReducer
  }
})
