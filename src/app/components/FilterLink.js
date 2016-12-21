import React from 'react'

const Link = ({children, filter, active, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }
    
  return(
    <a href="#"
      onClick={ ()=>onClick(filter)}> 
      {children} 
    </a>
  )
}

export class FilterLink extends React.Component {
  render() {
    const props = this.props;

    return(
      <Link 
        filter={props.filter}
        active={props.filter === props.store.getState().visibilityFilter}
        onClick={() => props.store.dispatch({
                  type: 'SET_VISIBILITY_FILTER', 
                  filter: props.filter
                })}
      >

        {props.children}
      </Link>
    )
  }
}


