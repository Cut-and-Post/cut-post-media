import React from 'react'

import { PageTemplate, Header, Footer, Hero, TextBlock, FilteredList } from 'components'
import api from 'services/api'
export default class PortfolioPage extends React.Component {
  constructor() {
    super();

    this.state = {
      portfolio: [],
      filters: [
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
    }
  }

  componentDidMount() {
    api.get('/get-portfolio')
      .then(data => {
        this.setState({
          portfolio: data
        })
      })
  }

  render() {
    return (
      <PageTemplate header={<Header />} footer={<Footer />}>
        <Hero title="Portfolio" bg="Portfolio.png" />
        <TextBlock
          title="We speak your audience's language"
          copy="View a selection of projects from the talented creatives in the Cut & Post network"
        />
        <FilteredList
          filters={this.state.filters}
          items={this.state.portfolio}
        />
      </PageTemplate>
    )
  }
}