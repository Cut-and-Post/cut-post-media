import React from 'react'
import PropTypes from 'prop-types'

import { Heading } from 'components'

import './profileCardAvatar.styl'

const propTypes = {
  name: PropTypes.string,
  location: PropTypes.object,
  position: PropTypes.string,
  avatar: PropTypes.string,
}

const defaultProps = {
  avatar: 'http://fpoimg.com/300x250'
}

const ProfileCardAvatar = ({
  name,
  location,
  position,
  avatar
}) => (
  <div className="profile-card-avatar">
    <div className="avatar">
      <div>
        <img src={avatar ? avatar : defaultProps.avatar} alt={name} />
      </div>
    </div>
    <p className="position">{position}</p>
    <Heading level={4}>{name}</Heading>
    <p className="location">{location.state}, {location.country}</p>
  </div>
)

ProfileCardAvatar.defaultProps = defaultProps;
ProfileCardAvatar.propTypes = propTypes;

export default ProfileCardAvatar
