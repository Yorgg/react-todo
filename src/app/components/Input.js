import React from 'react';
export class Input extends React.Component {
  render() {
    return(
      <div>
        <input value={this.props.value} 
               onChange={this.props.change}
        /> 
        <button style={{marginLeft: "10px"}} 
                className={"btn btn-sm btn-primary"} 
                onClick={ this.props.click }>
          Add Task 
        </button>
      </div>
    );
  }
}
