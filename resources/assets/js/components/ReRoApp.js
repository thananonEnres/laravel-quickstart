import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/reactrouter'>Home</Link></li>
            <li><Link to='/roster'>Roster</Link></li>
            <li><Link to='/schedule'>schedule</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

class ReRoApp extends Component {
  render() {
    return (<p>Hello</p>)
  }
}

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/reactrouter' component={Home}/>
      <Route exact path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome to the Tornadoes Website!</h1>
//       </div>
//     )
//   }
// }

// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li>a</li>
//         <li>b</li>
//         <li>c</li>
//       </ul>
//     </nav>
//   </header>
// )

// class Header extends Component {
//   render() {
//     return (
//       <header>
//         <nav>
//           <ul>
//             <li>a</li>
//             <li>b</li>
//             <li>c</li>
//           </ul>
//         </nav>
//       </header>
//     )
//   }
// }

export default ReRoApp;

if (document.getElementById('root')) {
    ReactDOM.render((
      <BrowserRouter>
        <div>
          <Header />
          <Main />
        </div>
      </BrowserRouter>
    ), document.getElementById('root'));
}

