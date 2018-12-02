import React from 'react'
import PropTypes from 'prop-types'

import { Heading } from 'components'

import './hero.styl'

const propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

const Hero = ({
  bg,
  title,
  className,
  children
}) => (
  <div
    className={`page-hero jumbotron jumbotron-fluid${className ? ' ' + className : ''}`}
    style={{ backgroundImage: `url(/images/${bg})` }}
  >
    <div className="container">
      {children}
      {title && <Heading className="page-hero-title" level={2}>{title}</Heading>}
    </div>
  </div>
)

Hero.propTypes = propTypes

export default Hero