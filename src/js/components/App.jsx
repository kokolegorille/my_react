import React, { Component } from 'react';

import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react'
//
// import activeComponent from 'react-router-active-component'
// var NavItem = activeComponent('li');
//
// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <ul>
//           <NavItem to="/" onlyActiveOnIndex>Home</NavItem>
//           <NavItem to="/about">About</NavItem>
//         </ul>
//         {this.props.children}
//       </div>
//     );
//   }
// }
//
// export default App;