import React from 'react'

import { Navs, Row, Column } from 'components'

import './footer.styl'

export default class Footer extends React.Component {
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
      <footer className="main-footer">
        <div className="sub-footer">
          <div className="container">
            <Row>
              <Column sm={{ span: 4 }} className="text-center text-sm-left">
                <p className="copyright-text">Copyright &copy; {this.copyrightYear()}</p>
              </Column>

              <Column sm={{ span: 8 }}>
                <Navs className="justify-content-center justify-content-sm-end" items={this.items}></Navs>
              </Column>
            </Row>
          </div>
        </div>
      </footer>
    )
  }
}