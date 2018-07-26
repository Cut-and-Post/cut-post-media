import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'components'

import './nav'

const activeLink = (match, location) => {
  console.log(location)
  if (!match) {
    return false
  }

  return (location.pathname === '/portfolio' || location.pathname === '/about-us')
}

const PrimaryNavigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-navigation">
      <a className="navbar-brand" href="#">
        <img src="images/logo.png" />
      </a>

      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/" exact activeClassName="active">Home</Link>
          <Link className="nav-item nav-link dropdown-toggle" to="/portfolio" isActive={activeLink} activeClassName="active">Agency</Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/portfolio">Portfolio</Link>
            <Link className="dropdown-item" to="/about-us">About Us</Link>
          </div>
          <Link className="nav-item nav-link" to="/sample-page" activeClassName="active">Solutions</Link>
          <Link className="nav-item nav-link" to="/sample-page" activeClassName="active">Profiles</Link>
          <Link className="nav-item nav-link" to="/sample-page" activeClassName="active">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
