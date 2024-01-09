import React,{useContext} from 'react'
import { useFetch } from './Context/ProductContext'
import Loading from './Commcomp/Loading'
import ProductCart from './Commcomp/ProductCart'


function AllProducts() {
  let {isLoading,data,error} =useFetch()
  return (
    <div>
      <div className='container'>
        <div className='row d-flex justify-content-evenly m-3'>
          {isLoading && !error && <Loading/>}
          {!isLoading && !error && data.length==0 && <h1>Something went wrong</h1>} 
          {!isLoading && error && <h1>something wrong</h1>}
          {!isLoading && !error && data.map((item,i)=>{
            return <ProductCart key={i} item={item}/>
          }).slice(0,3)}
          

        </div>

      </div>
  
    </div>
  )
}

export default AllProducts
