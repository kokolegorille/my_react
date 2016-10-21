import React from 'react';

import activeComponent from 'react-router-active-component';
var NavItem = activeComponent('li');

const NavBar = () => {
  return (
    <ul>
      <NavItem to="/" onlyActiveOnIndex>Home</NavItem>
      <NavItem to="/about">About</NavItem>
    </ul>
  );
}

export default NavBar;