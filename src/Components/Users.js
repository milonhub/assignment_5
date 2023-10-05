import React from 'react';

import style from "./Users.module.css"
import User from './User';
const Users = (props) => {
    console.log(props.data);
    
   function deletedData(id) {
    props.onDeleteduser(id);
   }    
  return (
    <div className={style.container}>
       { props.data && props.data.map((data)=>{return <User  {...data} key = {data.id} onDeletedData={deletedData}/>})}
    </div>
  )
}

export default Users;