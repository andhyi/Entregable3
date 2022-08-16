import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetch = url => {
 const [response, setResponse] = useState()

 useEffect(() => {
   
   axios.get(url)
   .then(res => setResponse(res.data))
   .catch(err=>console.log('la url no es valida, ingresar otra url'))
 
   
 }, [])

 return response
 
}

export default useFetch