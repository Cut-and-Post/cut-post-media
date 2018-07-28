import React from 'react'
import PropTypes from 'prop-types'
import NavLink from 'react-router-dom/NavLink'

const Link = ({ ...props, children }) => {
  const isActive = (match, location) => {
    if (!match) {
      return false
    }

    return props.active.test(location.pathname)
  }

  if (props.active) {
    return <NavLink to="/" isActive={isActive} className={props.className}>{children}</NavLink>
  } else if (props.to) {
    return <NavLink {...props} />
  }
  return <a {...props} />
}

Link.propTypes = {
  to: PropTypes.string,
}

export default Link
