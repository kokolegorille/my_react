import React from 'react'
import { IndexLink, Link } from 'react-router'

export default class App extends React.Component { 
  render() {
    return (
      <div className="container">
        <ul>
          <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
          <li><Link activeClassName="active" to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    ); 
  }
}