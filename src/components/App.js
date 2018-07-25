import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, SamplePage, NotFoundPage } from 'components'
import { GoogleTagManager } from 'containers'

const App = () => {
  return ([
      <GoogleTagManager key="0" />,
      <Switch key="1">,
        <Route path="/" component={HomePage} exact />
        <Route path="/sample-page" component={SamplePage} />
        <Route component={NotFoundPage} />
      </Switch>
  ])
}

export default App
