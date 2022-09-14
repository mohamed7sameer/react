import { useState,useEffect } from "react";

const useFetch = (url) => {

    
    const [fetchData, setFetchData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(()=>{
        setIsLoading(true)
        setErrorMsg(null)
       fetch(url).then(res=>{
    
        if(!res.ok){
            setIsLoading(false)
            throw Error(res.statusText ? 'Error: ' +  res.statusText : 'Undefiend error')
        }
        return res.json()
       }).then(data=>{
        setFetchData(data)
        // setFetchData(null)
        setIsLoading(false)
       }).catch(err=>{
        console.log(err)
        setIsLoading(false)
        setErrorMsg(err.message)
       })
    },[url])



  return {
    fetchData,isLoading,errorMsg,setFetchData
  }
}

export default useFetch