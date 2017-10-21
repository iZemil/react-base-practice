import React from 'react';

import '../assets/css/App.css';
import img from '../assets/img/product-default.png';

const Product = ({formErrors}) => {
  
  return (
    <div className='product'>
        <img src={img} className='product__img' alt="_" />
        <div className="product__content">
          <div className="product__title">Название</div>
          <div className="product__desc">Описание</div>
          <div className="product__label">
            <div className="product__price">Цена</div>
          </div>
        </div>
    </div>
  )
}

export default Product;