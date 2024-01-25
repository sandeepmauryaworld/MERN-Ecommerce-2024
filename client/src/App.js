import React from 'react'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Policy from './pages/Policy'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
   <Routes>
   <Route path='/' element={<Home/> }/>
   <Route path='/about' element={<About/> }/>
   <Route path='/policy' element={<Policy/> }/>
   <Route path='/contact' element={<Contact/> }/>
   <Route path='/*' element={<PageNotFound/> }/>
   </Routes>
  )
}

export default App