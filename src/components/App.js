import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, SolutionsPage, NotFoundPage, AboutUsPage, PortfolioPage, TheProfilesPage, ContactPage } from 'components'
import { GoogleTagManager } from 'containers'

const App = () => {
  return (
    <React.Fragment>
      <GoogleTagManager />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/solutions" component={SolutionsPage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/profiles" component={TheProfilesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  )
}

export default App
