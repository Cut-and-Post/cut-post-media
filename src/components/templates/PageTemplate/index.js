// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'

const PageTemplate = ({
  header, hero, children, footer, ...props
}) => {
  return (
    <div className="container-fluid" {...props}>
      <header className="main-header">{header}</header>
      <main className="main-content">{children}</main>
      <footer className="main-footer">{footer}</footer>
    </div>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
