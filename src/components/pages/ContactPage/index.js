import React from 'react'

import { PageTemplate, Hero, Button, Label, Input, Column, Row, Heading } from 'components'

import './contact-us.styl'

const ContactForm = [
  {
    "name": "name",
    "type": "text"
  },
  {
    "name": "email",
    "type": "email"
  },
  {
    "name": "phone",
    "type": "tel"
  }
]

const ContactPage = () => {
  return (
    <PageTemplate name="contact-us">
      <Hero className="short__hero" title="Contact Us" bg="ContactUs.png" />

      <div className="container">
        <div className="contact-us-info">

          <div className="contact-item__addr">
            <Heading level={6}>Address</Heading>

            <address>
              <p>420 West 42nd Street, 23rd Floor<br />New York, NY 10036</p>
            </address>
          </div>

          <div className="contact-item__phone">
            <Heading level={6}>Phone</Heading>
            <p>646.641.0423</p>
          </div>
         
          <div className="contact-item__email">
            <Heading level={6}>Email</Heading>
            <br></br>
            <p>
              Clients<br />
              <a href="mailto:clients@cutandpostmedia.com">clients@cutandpostmedia.com</a><br />
              <br />Freelancers<br />
              <a href="mailto:freelancers@cutandpostmedia.com">freelancers@cutandpostmedia.com</a>
            </p>
          </div>
        </div>
        
        <form className="contact-form">
          <Heading className="mb-4" level={5}>Need more info? Want a quote? Get in Touch!</Heading>
          {
            ContactForm.map(item => {
              return (
                <Row key={item.name} className="form-group">
                  <Label htmlFor={item.name} className="col col-form-label">{item.name}</Label>
                  <Column sm={{span: 10}}>
                    <Input type={item.type} required className="form-control" id={item.name} />
                  </Column>
                </Row>
              )
            })
          }
          <Row className="form-group">
            <Label htmlFor="message" className="col col-form-label">message</Label>
            <Column sm={{ span: 10 }}>
              <Input type="textarea" className="form-control" id="message" rows="6" />
            </Column>
          </Row>
          <Row className="form-group">
            <Column sm={{ span: 12 }}>
              <Button type="submit" className="btn btn-primary submit-btn">Submit</Button>
            </Column>
          </Row>
        </form>
      </div>
    </PageTemplate>
  )
}

export default ContactPage
