import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import { Login } from './Component'

function App() {
   document.documentElement.style.background="#ddd"

  return (
     <BrowserRouter>
     
     <Routes>
      <Route path ="/"  element={<Login/>}/>
     </Routes>
     </BrowserRouter>
   
         
     
  )
}

export default App
