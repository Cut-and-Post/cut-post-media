import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'components'

import './navs'

const defaultProps = {
  vertical: false,
  type: '',
}

const propTypes = {
  vertical: PropTypes.bool,
  type: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string
}

const Navs = ({
  type,
  vertical,
  items,
  className
}) => (
  <nav className={`nav ${type}${vertical ? ' flex-column' : ''} ${className}`}>
    {items.map((i) =>
      <Link
        activeClassName="active"
        key={i.name}
        className={`nav-link${i.disabled ? ' disabled' : ''}`}
        to={i.to}
      >
        {i.name}
      </Link>
    )}
  </nav>
)

Navs.defaultProps = defaultProps
Navs.propTypes = propTypes

export default Navs
