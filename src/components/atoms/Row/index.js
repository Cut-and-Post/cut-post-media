import React from 'react'
// import PropTypes from 'prop-types'

const Row = (props) => {
  return (
    <div className={`row ${props.className}`}>
      {props.children}
    </div>
  )
}

export default Row