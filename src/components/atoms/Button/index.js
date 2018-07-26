import React from 'react'
import PropTypes from 'prop-types'
import Link from 'react-router-dom/Link'

import './buttons'

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <Link {...props} />
  } else if (props.href) {
    return <a {...props} />
  }
  return <button {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button
