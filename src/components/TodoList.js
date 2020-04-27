// TodoList is also a presentational component like Todo,
// it only takes props from father component and disaply them by passing data to todo
// and Todo component will finally display them

import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => {toggleTodo(todo.id)}}></Todo>
      ))
    }
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList