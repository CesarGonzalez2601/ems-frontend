import './App.css'
import React from 'react'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
//Comentario para hacer la
function App() {
  
  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<ListEmployeeComponent/>}></Route>
      <Route path='/employees' element = { <ListEmployeeComponent/>}></Route>
      <Route path='/add-employee' element = { <EmployeeComponent/>}></Route>
      </Routes>
    <FooterComponent/> 
    </BrowserRouter>
    </>
  )
}

export default App
