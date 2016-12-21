import React from 'react';
let todoId = 0;

export class Input extends React.Component {
  constructor() {
    super()
    this.state = {inputField: ''}
  }

  handleChange(event) {
    this.setState({inputField: event.target.value});
  } 

  render() {
    const store = this.props.store
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
            () => {
              store.dispatch(
                { type: 'ADD_TODO',
                text: this.state.inputField,
                id: todoId++})
            }
          }
        >
          Add Task 
        </button>
      </div>
    )
  }
}
