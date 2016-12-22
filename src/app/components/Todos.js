import React from 'react';
import { Todo } from './Todo'
import { connect } from  'react-redux'
import { toggleTodo } from '../actions'
import { withRouter } from 'react-router'

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

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'all': 
      return todos
    case 'complete': 
      return(todos.filter(t => t.completed))
    case 'active':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state, { params}) => {
  return {
    todos: getVisibleTodos(state.todos, params.filter || 'all')
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

const VisibleTodos = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));
export default VisibleTodos

