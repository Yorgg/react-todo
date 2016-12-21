import React from 'react';
import { Todo } from './Todo'

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

export class VisibleTodos extends React.Component {
  render() {
    const props = this.props;
    const state = props.store.getState()
    const visibleTodos = getVisibleTodos(state.todos, state.visibilityFilter)
    return( 
      <TodoList
        todos={visibleTodos} 
        onTodoClick = {
          (todoId) => {
            props.store.dispatch({type: 'TOGGLE_TODO', id: todoId})
          }
        } 
      />
    )
  }
}


