import { FilterLink } from "./FilterLink"
import React from 'react';

export const Footer = ({store, visibilityFilter, onFilterClick}) => {
  return(<p>
    show:
    {' '}
    <FilterLink filter='ALL' 
                store = {store}
                click = {onFilterClick}> 
      All 
    </FilterLink>
    {' '}
    <FilterLink filter='COMPLETE'
                store = {store}
                click = {onFilterClick}> 
      Complete 
    </FilterLink>
    {' '}
    <FilterLink filter='ACTIVE' 
                store = {store}
                click = {onFilterClick}> 
      Active
    </FilterLink>
  </p>)
}

