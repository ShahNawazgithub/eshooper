import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Cart from './Cart'
import Checkout from './Checkout'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import Shop from './Shop'
import SingleProductPage from './SingleProductPage'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/shop' element={<Shop/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/Cart' element={<Cart/>} />
                    <Route path='/Checkout' element={<Checkout/>} />
                    <Route path='/single-product-page' element={<SingleProductPage/>} />
                    
                    
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
