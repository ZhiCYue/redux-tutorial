import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoListUI from './TodoListUI'
import { changeInput, addItem, deleteItem, setList } from './store/todoSlice'

class TodoList extends Component{
  changeInputValue = (e) => {
    this.props.changeInput(e.target.value)
  }

  deleteItem = (index) => {
    this.props.deleteItem(index)
  }

  addItem = () => {
    this.props.addItem()
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

const dispatchToProps = (dispatch) => {
  return {
    changeInput(value) {
      dispatch(changeInput(value))
    },
    addItem() {
      dispatch(addItem())
    },
    deleteItem(index) {
      dispatch(deleteItem(index))
    },
    setList() {
      dispatch(setList())
    }
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)
