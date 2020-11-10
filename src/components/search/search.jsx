import React from 'react';
import './search-style.css';

export const Search =
    ({placeholder,handler})=>(
        
    <input
     className="searchbar" 
     type='search' 
     placeholder={placeholder} 
     onChange={handler} 
    />


    );
