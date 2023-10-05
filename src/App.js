import React, {useEffect, useState } from "react";

import useDatacustomhook from "./CustoomHook/useDatacustomhook";
import Users from "./Components/Users";
import style from "./App.module.css";
import Search from "./Components/Search";


function App() {

  const [userdata, setUser] = useState(null)
  // const [searchdata, setSearchData] = useState(null);
  const {data, isLoading, error} = useDatacustomhook("https://jsonplaceholder.typicode.com/users");
   


  useEffect(() =>{
    setUser(data);

    
  }, [data])

  useEffect(() =>{
    setUser(userdata);

    
  }, [userdata])
  
  function deletedData(id) {
      
     
    const  filteredUser = userdata && userdata.filter((data) =>{
       console.log(data)
    return(data.id !== id)

    
  })

  setUser(filteredUser);
   }


   const handleSearch = (sdata) => {
      console.log(sdata);
      const searchd = sdata && sdata.toLowerCase();
      console.log(searchd);
   const seracheddata = data && data.filter((data)=>{

    const name = data.name.toLowerCase();
    console.log(name);
        return(name.startsWith(searchd))
      })
       setUser(seracheddata);
    }



  return (
    <div className={style.App}>
     <h2>Users Management App </h2>
     {isLoading && <p>Data is loading....</p>}
    
          {error && <p>error.message</p>}
     
          <Search onSearchdata = {handleSearch}/>
          {userdata && <Users data ={ userdata} onDeleteduser = {deletedData}/>}
    
   
    </div>
  );
}

export default App;
