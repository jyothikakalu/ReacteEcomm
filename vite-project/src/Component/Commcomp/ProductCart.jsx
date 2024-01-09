import React from 'react'
import {NavLink} from 'react-router-dom'

function ProductCart({item}) {
  let {price ,id,title,thumbnail}=item
  console.log(item)
  return (
    <div>
      <div className='row md-3 m-2'>
        <div>
          <NavLink to={`/singlePage/${id}`}><img src={thumbnail} alt="abc" className='img-fluid' style={{height:"215px", width:"250px"}}></img></NavLink>
        </div>
        <p> {title}</p>
        <p>{price}</p>
      </div>
     

    </div>
  )
}

export default ProductCart
