import React from 'react'

import {
  Navs,
  Row,
  Column
} from 'components'

import './footer.styl'

const ITEMS = [
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

const START_YEAR = 2017;

const copyrightYear = () => {
  const currYear = new Date().getFullYear();
  return START_YEAR === currYear ? START_YEAR : `${START_YEAR} - ${currYear}`;
}

const Footer = ({}) => (
  <footer className="main-footer">
    <div className="sub-footer">
      <div className="container">
        <Row>
          <Column sm={{ span: 4 }} className="text-center text-sm-left">
            <p className="copyright-text">Copyright &copy; {copyrightYear()}</p>
          </Column>

          <Column sm={{ span: 8 }}>
            <Navs className="justify-content-center justify-content-sm-end" items={ITEMS}></Navs>
          </Column>
        </Row>
      </div>
    </div>
  </footer>
)

export default Footer