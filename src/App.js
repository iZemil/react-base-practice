import React, { Component } from 'react';
import Task from './components/Task';
import User from './components/User';
import Products from './components/Products';
import { NavLink, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React base practice</h1>
          <ul className="menu">
            <li><NavLink activeClassName='is-active' to='/'>Task</NavLink></li>
            <li><NavLink activeClassName='is-active' to='/user'>User</NavLink></li>
            <li><NavLink activeClassName='is-active' to='/products'>Products</NavLink></li>
          </ul>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Task}/>
            <Route path='/user' component={User}/>
            <Route path='/products' component={Products}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
