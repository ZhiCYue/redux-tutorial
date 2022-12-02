import React from 'react'
import ReactDOM from 'react-dom'

import { observableTodoStore } from './store'
import TodoList from './TodoList';

ReactDOM.render(
  <TodoList store={ observableTodoStore } />,
  document.getElementById('root')
);
