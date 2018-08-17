import React from 'react'
import { Link, Icon, Navs, Heading } from 'components'

import './footer'
class Footer extends React.Component {
  constructor() {
    super()

    this.items = [
      {
        "name": "Terms and Conditions",
        "to": "/terms-and-conditions",
        "disabled": false
      },
      {
        "name": "Privacy Policy",
        "to": "/privacy-policy",
        "disabled": false
      }
    ]

    this.startYear = 2017;
  }

  copyrightYear() {
    const currYear = new Date().getFullYear();
    return this.startYear === currYear ? this.startYear : `${this.startYear} - ${currYear}`;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container py-4">
          <div className="row">
            <div className="footer-logo col-3">
              <img className="mb-3" src="/images/logo.png" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit, at eleifend elit ornare ut.</p>
            </div>

            <div className="footer-nav col-9">
              <div className="row">
                <div className="col">
                  <Heading className="footer-header" level={6}>company</Heading>
                </div>

                <div className="col">
                  <Heading className="footer-header" level={6}>resources</Heading>
                </div>

                <div className="col">
                  <Heading className="footer-header" level={6}>support</Heading>
                </div>

                <div className="col">
                  <Heading className="footer-header" level={6}>social</Heading>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-footer">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-4 text-center text-sm-left">
                <p className="copyright-text">Copyright &copy; {this.copyrightYear()}</p>
              </div>

              <div className="col-12 col-sm-8">
                <Navs className="justify-content-center justify-content-sm-end" items={this.items}></Navs>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer
