import React from 'react'
import { observer } from 'mobx-react-lite'
import TodoView from './TodoView'

const TodoList = observer(({store}) => {
  const onNewTodo = () => {
    store.addTodo(prompt('Enter a new todo:','coffee plz'));
  }

  return (
    <div>
      { store.report }
      <ul>
        { store.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
      </ul>
      { store.pendingRequests > 0 ? <div>Loading...</div> : null }
      <button onClick={ onNewTodo }>New Todo</button>
      <small> (double-click a todo to edit)</small>
      {/* <RenderCounter /> */}
    </div>
  );
})

export default TodoList
