import React from 'react'

import { PageTemplate, Hero, TextBlock, FilteredList } from 'components'
import api from 'services/api'
export default class PortfolioPage extends React.Component {
  constructor() {
    super();

    this.filters = [
      {
        "name": "genre",
        "title": "By Genre",
        "items": [
          {
            "value": "african american"
          },
          {
            "value": "comedy"
          },
          {
            "value": "drama"
          },
          {
            "value": "thrillers"
          },
          {
            "value": "kids"
          }
        ]
      },
      {
        "name": "purpose",
        "title": "By Purpose",
        "items": [
          {
            "value": "branded content"
          },
          {
            "value": "critics spots"
          },
          {
            "value": "combo/marathons"
          }
        ]
      }
    ]
    this.state = {
      portfolio: []
    }
  }

  componentDidMount() {
    api.get('/mocks/portfolio.json')
      .then(data => {
        this.setState({
          portfolio: data
        })
      })
  }

  render() {
    return (
      <PageTemplate>
        <Hero title="Portfolio" bg="Portfolio.png" />
        <TextBlock
          className="py-5"
          title="We speak your audience's language"
          copy="View a selection of projects from the talented creatives in the Cut & Post network"
        />
        <FilteredList
          filters={this.filters}
          items={this.state.portfolio}
        />
      </PageTemplate>
    )
  }
}