import React from 'react'

import { PageTemplate, Header, Footer, Heading } from 'components'

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <div className="container">
        <Heading level={1}>404 Not Found</Heading>
      </div>
      
    </PageTemplate>
  )
}

export default NotFoundPage
