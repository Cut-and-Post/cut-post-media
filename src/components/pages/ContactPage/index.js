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
          <Heading level={6}>Address</Heading>

          <address>
            <p>420 West 42nd Street, 23rd Floor<br />New York, NY 10036</p>
          </address>

          <Heading level={6}>Phone</Heading>
          <p>646.641.0423</p>

          <Heading level={6}>Email</Heading>
          <p>Clients<br/>clients@cutandpostmedia.com<br/><br/>Freelancers<br/>freelancers@cutandpostmedia.com</p>
        </div>
        
        <form className="contact-form">
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
