import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Mobile view/Users'
import Cart from './pages/Mobile view/Cart'
import Menu from './pages/Mobile view/Menu'
const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
