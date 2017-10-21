import React, { Component } from 'react';
import User from './components/User';
import ProductForm from './components/ProductForm';
import Products from './components/Products';

import logo from './logo.svg';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fronted Test React</h1>
        </header>
        <User />
        <ProductForm />
        <Products />
      </div>
    );
  }
}

export default App;
