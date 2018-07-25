import React from 'react'
import PropTypes from 'prop-types'
import NavLink from 'react-router-dom/NavLink'

const Link = ({ ...props }) => {
  if (props.to) {
    return <NavLink {...props} />
  }
  return <a {...props} />
}

Link.propTypes = {
  to: PropTypes.string,
}

export default Link
