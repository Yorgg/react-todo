import FilterLink  from "./FilterLink"
import React from 'react';

const Footer = () => 
  <p>
    show:
    {' '}
    <FilterLink 
      filter='all'> 
      All 
    </FilterLink>
    {' '}
    <FilterLink 
      filter='complete'>
      Complete 
    </FilterLink>
    {' '}
    <FilterLink 
      filter='active' >
      Active
    </FilterLink>
  </p>

export default Footer 
