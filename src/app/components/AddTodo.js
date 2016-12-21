import React from 'react';
import { addTodo } from '../actions'


// TODO refactor this component
//

class AddTodo extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(()=> this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  constructor() {
    super()
    this.state = {inputField: ''}
  }

  handleChange(event) {
    this.setState({inputField: event.target.value});
  } 

  render() {
    const {store} = this.context
    return(
      <div>
        <input 
          onChange={(event) => this.handleChange(event)}
          style= {{marginRight: "20px"}} 
          value= {this.state.inputField}
        /> 

        <button 
          style={{marginLeft: "10px"}} 
          className={"btn btn-sm btn-primary"} 
          onClick={  
            () => store.dispatch(addTodo(this.state.inputField))
          }
        >
          Add Task 
        </button>
      </div>
    )
  }
}

AddTodo.contextTypes ={
  store: React.PropTypes.object
}

export { AddTodo }
