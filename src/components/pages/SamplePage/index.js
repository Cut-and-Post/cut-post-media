import React from 'react'

import { PageTemplate, Header, Footer, Paragraph } from 'components'

const SamplePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Paragraph>Im the samplepage.</Paragraph>
    </PageTemplate>
  )
}

export default SamplePage
