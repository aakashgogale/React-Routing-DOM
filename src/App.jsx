import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import AboutRandom from './pages/AboutRandom'
import MenProduct from './pages/MenProduct'
import WomenProduct from './pages/WomenProduct'
import NotFound from './pages/NotFound'
import LeteastProduct from './pages/LeteastProduct'


const App = () => {
  return (
    <div>
        < Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Product' element={<Product />} />

        {/* {Neasted Routes} */}
        <Route path='/Product/WomenProduct' element={<WomenProduct />} />
        <Route path='/Product/MenProduct' element={<MenProduct />} />

        {/* Dynamic routes */}
        <Route path='/About/:id' element={<AboutRandom />} />
        <Route path='/Product/:ProductId' element={<LeteastProduct />} />

        {/* Page Not Fpund */}
        <Route path='/*' element={<NotFound/>}/>

      </Routes>
    </div>
  )
}

export default App
