import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import ProductList from './Component/ProductList'
import Cart from './Component/Cart'
import SinglePage from './Component/SinglePage'
import Footer from './Component/Footer'
import Header from './Component/Header'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/productlist' element={<ProductList/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/singlepage/:id' element={<SinglePage/>}/>
    </Routes>
     <Footer/> 
    </>
  )
}

export default App
