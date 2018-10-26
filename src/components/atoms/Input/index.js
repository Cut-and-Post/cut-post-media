import React from 'react'
import PropTypes from 'prop-types'

const defaultProps = {
  type: 'text',
}

const propTypes = {
  type: PropTypes.string,
  invalid: PropTypes.bool,
}

const Input = ({ ...props }) => {
  if (props.type === 'textarea') {
    return <textarea {...props} />
  } else if (props.type === 'select') {
    return <select {...props} />
  }
  return <input {...props} />
}

Input.defaultProps = defaultProps
Input.propTypes = propTypes

export default Input
