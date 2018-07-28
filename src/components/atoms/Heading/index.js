import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ level, children, ...props }) => {
  return React.createElement(`h${level}`, props, children)
};

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
}

Heading.defaultProps = {
  level: 1,
}

export default Heading
