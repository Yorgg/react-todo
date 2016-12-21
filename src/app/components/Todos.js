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

class VisibleTodos extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(()=> this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  
  render() {
    const {store} = this.context;
    const state = store.getState();
    const visibleTodos = getVisibleTodos(state.todos, state.visibilityFilter)
    return( 
      <TodoList
        todos={visibleTodos} 
        onTodoClick = {
          (todoId) => {
            store.dispatch({type: 'TOGGLE_TODO', id: todoId})
          }
        } 
      />
    )
  }
}

VisibleTodos.contextTypes ={
  store: React.PropTypes.object
}


export {VisibleTodos}

