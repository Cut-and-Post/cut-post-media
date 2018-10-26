import React from 'react'
import PropTypes from 'prop-types'
import NavLink from 'react-router-dom/NavLink'

const propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

const Link = ({ children, className, ...props }) => {
  const isActive = (match, location) => {
    if (!match) {
      return false
    }

    return props.to === location.pathname
  }

  if (props.to) {
    return <NavLink to={props.to} isActive={isActive} className={className}>{children}</NavLink>
  }
  
  return <a {...props}>{children}</a>
}

Link.propTypes = propTypes

export default Link
