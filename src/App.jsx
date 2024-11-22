import { useState } from 'react'

import './App.css'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'


function App() {
  
  return (
    <>
    <div className='app'>
    <Nav></Nav>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    
    </>
  )
}

export default App
