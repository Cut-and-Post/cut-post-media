import React from 'react'
import { Link, Icon, Navs  } from 'components'

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

    this.startYear = 2018;
  }

  copyrightYear() {
    const currYear = new Date().getFullYear();
    return this.startYear === currYear ? this.startYear : `${this.startYear} - ${currYear}`;
  }

  render() {
    return (
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
    )
  }
}

export default Footer
