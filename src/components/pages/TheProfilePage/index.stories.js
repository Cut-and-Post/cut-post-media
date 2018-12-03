import React from 'react'
import { storiesOf } from '@storybook/react'
import { TheProfilesPage } from 'components'

storiesOf('TheProfilesPage', module)
  .add('default', () => (
    <TheProfilesPage />
  ))
