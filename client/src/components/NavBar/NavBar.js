import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to='/'>Home</Link>
        <Link to='/cat'>Cat</Link>
        <Link to='/sinatra'>Sinatra Albums</Link>
      </div>
    </nav>
  )
}

export default NavBar
