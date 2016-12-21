import React from 'react';
export const Todo = ({clickHandler, text, completed}) => {
  return(
    <li 
      onClick={clickHandler} 
      className={"list-item"}
      style={{textDecoration: completed ? 'line-through' : 'none', fontSize: "20px"}}>
      {text} 
    </li>  
  )
}


