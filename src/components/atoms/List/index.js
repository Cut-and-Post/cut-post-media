import React from 'react'
import PropTypes from 'prop-types'

const List = ({ ordered, children, ...props }) => {
  return React.createElement(ordered ? 'ol' : 'ul', props, children)
}

List.propTypes = {
  ordered: PropTypes.bool,
  reverse: PropTypes.bool,
  children: PropTypes.any,
}

export default List
