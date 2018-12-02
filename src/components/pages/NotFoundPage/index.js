import React from 'react'

import { PageTemplate, Heading } from 'components'

const NotFoundPage = () => (
  <PageTemplate name="not-found">
    <div className="container">
      <Heading level={1}>404 Not Found</Heading>
    </div>
  </PageTemplate>
)

export default NotFoundPage
