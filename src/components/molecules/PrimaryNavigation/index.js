import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'components'

import './nav'

const PrimaryNavigation = (props) => {
  return (
    <nav className="nav main-navigation">
      <Link className="nav-link" to="/" exact activeClassName="active">Home</Link>
      <Link className="nav-link" to="/sample-page" activeClassName="active">Sample page</Link>
    </nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
