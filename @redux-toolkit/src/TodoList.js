import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoListUI from './TodoListUI'
import { changeInput, addItem, deleteItem } from './store/todoSlice'

import store from './store/new'

class TodoList extends Component{
  changeInputValue = (e) => {
    store.dispatch(changeInput(e.target.value))
  }

  deleteItem = (index) => {
    store.dispatch(deleteItem(index))
  }

  addItem = () => {
    store.dispatch(addItem())
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.props.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.addItem}
        list={this.props.list}
        deleteItem={this.deleteItem}
      />
    )
  }
}

const stateToProps = (state) => {
  return {
    inputValue: state.todo.inputValue,
    list: state.todo.list
  }
}

export default connect(stateToProps, null)(TodoList)
