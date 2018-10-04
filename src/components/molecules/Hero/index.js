import React from 'react'

import { Heading } from 'components'

import './hero'

const Hero = (props) => {
  const bgImg = {
    backgroundImage: `url(/images/${props.bg})`
  }
  
  return (
    <div className={`page-hero jumbotron jumbotron-fluid ${props.className}`} style={bgImg}>
      <div className="container">
        {props.children}
        {props.title && <Heading className="page-hero-title" level={2}>{props.title}</Heading>}
      </div>
    </div>
  )
}

export default Hero