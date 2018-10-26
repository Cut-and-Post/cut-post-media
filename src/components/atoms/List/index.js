import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.any,
}

const List = ({ ordered, children, ...props }) => {
  return React.createElement(ordered ? 'ol' : 'ul', props, children)
}

List.propTypes = propTypes

export default List
