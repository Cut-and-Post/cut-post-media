import React from 'react'

import { PrimaryNavigation } from 'components'

import './header.styl'

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <PrimaryNavigation />
      </div>
    </header>
  )
}

export default Header
