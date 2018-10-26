import React from 'react'
import PropTypes from 'prop-types'

import { Heading } from 'components'

import './text-block.styl'

const defaultProps = {
  align: 'center',
  titleLevel: 2,
}

const propTypes = {
  title: PropTypes.string,
  titleLevel: PropTypes.number,
  align: PropTypes.string,
}

const TextBlock = ({
  align, className, title, titleLevel, copy
}) => {
  return (
    <div className={`text-block text-${align} ${className}`}>
      <div className="container">
        <Heading className="text-block__title" level={titleLevel}>{title}</Heading>
        <p>{copy}</p>
      </div>
    </div>
  )
}

TextBlock.defaultProps = defaultProps
TextBlock.propTypes = propTypes

export default TextBlock
