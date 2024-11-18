import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Why from './components/Why'
import NotFound from './components/NotFound'
import User from './components/User'
import Tra from './components/Tra'

function App() {
  return (
    <>
      <BrowserRouter>       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/why' element={<Why/>}/>
          <Route path='/trainer' element={<Tra/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App