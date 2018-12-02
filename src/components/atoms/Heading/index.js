import React from 'react'
import PropTypes from 'prop-types'

const defaultProps = {
  level: 1,
}

const propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
}

const Heading = ({
  level,
  children,
  ...props
}) =>
  React.createElement(`h${level}`, props, children)

Heading.defaultProps = defaultProps
Heading.propTypes = propTypes

export default Heading
