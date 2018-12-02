import React from 'react'
import api from 'services/api'
import { PageTemplate, Hero, ProfileCard } from 'components'

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
        console.log(data);
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
        <div className="container">
          {this.state.staff.map(i => (
            <ProfileCard key={i.id} data={i} />
          ))}
        </div>
      </PageTemplate>
    )
  }
}