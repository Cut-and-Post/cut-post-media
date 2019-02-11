import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'

const defaultProps = {
  type: 'button',
}

const propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <Link {...props} />
  } else if (props.href) {
    return <a {...props} />
  }
  return <button {...props} type={type} />
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

export default Button
