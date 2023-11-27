import React from 'react'
import Createstudentprofile from './Component/Createstudentprofile'
import Home from './Component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Studentprofile from './Component/Studentprofile'
import Editprofile from './Component/Editprofile'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Home/>
        <Routes>
            <Route element={<Createstudentprofile/>} path='/'/>
            <Route element={<Studentprofile/>} path='/profile'/> 
            <Route element={<Editprofile/>} path='/edit/:xyz'/>  
        </Routes>
        </BrowserRouter>
        
      
    </div>
  )
}

export default App
