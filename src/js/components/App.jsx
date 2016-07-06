import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ul>
          <li><Link to="/" onlyActiveOnIndex activeClassName="active">Home</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;

// import React from 'react'
//
// import activeComponent from 'react-router-active-component'
// var NavItem = activeComponent('li');
//
// class App extends React.Component {
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