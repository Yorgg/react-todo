import React from "react"
import reactRedux from "react-redux"
import { render } from "react-dom"
import { Input }  from "./components/Input"
import { Todo }   from "./components/Todo"
import { Todos }  from "./components/Todos"

import { connect } from "react-redux"
import store from "./store"
import { Provider } from 'react-redux' 

let todoId = 0;
const getVisibleTodos = (todos, filter) => {
  console.log(filter)
    console.log(todos)
  switch(filter) {
    case 'ALL': 
      return todos
    case 'COMPLETE': 
      return(todos.filter(t => t.completed))
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const FilterLink = ({filter, currentFilter, children}) => {
    if (currentFilter === filter) {
      return <span>{children}</span>
    }
    
    return(
    <a href="#"
      onClick={ e=> {
        e.preventDefault();
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER', 
          filter: filter })
        }
      }> 
      {children} 
    </a>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {inputField: ''}
  }

  handleChange(event) {
    this.setState({inputField: event.target.value});
  }

  render() {
    console.log(store.getState().visibilityFilter)
    const visibleTodos = getVisibleTodos(store.getState().todos,
                                         store.getState().visibilityFilter)
    return (
      <div className={"container"} style={{marginTop: "40px"}}>
        <div className={"row"}>
          <div className={"col-sm-8 col-sm-offset-2"}>
            <h1 style={{marginBottom: "30px"}}>Todo List</h1>
            <Input style= {{marginRight: "20px"}} 
                   store= {store}
                   value= {this.state.inputField}
                   click= {()=> {
                   store.dispatch({ type: 'ADD_TODO',
                       text: this.state.inputField,
                       id: todoId++  
                     })
                }}
                   change={(event) => {this.handleChange(event)}}
            />
            <Todos store={store} all={visibleTodos}/>
            <p>
              show:
              {' '}
              <FilterLink filter='ALL' currentFilter={store.getState().visibilityFilter}> All </FilterLink>
              {' '}
              <FilterLink currentFilter={store.getState().visibilityFilter} filter='COMPLETE'> Complete </FilterLink>
              {' '}
              <FilterLink currentFilter={store.getState().visibilityFilter} filter='ACTIVE'> Active </FilterLink>
           </p>
          </div>
        </div>
      </div>
    );
  }
}


const renderIt = () => {
  render(<App />,
         window.document.getElementById("app")
        )
}

store.subscribe(renderIt)
renderIt()

