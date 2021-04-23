import React from 'react';
import './search-box.styles.css';

//Notice here instead of props, directly the name of properties is passed. Here again the concept of destructuring is applied
export const SearchBox = ({placeholder,handleChange})=>(
    <input 
        className='search' 
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
    );

    //e=>this.setState({searchField: e.target.value})
    //