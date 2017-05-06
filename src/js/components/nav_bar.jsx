import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </nav>
)

export default NavBar;

// import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
//
// const NavBar = () => (
//   <nav>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//     </ul>
//   </nav>
// )
//
// export default NavBar;

// import React from 'react';
//
// import activeComponent from 'react-router-active-component';
// var NavItem = activeComponent('li');
//
// const NavBar = () => {
//   return (
//     <ul>
//       <NavItem to="/" onlyActiveOnIndex>Home</NavItem>
//       <NavItem to="/about">About</NavItem>
//     </ul>
//   );
// }
//
// export default NavBar;