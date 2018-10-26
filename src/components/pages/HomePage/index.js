import React from 'react'

import { PageTemplate, Link, Button } from 'components'

const HomePage = () => {
  return (
    <PageTemplate name="home">
      <div className="container">
        <p>Im the homepage.</p>
        <p>Here is a link <Link href="http://google.com" target="_blank">Google</Link></p>
        <Button className="btn btn-primary">fff</Button>
      </div>
    </PageTemplate>
  )
}

export default HomePage
