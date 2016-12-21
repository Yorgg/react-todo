import { FilterLink } from "./FilterLink"
import React from 'react';

export const Footer = () => 
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

