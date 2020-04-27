// In this file we combine reducers together and export it entirely
// The reducer will like this:
// {todos: (state = [], action) => {....}, visibilityFilter: (state = ..., action) => { ... } }
// store object will like this {todo: [], visibilityFilter: "..."}
// 

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})