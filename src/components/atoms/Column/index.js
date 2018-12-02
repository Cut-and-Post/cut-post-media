import React from 'react'
import PropTypes from 'prop-types'

const DEVICE_SIZES = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
]

const columnProps = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.number]),
  }),
])

const propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: PropTypes.string,
  children: PropTypes.node,
}

const Column = ({
  className,
  children,
  ...props
}) => {
  const prefix = 'col'
  const spans = []
  const classes = []
  let classNames = ''

  DEVICE_SIZES.forEach(brkPoint => {
    const propValue = props[brkPoint]
    delete props[brkPoint]

    let span
    let offset

    if (propValue != null && typeof propValue === 'object') {
      ({ span = true, offset } = propValue)
    } else {
      span = propValue
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : ''

    if (span != null) {
      spans.push(
        span === true ? `${prefix}${infix}` : `${prefix}${infix}-${span}`,
      )
    }
    
    if (offset != null) classes.push(`offset${infix}-${offset}`)
  })

  if (!spans.length) {
    spans.push(prefix) // plain 'col'
  }

  classNames = spans.join(' ') + classes.join(' ')

  if (className) {
    classNames += ` ${className}`
  }

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

Column.propTypes = propTypes

export default Column