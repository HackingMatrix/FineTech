import { useState } from 'react'
import './App.css'
import HeroImage from './components/HeroImage'
import Hero from './components/Hero'
import Pie from './components/footer'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Multi from './components/Multi'
import Register from './components/register'
import Thx from './components/Thx'
import Hero2 from './components/Hero2'



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Hero2/>} />
        <Route exact path="/registro" element={ <Register/>} />
        <Route exact path="/thx" element={ <Thx/>} />
    </Routes></BrowserRouter>
    </>
  )
}



export default App