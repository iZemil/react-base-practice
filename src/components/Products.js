import React, { Component } from 'react';
import Product from './Product';

import '../assets/css/App.css';

class Products extends Component {
  render() {
    return (
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default Products;
