import React from 'react'

import { PageTemplate, Header, Footer, Hero } from 'components'

const SolutionsPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Hero title="Solutions" />
      <p>Im the SolutionsPage.</p>
    </PageTemplate>
  )
}

export default SolutionsPage
