import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
<Link className='navbar-brand' to="/">Ecomm</Link>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        <li class="nav-item">
       <Link className='nav-link' to="/" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/product">ProductList</Link>
        </li>
        <li >
        <Link className='nav-link' to="/cart">
        <div className='position-relative'>
          bsCart
        </div>
        </Link>
       

        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
