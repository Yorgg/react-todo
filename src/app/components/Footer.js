import { FilterLink } from "./FilterLink"
import React from 'react';

class Footer extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(()=> this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    return(
    <p>
      show:
      {' '}
      <FilterLink 
        filter='ALL'> 
        All 
      </FilterLink>
      {' '}
      <FilterLink 
        filter='COMPLETE'>
        Complete 
      </FilterLink>
      {' '}
      <FilterLink 
        filter='ACTIVE' >
        Active
      </FilterLink>
    </p>
    )
  }
}

Footer.contextTypes ={
  store: React.PropTypes.object
}

export { Footer } 
