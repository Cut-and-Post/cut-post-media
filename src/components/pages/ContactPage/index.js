import React from 'react'

import { PageTemplate, Hero, Button, Label, Input } from 'components'

const ContactPage = () => {
  return (
    <PageTemplate>
      <Hero className="short__hero" title="Contact Us" bg="ContactUs.png" />

      <div className="container">
        <div className="contact-us-info">
          <h6>Address</h6>

          <address>
            <p>420 West 42nd Street, 23rd Floor<br />New York, NY 10036</p>
          </address>

          <h6>Phone</h6>
          <p>646.641.0423</p>

          <h6>Email</h6>
          <p>Clients<br/>clients@cutandpostmedia.com<br/><br/>Freelancers<br/>freelancers@cutandpostmedia.com</p>
        </div>
        
        <form className="contact-form">
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col col-form-label">name</label>
            <div className="col-sm-10">
              <input type="text" required className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col col-form-label">email</label>
            <div className="col-sm-10">
              <input type="email" required className="form-control" id="inputPassword3" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col col-form-label">phone</label>
            <div className="col-sm-10">
              <input type="tel" className="form-control" id="inputPassword3" />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col col-form-label">message</label>
            <div className="col-sm-10">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary submit-btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </PageTemplate>
  )
}

export default ContactPage
