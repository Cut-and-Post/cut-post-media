import React from 'react'

import { Link } from 'components'

import './nav.styl'

class PrimaryNavigation extends React.Component {
  constructor() {
    super()
    this.state = {
      opened: false,
    }
  }

  toggleNav() {
    this.setState({ opened: !this.state.opened })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark main-navigation">
        <div className="navbar-brand">
          <img src="/images/logo.png" />
        </div>

        <button
          className={`navbar-toggler ${this.state.opened ? 'hide-nav' : ''}`}
          type="button"
          onClick={this.toggleNav.bind(this)}
        >
          <span />
        </button>

        <div
          className={`collapse navbar-collapse navbar-collapse-md justify-content-end ${this.state.opened ? 'show' : ''}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              className="nav-item nav-link"
              to="/"
              exact
              activeClassName="active"
            >
              Home
            </Link>
            {/* <Link className="nav-item nav-link" to="/agency/about-us" activeClassName="active">About Us</Link> */}
            <Link
              className="nav-item nav-link"
              to="/agency/portfolio"
              activeClassName="active"
            >
              Portfolio
            </Link>
            <Link
              className="nav-item nav-link"
              to="/profiles"
              activeClassName="active"
            >
              Staffing
            </Link>
            <Link
              className="nav-item nav-link"
              to="/contact"
              activeClassName="active"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default PrimaryNavigation
