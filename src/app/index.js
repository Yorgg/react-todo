import React from "react";
import { render } from "react-dom";
import { Input }  from "./components/Input";
import { Todo }   from "./components/Todo";
import { Todos }  from "./components/Todos";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputField: '',
      allTodos: []
    }
  }

  toggle(toggleIndex) {
    this.setState({allTodos: this.state.allTodos.map((todo,i)=>{ 
      if (toggleIndex === i) {
        todo.completed = !todo.completed;
      }
      return todo
    })
    })
  }

  addTodo(name) {
    if (name.length > 0) {
      const updated = [ 
                        {name: name, 
                         toggle: this.toggle.bind(this), 
                         completed: false
                        }, ...this.state.allTodos
                      ]
      this.setState({allTodos: updated})
      this.clearInput();
    }
  }

  clearTodos() {
    this.setState({allTodos: [], inputField: ''});
  }

  handleChange(event) {
    this.setState({inputField: event.target.value});
  }

  clearInput() {
    this.setState({inputField: ''});
  }

  checkLength(input) {
    return(input.target.value.length > 0)
  }


  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addTodo(this.state.inputField);   
    }
  }
  render() {
    return (
      <div className={"container"} style={{marginTop: "40px"}}>
        <div className={"row"}>
          <div className={"col-sm-8 col-sm-offset-2"}>
            <h1 style={{marginBottom: "30px"}}>Todo List</h1>
            <Input style= {{marginRight: "20px"}} 
                   value= {this.state.inputField}
                   enter= {this.handleKeyPress.bind(this)}
                   change={(event) => {this.handleChange(event)}}
                   clickAdd= {this.addTodo.bind(this, this.state.inputField)}
                   clickClear= {this.clearTodos.bind(this)}
            />
            <Todos all={this.state.allTodos}/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));


