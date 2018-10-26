import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => (
    <Link href="https://github.com/diegohaz/arc">ARc repository</Link>
  ))
