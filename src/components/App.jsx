import React from 'react'
import { IndexLink, Link } from 'react-router'

import activeComponent from 'react-router-active-component'
var NavItem = activeComponent('li');

export default class App extends React.Component { 
  render() {
    return (
      <div className="container">
        <ul>
          <NavItem to="/" onlyActiveOnIndex>Home</NavItem>
          <NavItem to="/about">About</NavItem>
        </ul>
        {this.props.children}
      </div>
    ); 
  }
}