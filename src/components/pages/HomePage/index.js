// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Footer, Link, Button } from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <div className="container">
        <p>Im the homepage.</p>
        <p>Here is a link <Link href="http://google.com" target="_blank">Google</Link></p>
        <Button className="btn btn-primary">fff</Button>
      </div>
    </PageTemplate>
  )
}

export default HomePage
