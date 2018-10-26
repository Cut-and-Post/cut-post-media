// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer } from 'components'

const propTypes = {
  children: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired
}

class PageTemplate extends React.Component {
  componentDidMount() {
    document.body.classList.remove('home-page', 'about-us-page', 'portfolio-page', 'contact-us-page')
    document.body.classList.add(`${this.props.name}-page`)
  }

  render() {
    return (
      <React.Fragment>        
        <Header />
        <main className="main-content">{this.props.children}</main>
        <Footer />
      </React.Fragment>
    )
  }
}

PageTemplate.propTypes = propTypes

export default PageTemplate
