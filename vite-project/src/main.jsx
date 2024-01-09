import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ProductContext from './Component/Context/ProductContext.jsx'
import FilterContext from './Component/Context/FilterContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductContext>
      <FilterContext>
    <App />
    </FilterContext>
    </ProductContext>
   
    </BrowserRouter>

  </React.StrictMode>,
  
)
