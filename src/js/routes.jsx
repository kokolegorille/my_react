import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './components/app';
import HomePage from './components/home_page';
import AboutPage from './components/about_page';
import NoMatchPage from './components/no_match_page';

export default (
  <div className="container">
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="*" component={NoMatchPage} />
      </Switch>
    </App>
  </div>
);

// import React from 'react';
// import { Route, IndexRoute } from 'react-router';
//
// import App from './components/app';
// import HomePage from './components/home_page';
// import AboutPage from './components/about_page';
// import NoMatchPage from './components/no_match_page';
//
// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={HomePage} />
//
//     <Route path="about" component={AboutPage} />
//     <Route path="*" component={NoMatchPage} />
//   </Route>
// );