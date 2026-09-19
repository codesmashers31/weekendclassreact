import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/ABout'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Task from './pages/Task'
import Login from './pages/Login'
import Layout from './components/Layout'

const App = () => {
  return (
    <>

    <Routes>
      
      <Route element={<Layout/>}>

      <Route path='/' element = {<Home/>}  />
      <Route path='/about' element = {<About/>}  />
      <Route path='/contact' element = {<Contact/>}  />
      <Route path='/project' element = {<Projects/>}  />
      <Route path='/task' element = {<Task/>}  />

      </Route>

      
      <Route path='/login' element={<Login/>}  />
    </Routes>
    </>
  )
}

export default App