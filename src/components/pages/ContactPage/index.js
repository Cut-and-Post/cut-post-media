import React from 'react'

import { PageTemplate, Header, Footer, Hero} from 'components'

const ContactPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Hero title="Contact Us" bg="ContactUs.png" />
      <p>Im the ContactPage.</p>
    </PageTemplate>
  )
}

export default ContactPage
