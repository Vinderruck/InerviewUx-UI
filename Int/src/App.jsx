import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import { Home, Login } from './Component'

function App() {
   document.documentElement.style.background="#ddd"

  return (
     <BrowserRouter>
     
     <Routes>
      <Route path ="/Login"  element={<Login/>}/>
      <Route path ="/home"  element ={<Home/>}/>
     </Routes>
     </BrowserRouter>
   
         
     
  )
}

export default App
