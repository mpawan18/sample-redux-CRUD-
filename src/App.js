

import React from 'react'
import Navbar from './Component/Navbar'
import {  Routes, Route } from 'react-router-dom';
import Create from './Component/Create';
import Read from './Component/Read';
import './App.css'
import Update from './Component/Update';

const App = () => {
  return (
    <>

      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Create/>}/>
        <Route exact path='/Read' element ={ <Read/>}/>
        <Route exact path='/edit/:id' element = { <Update/>} /> 
    
      </Routes>



    </>
  )
}

export default App