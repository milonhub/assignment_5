import React, { useEffect, useState } from 'react';

import style from "./Search.module.css";
const Search = (props) => {
    
    const [searchText, setsearchText] = useState("");
const handleChange = (event) => {
   
   setsearchText(event.target.value);
    
}

useEffect(() =>{
    props.onSearchdata(searchText)
}, [searchText]);

  return (
    <div className={style.search}>
        <input type='text' name="text" value={searchText} onChange={handleChange} placeholder='Search Users'>
        </input>
    </div>
  )
}

export default Search