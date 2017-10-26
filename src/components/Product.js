import React, { Component } from 'react';

import img from '../assets/img/product-default.png';

class Product extends Component {

  render() {
    let { pName, pDesc, pPrice } = this.props.data;

    return (
      <div className='product' >
        <img src={img} className='product__img' alt="_" />
        <div className="product__content">
          <div className="product__title">{pName}</div>
          <div className="product__desc">{pDesc}</div>
          <div className="product__label">
            <div className="product__price">{ pPrice }</div>
          </div>
        </div>
    </div>
    );
  }
}

export default Product;
