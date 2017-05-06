import React from 'react';
import { NavLink } from 'react-router-dom';

const NoMatchPage = () => (
  <div>
		<h1>Page Not Found</h1>
		<p>Whoops! Sorry, there is nothing to see here.</p>
		<p><NavLink to="/">Back to Home</NavLink></p>
  </div>  
);

export default NoMatchPage;

// import React from 'react';
// import { Link } from 'react-router';
//
// const NoMatchPage = () => (
//   <div>
//     <h1>Page Not Found</h1>
//     <p>Whoops! Sorry, there is nothing to see here.</p>
//     <p><Link to="/">Back to Home</Link></p>
//   </div>
// );
//
// export default NoMatchPage;