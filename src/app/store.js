import { createStore } from "redux"
import { combineReducers } from "redux"
import todos from "./reducers/todoReducer"

export default createStore(combineReducers({todos,}))


