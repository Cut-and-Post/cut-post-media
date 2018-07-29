import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HomePage, SolutionsPage, NotFoundPage, AboutUsPage, PortfolioPage, TheProfilesPage, ContactPage } from 'components'
import { GoogleTagManager } from 'containers'

const App = () => {
  return (
    <React.Fragment>
      <GoogleTagManager />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/solutions" component={SolutionsPage} />
        <Redirect exact from='/agency' to='/agency/portfolio' />
        <Route
          path="/agency"
          render={({ match: { url } }) => (
            <React.Fragment>
              <Route path={`${url}/portfolio`} component={PortfolioPage} />
              <Route path={`${url}/about-us`} component={AboutUsPage} />
            </React.Fragment>
          )}
        />

        <Route path="/profiles" component={TheProfilesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  )
}

export default App
