import React, { Component } from 'react'

import store from './store'
import { 
  changeInputAction,
  addItemAction,
  deleteItemAction,
  // getTodoList,
  getMyListAction
} from './store/actions'

import TodoListUI from './TodoListUI'

class TodoList extends Component{

  constructor(props) {
    super(props)
    this.state = store.getState()

    this.changeInputValue = this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    store.subscribe(this.storeChange)
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  deleteItem(index) {
    // const action = deleteItemAction(index)
    // store.dispatch(action)

    // redux-promise 示例
    const action = deleteItemAction(index)
    const promiseAction = function () {
      return new Promise((resolve, reject) => {
        resolve(action);
      })
    };
    store.dispatch(promiseAction())
  }

  addItem() {
    const action = addItemAction()
    store.dispatch(action)
  }

  storeChange() {
    this.setState(store.getState())
  }

  componentDidMount() {
    // const action = getTodoList()
    // store.dispatch(action)

    const action = getMyListAction()
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.addItem}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    )
  }

}

export default TodoList
