import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import View from './pages/View'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Add/>}/>
        <Route path='/view' element = {<View/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
