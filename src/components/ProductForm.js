import React, { Component } from 'react';
import ProductPicture from './ProductPicture';

import '../assets/css/App.css';

export default class ProductForm extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }
  
  
  render() {
    return (
        <form className="product-form">
          <ProductPicture />
          <div className="product-form__content">
            <div>Название</div>
            <div>Описание</div>
            <div>Цена</div>
            <div>Скидка</div>
            <button type="submit">Добавить товар</button>
          </div>
        </form>
    );
  }
}
