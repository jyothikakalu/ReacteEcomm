import React, { createContext, useContext, useEffect, useReducer } from 'react'
 export let productContext=createContext()
 import axios from "axios"
 import reducer from "../Reducer/filterReducer"

function ProductContext({children}) {
  let intialValue={
    data:[],
    isLoading:false,
    error:""
  }
  let [state,dispatch]=useReducer(reducer,intialValue)
  let url="https://dummyjson.com/products"
  async function fetchData(){
    dispatch({type:"LOADING"})
    try{
      let result=await axios.get(url)
      let data=await result.data.products 
      console.log(data)
      dispatch({type:"FETCH_DATA",payload:data})
    }
    catch(e){
      dispatch({type:"FETCH_ERROR",payload:e})
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      < productContext.Provider value={{...state}}>
        {children}
      </productContext.Provider>
      
    </div>
  )
}
//customhook
 let useFetch=()=>{
 return useContext(productContext)
 }
 export {useFetch}
export default ProductContext
