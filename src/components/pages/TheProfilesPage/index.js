import React from 'react'
import api from 'services/api'

import {
  PageTemplate,
  Hero,
  FilteredList,
  ProfileCard
} from 'components'

const PROFILES_FILTERS = [
  {
    "name": "services",
    "title": "By Services",
    "items": [
      {
        "value": "Voice Over Talent"
      },
      {
        "value": "Voice Talent"
      },
      {
        "value": "Voice Overs"
      }
    ]
  },
  {
    "name": "hourly_rate",
    "title": "By Hourly Rate",
    "items": [
      {
        "value": "150.00"
      },
      {
        "value": "20.00"
      }
    ]
  }
]

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
        <div className="container">
          {this.state.staff.map(i => (
            <ProfileCard key={i.id} data={i} />
          ))}
        </div>
      </PageTemplate>
    )
  }
}