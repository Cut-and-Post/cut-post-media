import React from 'react'
import { storiesOf } from '@storybook/react'
import { PortfolioPage } from 'components'

storiesOf('PortfolioPage', module)
  .add('default', () => (
    <PortfolioPage />
  ))
