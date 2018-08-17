import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'components'

import './nav'
class PrimaryNavigation extends React.Component {
  constructor() {
    super()
    this.state = {
      opened: false
    }
  }

  toggleNav() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark main-navigation">
        <a className="navbar-brand" href="#">
          <img src="/images/logo.png" />
        </a>

        <button className={`navbar-toggler ${this.state.opened ? 'hide-nav' : ''}`} type="button" onClick={this.toggleNav.bind(this)}>
          <span></span>
        </button>

        <div className={`collapse navbar-collapse navbar-collapse-md justify-content-end ${this.state.opened ? 'show' : ''}`} id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/" exact activeClassName="active">Home</Link>
            <Link className="nav-item nav-link" to="/agency/portfolio" activeClassName="active">Portfolio</Link>
            <Link className="nav-item nav-link" to="/agency/about-us" activeClassName="active">About Us</Link>

            {/* <div className="dropdown">
              <Link className="nav-item nav-link dropdown-toggle" activeClassName="active" active={/about-us|portfolio/}>Agency</Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/agency/portfolio">Portfolio</Link>
                <Link className="dropdown-item" to="/agency/about-us">About Us</Link>
              </div>
            </div> */}

            <Link className="nav-item nav-link" to="/solutions" activeClassName="active">Solutions</Link>
            <Link className="nav-item nav-link" to="/profiles" activeClassName="active">Profiles</Link>
            <Link className="nav-item nav-link" to="/contact" activeClassName="active">Contact</Link>
          </div>
        </div>
      </nav>
    )
  }
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
