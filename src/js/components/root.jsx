import React, { PropTypes } from 'react';
import { Router, browserHistory } from 'react-router';

import routes from '../routes';

const Root = () => {
  const history = browserHistory;

  return (
  <Router history={history}>{routes}</Router>
);}

export default Root;
