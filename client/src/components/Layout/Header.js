import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    🛒
    E-commerce App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/category' className="nav-link active" aria-current="page">Category</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/register' className="nav-link active" aria-current="page">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/login' className="nav-link active" aria-current="page">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/cart' className="nav-link active" aria-current="page">Cart (0) </NavLink>
        </li>
        
        
      
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Header