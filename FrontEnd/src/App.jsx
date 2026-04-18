import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"

import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
