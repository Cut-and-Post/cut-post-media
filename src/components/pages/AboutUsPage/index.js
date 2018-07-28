// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Footer, Link, Button } from 'components'

const AboutUsPage = () => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <div className="container">
        <p>Im the AboutUsPage.</p>
      </div>
    </PageTemplate>
  )
}

export default AboutUsPage
