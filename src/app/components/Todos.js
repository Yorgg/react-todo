import React from 'react';
import { Todo } from './Todo'
import { connect } from  'react-redux'
import { toggleTodo } from '../actions'

const TodoList = ({todos, onTodoClick}) => { 
  return(
    <ul style={{marginTop: "20px"}}>
      {todos.map((todo, i) => 
        <Todo 
          clickHandler={ () => onTodoClick(todo.id) } 
          completed={todo.completed} 
          text={todo.text}
          key={todo.id}
          id={todo.id}
        />
      )}
    </ul>
  )
}

const getVisibleTodos = (todos, currentFilter) => {
  switch(currentFilter) {
    case 'ALL': 
      return todos
    case 'COMPLETE': 
      return(todos.filter(t => t.completed))
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: 
      (todoId) => {
        dispatch(toggleTodo(todoId))
      } 
  }
}

const VisibleTodos = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export {VisibleTodos}

