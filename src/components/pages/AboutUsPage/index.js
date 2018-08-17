// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Footer, Hero } from 'components'

const AboutUsPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Hero title="About Us" />
    </PageTemplate>
  )
}

export default AboutUsPage
