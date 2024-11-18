import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navui=useNavigate()
    const red=()=>{
        navui('/')
    }
  return (
    <>
    <Header/>
    <h1>404 Error- Page Not Found</h1>
    <button className='btn btn-danger' onClick={red}>Go to Home</button>
    </>
  )
}

export default NotFound