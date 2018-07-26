// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Footer, Paragraph, Link, Button } from 'components'

const HomePage = () => {
  return (
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    >
      <div className="container">
        <Paragraph>Im the homepage.</Paragraph>
        <Paragraph>Here is a link <Link href="http://google.com" target="_blank">Google</Link></Paragraph>
        <Button className="btn btn-primary">fff</Button>
      </div>
    </PageTemplate>
  )
}

export default HomePage
