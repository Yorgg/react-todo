import React from 'react'
import { connect } from  'react-redux'
import { setVisibilityFilter } from '../actions'

const Link = ({children,  active, onClick}) => {
  if (active) {
    return <span> {children} </span>
  } else {
    return(
      <a href="#"
        onClick={ onClick}> 
        {children} 
      </a>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: 
      (filter) => dispatch(setVisibilityFilter(props.filter))
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
export {FilterLink}

