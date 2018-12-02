import React from 'react'

import {
  PageTemplate,
  Button,
  Heading,
  Row,
  Column
} from 'components'

import './home.styl'

const HomePage = () => (
  <PageTemplate name="home">
    <div className="container">
      <Row className="mt-5 pt-4">
        <Column
          md={{ span: 6 }}
          className="hp-hero"
        >
          <Heading level={2} className="page-hero-title">I Need a Full-Service Production Team!</Heading>
          <p className="mb-0">"Let’s custom-build a dream team of Cut & Post creative professionals to manage your video project from concept to completion."</p>
          <Button to="agency/portfolio" type="submit" className="btn btn-primary submit-btn">Cut & Post agency</Button>
        </Column>
        <Column
          md={{ span: 6 }}
          className="hp-hero"
        >
          <Heading level={2} className="page-hero-title">I Want to Hire Individual Freelancers!</Heading>
          <p className="mb-0">"A diverse talent pool of award winning producers, editors, graphics artists and creative professionals, ready to work on-set, in-house, or remotely."</p>
          <Button to="/profiles" type="submit" className="btn btn-primary submit-btn">Cut & Post staffing</Button>
        </Column>
      </Row>
    </div>
  </PageTemplate>
)

export default HomePage
