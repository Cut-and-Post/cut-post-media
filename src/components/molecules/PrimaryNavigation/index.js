import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'components'

import './nav'

const PrimaryNavigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-navigation">
      <a className="navbar-brand" href="#">Navbar</a>

      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/" exact activeClassName="active">Home</Link>
          <Link className="nav-item nav-link" to="/sample-page" activeClassName="active">Sample page</Link>
        </div>
      </div>
    </nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
