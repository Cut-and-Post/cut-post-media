import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

const Row = ({ className, children }) => {
  return (
    <div className={`row${className ? ' ' + className : ''}`}>
      {children}
    </div>
  )
}

Row.propTypes = propTypes

export default Row
