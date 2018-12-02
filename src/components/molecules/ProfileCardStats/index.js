import React from 'react'
import PropTypes from 'prop-types'

import { Row, Column } from 'components'

import './profileCardStats.styl'

class ProfileCardStats extends React.Component {
  constructor(props) {
    super(props);
  }

  formatItems(items) {
    if (typeof items === 'object') {
      if (items.length) {
        return items.join(', ')
      }
      return 'N/A'
    }
    return items;
  }

  render() {
    const { experiences, clients, awards, skills, hours } = this.props;
    const stats = [
      {
        id: 0,
        name: "Experiences",
        items: experiences
      },
      {
        id: 1,
        name: 'Clients',
        items: clients
      },
      {
        id: 2,
        name: 'Awards',
        items: awards
      },
      {
        id: 3,
        name: 'Skills',
        items: skills
      },
      {
        id: 4,
        name: 'Working Hours',
        items: hours
      }
    ];

    return (
      <div className="profile-card-stats">
        {stats.map(i => (
          <Row className="profile-stat" key={i.id}>
            <Column xs={{ span: 12 }}>
              <strong className="stats-label">{i.name}:</strong>
            </Column>
            <Column xs={{ span: 12 }}>
              <p>{this.formatItems(i.items)}</p>
            </Column>
          </Row>
        ))}
      </div>
    );
  }
}

export default ProfileCardStats
