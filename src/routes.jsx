import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import NoMatchPage from './components/NoMatchPage'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
    
      <Route path="about" component={AboutPage} />
      <Route path="*" component={NoMatchPage} />
    </Route>
  </Router>
);