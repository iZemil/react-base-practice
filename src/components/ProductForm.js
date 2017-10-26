import React, { Component } from 'react';
import ProductPicture from './ProductPicture';

export default class ProductForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pName: '',
      pDesc: '',
      pPrice: '',
      pDiscount: '',
      pPhoto: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }
  
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    if (value.length > 255) {
      e.target.style.borderColor = 'red';
      return false
    } else {
      e.target.style.borderColor = '';
    }

    this.setState({
      [name]: value
    });

  }

  handleAddProduct(e) {
    e.preventDefault();

    const { pName, pDesc, pPrice, pDiscount } = this.state;

    this.props.addProduct(pName, pDesc, pPrice, pDiscount);
    this.setState({
      pName: '',
      pDesc: '',
      pPrice: '',
      pDiscount: '',
      pPhoto: ''
    })
  }
  
  render() {
    return (
      <form className="product-form"
      onSubmit={this.handleAddProduct} >
        <ProductPicture />
        <div className="product-form__content">
          <div className="form__row">
            <input type="text" autoComplete="off"
            placeholder="Название"
            name="pName"
            value={this.state.pName}
            onChange={this.handleInputChange} />
          </div>
          <div className="form__row">
            <input type="text" autoComplete="off"
            placeholder="Описание"
            name="pDesc"
            value={this.state.pDesc}
            onChange={this.handleInputChange} />
          </div>
          <div className="form__row">
            <input type="text" autoComplete="off"
            placeholder="Цена"
            name="pPrice"
            value={this.state.pPrice}
            onChange={this.handleInputChange} />
          </div>
          <div className="form__row">
            <input type="text" autoComplete="off"
            placeholder="Скидка"
            name="pDiscount"
            value={this.state.pDiscount}
            onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn">Добавить товар</button>
        </div>
      </form>
    );
  }
}
