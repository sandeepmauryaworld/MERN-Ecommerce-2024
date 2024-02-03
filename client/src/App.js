import React from 'react'
import Layout from './components/Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Policy from './pages/Policy'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Category from './pages/Category'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './components/Routes/Private'

const App = () => {
  return (
   <Routes>
   <Route path='/' element={<Home/> }/>
   <Route path='/about' element={<About/> }/>
   <Route path='/policy' element={<Policy/> }/>
   <Route path='/category' element={<Category/> }/>
   <Route path='/contact' element={<Contact/> }/>
   <Route path='/*' element={<PageNotFound/> }/>
   <Route path='/login' element={<Login/> }/>
   <Route path='/register' element={<Register/> }/>
   <Route path='/dashboard' element={<PrivateRoute/> }>
   <Route path='' element={<Dashboard/> }/>
   
   </Route>



  
   </Routes>
  )
}

export default App