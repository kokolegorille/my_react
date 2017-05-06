import React, { PropTypes } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from '../routes';

const Root = () => {
  return (
  <Router>
    {routes}
  </Router>
);}

export default Root;

// import React, { PropTypes } from 'react';
// import { Router, browserHistory } from 'react-router';
//
// import routes from '../routes';
//
// const Root = () => {
//   const history = browserHistory;
//
//   return (
//   <Router history={history}>{routes}</Router>
// );}
//
// export default Root;
