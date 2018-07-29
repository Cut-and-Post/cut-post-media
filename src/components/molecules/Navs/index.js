import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'components'

import './navs'

class Navs extends React.Component {
  constructor(props) {
    super(props);

    this.type = props.type;
    this.vertical = props.vertical;
    this.items = props.items;
  }

  className() {
    let cn = ` ${this.type}`

    if (this.vertical) {
      cn += ' flex-column'
    }

    return cn;
  }

  render() {
    return (
      <nav className={`nav${this.className()} ${this.props.className}`}>
        {this.items.map((i) =>
          <Link activeClassName="active" key={i.name} className={`nav-link${i.disabled ? ' disabled' : ''}`} to={i.to}>{i.name}</Link>
        )}
      </nav>
    )
  }
}

Navs.propTypes = {
  vertical: PropTypes.bool,
  type: PropTypes.string,
  items: PropTypes.array,
}

Navs.defaultProps = {
  vertical: false,
  type: '',
}

export default Navs
