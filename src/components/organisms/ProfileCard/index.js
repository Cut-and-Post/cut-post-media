import React from 'react'
import PropTypes from 'prop-types'

import {
  Row,
  Column,
  ProfileCardAvatar,
  ProfileCardStats,
  Button
} from 'components'

import './profileCard.styl'

const propTypes = {
  full_name: PropTypes.string,
  location: PropTypes.object,
  people: PropTypes.array,
  custom_fields: PropTypes.object,
  btn: PropTypes.bool,
}

const defaultProps = {
  btn: true,
}

const ProfileCard = ({
  btn,
  data
}) => {
  const {
    full_name,
    location,
    people,
    custom_fields,
  } = data;

  return (
    <Row className="profile-card">
      <Column
        className="avatar-col"
        sm={{ span: 4 }}
        lg={{ span: 3 }}
      >
        <ProfileCardAvatar
          name={full_name}
          location={location}
          position="writer / producer"
          avatar={people[0].profile_picture_path}
        />
        {btn &&
          <Button type="submit" className="btn btn-primary submit-btn">View Profile</Button>
        }
      </Column>
      <Column
        sm={{ span: 8 }}
        lg={{ span: 6 }}
      >
        <ProfileCardStats
          experiences={custom_fields[8]}
          clients={custom_fields[17]}
          awards={[]}
          skills={custom_fields[10]}
          hours={custom_fields[4]}
        />
      </Column>
      <Column className="btn-col" lg={{ span: 3 }}>
        {btn &&
          <Button type="submit" className="btn btn-primary submit-btn">View Profile</Button>
        }
      </Column>
    </Row>
  )
}

ProfileCard.propTypes = propTypes
ProfileCard.defaultProps = defaultProps

export default ProfileCard
