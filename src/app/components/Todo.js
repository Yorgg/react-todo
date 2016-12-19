import React from 'react';
export class Todo extends React.Component {
  render(){

    const textDecoration = () => {
      if (this.props.completed) {
        return({textDecoration: 'line-through', color: '#337ab7'}) 
      } else {
        return({textDecoration: 'none'})
      }
    }

    return(
      <li onClick={this.props.click} 
        className="list-item"
        style={{...textDecoration(), fontSize: "20px"}}>
        {this.props.text} 
      </li>  
    )
  }
}


