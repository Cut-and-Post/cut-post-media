import React from 'react'
// import PropTypes from 'prop-types'

const DEVICE_SIZES = [
  'sm',
  'md',
  'lg',
  'xl'
]

class Column extends React.Component {
  render() {
    const { className, ...props } = this.props;
    const prefix = 'col'
    const spans = [];
    const classes = [];

    DEVICE_SIZES.forEach(brkPoint => {
      let propValue = props[brkPoint];
      delete props[brkPoint];

      let span, offset;
      if (propValue != null && typeof propValue === 'object') {
        ({ span = true, offset } = propValue);
      } else {
        span = propValue;
      }

      let infix = brkPoint !== DEVICE_SIZES[0] ? `-${brkPoint}` : '';

      if (span != null)
        spans.push(
          span === true ? `${prefix}${infix}` : `${prefix}${infix}-${span}`,
        );

      if (offset != null) classes.push(`offset${infix}-${offset}`);
    });

    if (!spans.length) {
      spans.push(prefix); // plain 'col'
    }

    const classNames = spans.join(' ') + classes.join(' ') + ' ' + props.className;

    return (
      <div className={classNames}>
        {props.children}
      </div>
    );
  }
}

export default Column