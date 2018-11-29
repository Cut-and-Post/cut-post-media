import React from 'react'
import api from 'services/api'
import { PageTemplate, Hero } from 'components'

export default class TheProfilesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      staff: []
    }
  }

  componentDidMount() {
    api.get('/mocks/staffing.json')
      .then(data => {
        this.setState({
          staff: data
        })
      })
  }

  render() {
    return (
      <PageTemplate name="profiles">
        <Hero
          title="Find Your Freelancer"
          bg="ContactUs.png"
          className="short__hero"
        />
      </PageTemplate>
    )
  }
}