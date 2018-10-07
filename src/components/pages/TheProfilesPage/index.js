import React from 'react'

import { PageTemplate, Hero } from 'components'

export default class TheProfilesPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
    return (
      <PageTemplate>
        <Hero
          title="Find Your Freelancer"
          bg="ContactUs.png"
          className="short__hero"
        />
      </PageTemplate>
    )
  }
}