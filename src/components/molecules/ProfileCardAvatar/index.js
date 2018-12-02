import React from 'react'
import PropTypes from 'prop-types'

import { Heading } from 'components'

import './profileCardAvatar.styl'

class ProfileCardAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, location, position, avatar } = this.props;

    return (
      <div className="profile-card-avatar">
        <div className="avatar">
          <div>
            <img src={avatar ? avatar : 'http://fpoimg.com/300x250'} alt={name} />
          </div>
        </div>
        <p className="position">{position}</p>
        <Heading level={4}>{name}</Heading>
        <p className="location">{location.state}, {location.country}</p>
      </div>
    );
  }
}

export default ProfileCardAvatar
