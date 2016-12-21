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
    const { store } = this.context;

    return(
      <Link 
        filter={props.filter}
        active={props.filter === store.getState().visibilityFilter}
        onClick={() => store.dispatch({
                  type: 'SET_VISIBILITY_FILTER', 
                  filter: props.filter
                })}
      >
        {props.children}
      </Link>
    )
  }
}

FilterLink.contextTypes ={
  store: React.PropTypes.object
}



