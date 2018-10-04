// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'

import { Header, Footer } from 'components'

const PageTemplate = ({
  header, hero, children, footer, ...props
}) => {
  return (
    <React.Fragment>
      <header className="main-header">
        <Header/>
      </header>
      <main className="main-content">{children}</main>
      <footer className="main-footer">
        <Footer />
      </footer>
    </React.Fragment>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default PageTemplate
