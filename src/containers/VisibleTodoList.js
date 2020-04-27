// This is a container component which will interact with store
// connect will inject props to TodoList and return a VisibleTodoList component
// with two props todos and toggleTodo

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// map store object to component props, in this case it is todos
const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter) }
}

// map a handler function to a dispatch a action to store function
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

// connect presentational TodoList to store and return a contaniner component
// which can handle action and displat UI by data store given
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)