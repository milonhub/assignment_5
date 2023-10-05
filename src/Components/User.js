import React from 'react';

import style from "./user.module.css"
const User = ({name, address, email, phone, id, onDeletedData} ) => {
    
    function handleDelete(props) {
        onDeletedData(id);
    }
  return (
    <div className={style.card}>
        <p>Name: {name}</p>
       <p>City: {address.city}</p>
       <p>Email: {email}</p>
       <p>Phone: {phone}</p>

       <div className={style.btn}>
         <button onClick={handleDelete}>Delete</button>
         </div>
       
    </div>
  )
}

export default User