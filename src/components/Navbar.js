import React, { Fragment } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"

function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0()

  const authLinks = (
    <div
      className='collapse navbar-collapse justify-content-between'
      id='navbarNav'
    >
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/about'>
            About
          </Link>
        </li>
      </ul>
      <ul className='navbar-nav'>
        <li className='nav-item me-auto'>
          <a className='nav-link' onClick={logout} href='#!'>
            <i className='fas fa-sign-out-alt'></i>{" "}
            <span className='hide-sm'>Logout</span>
          </a>
        </li>
      </ul>
    </div>
  )

  const guestLinks = (
    <div
      className='collapse navbar-collapse justify-content-end'
      id='navbarNav'
    >
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a className='nav-link' onClick={loginWithRedirect} href='#!'>
            Login
          </a>
        </li>
      </ul>
    </div>
  )
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        Basic OAuth App
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      {!isLoading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  )
}

export default Navbar
