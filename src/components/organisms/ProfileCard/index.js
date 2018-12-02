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

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      full_name,
      location,
      people,
      custom_fields,
    } = this.props.data;

    return (
      <Row className="profile-card">
        <Column
          sm={{ span: 4 }}
          md={{ span: 3 }}
          lg={{ span: 2 }}
        >
          <ProfileCardAvatar
            name={full_name}
            location={location}
            position="writer / producer"
            avatar={people[0].profile_picture_path}
          />
          {this.props.btn && <Button type="submit" className="btn btn-primary submit-btn">View Profile</Button>}
        </Column>
        <Column
          sm={{ span: 8 }}
          md={{ span: 3 }}
          lg={{ span: 2 }}
        >
          <ProfileCardStats
            experiences={custom_fields[8]}
            clients={custom_fields[17]}
            awards={[]}
            skills={custom_fields[10]}
            hours={custom_fields[4]}
          />
        </Column>
      </Row>
    )
  }
}

ProfileCard.propTypes = propTypes
ProfileCard.defaultProps = defaultProps

export default ProfileCard
