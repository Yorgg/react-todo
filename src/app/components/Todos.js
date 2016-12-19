import React from 'react';
import { Todo } from './Todo'

export class Todos extends React.Component {
  render() {
    const list = this.props.all.map((todo, i) => {
      return(  <Todo click={ ()=>{
                        this.props.store.dispatch(
                           {type: 'TOGGLE_TODO', id: todo.id}
                        ) }} 
                   completed={todo.completed} 
                   key={todo.id}
                   id={todo.id}
                   text={todo.text}/>)
    });

    return(
      <ul style={{marginTop: "20px"}}>
        {list}
      </ul>
    )
  }
}
