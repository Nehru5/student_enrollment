import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import AddStudent from './pages/AddStudent'
import ViewStudent from './pages/ViewStudent'
import UpdateStudent from './pages/UpdateStudent'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='/viewstudent' element={<ViewStudent/>}/>
        <Route path='/updatestudent/:id' element={<UpdateStudent/>}/>
      </Routes>
    </>
  )
}

export default App