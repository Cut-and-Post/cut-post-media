

import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'components'

import './text-block'

const TextBlock = (props) => {
  return (
    <div className={`text-block text-${props.align}`}>
      <div className="container">
        <Heading className="text-block__title" level={props.titleLevel}>{props.title}</Heading>
        <p>{props.copy}</p>
      </div>
    </div>
  )
}

TextBlock.propTypes = {
  title: PropTypes.string,
  titleLevel: PropTypes.number,
  align: PropTypes.string
}

TextBlock.defaultProps = {
  align: 'center',
  titleLevel: 2
}

export default TextBlock
