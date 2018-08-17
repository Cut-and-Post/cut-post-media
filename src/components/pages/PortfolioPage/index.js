import React from 'react'

import { PageTemplate, Header, Footer, Hero } from 'components'

const PortfolioPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Hero title="Portfolio" bg="Portfolio.png" />
      <p>Im the PortfolioPage.</p>
    </PageTemplate>
  )
}

export default PortfolioPage
