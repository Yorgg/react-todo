import { createStore } from "redux"
import { combineReducers } from "redux"
import todos from "./reducers/todoReducer"
import visibilityFilter from "./reducers/visibleTodos"

export default createStore(combineReducers({todos, visibilityFilter}))


