import  { useEffect, useState } from 'react'

const useDatacustomhook = (url) => {
    console.log(url);
 const [data, setData] = useState(null);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
    fetch(url)
    .then((res) => {
        if(!res.ok) {
            throw Error("Data is not properly fetched!")
        } else {
            return res.json();
        }
    })
    .then((data) =>{
        setData(data);
        setIsLoading(false);
        setError(null);
    })
    .catch((error) => {
        setError(error);
        setIsLoading(true);
    })
 }, [url])

 return { data, isLoading, error};
}

export default useDatacustomhook;