import React from 'react'
// import PropTypes from 'prop-types'

const Row = ({className, ...props}) => {
  return (
    <div className={`row${className ? ' ' + className : ''}`}>
      {props.children}
    </div>
  )
}

export default Row