import React from 'react';
let todoId = 0;

class Input extends React.Component {
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

Input.contextTypes ={
  store: React.PropTypes.object
}

export { Input }
