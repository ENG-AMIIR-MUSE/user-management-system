import { useState } from 'react'
import Home from './Components/Home'
import Add from './Components/Add'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'

function App() {


  return (
   <>
   <Nav/>
   <Outlet/>
   
   {/* <Home/> */}
{/* <Add/>   */}

   </>
  )
}

export default App
