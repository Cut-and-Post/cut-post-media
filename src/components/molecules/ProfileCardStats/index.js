import React from 'react'
import PropTypes from 'prop-types'

import {
  Row,
  Column
} from 'components'

import './profileCardStats.styl'

const defaultProps = {
  awards: ['N/A'],
}

const propTypes = {
  experiences: PropTypes.array,
  clients: PropTypes.string,
  awards: PropTypes.array,
  skills: PropTypes.array,
  hours: PropTypes.array,
}

const formatItems = items => {
  if (typeof items === 'object') {
    if (items.length) {
      return items.join(', ')
    }
    return 'N/A'
  }
  return items;
}

const ProfileCardStats = ({
  experiences,
  clients,
  awards,
  skills,
  hours
}) => {
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
          <Column xs={{ span: 12 }} md={{ span: 4 }} xl={{ span: 3 }}>
            <strong className="stats-label">{i.name}:</strong>
          </Column>
          <Column xs={{ span: 12 }} md={{ span: 8 }} xl={{ span: 9 }}>
            <p>{formatItems(i.items)}</p>
          </Column>
        </Row>
      ))}
    </div>
  )
}

ProfileCardStats.propTypes = propTypes;
ProfileCardStats.defaultProps = defaultProps;

export default ProfileCardStats
