import React, { Component } from 'react';
import ProductForm from './ProductForm';
import Product from './Product';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: [
        'pPrice',
        'pDiscount'
      ],
      pList: [
        {
          pName: 'Пример товара №1',
          pDesc: 'Некоторое описание №1',
          pPrice: 100,
          pDiscount: 10,
          pPhoto: ''
        },
        {
          pName: 'Пример товара №2',
          pDesc: 'Некоторое описание №2',
          pPrice: 250,
          pDiscount: 0,
          pPhoto: ''
        },
        {
          pName: 'Пример товара №3',
          pDesc: 'Некоторое описание №33',
          pPrice: 1250,
          pDiscount: 35,
          pPhoto: ''
        }
      ]
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleChange(e) {
    this.setState({sortBy: e.target.value});
  }

  handleAddProduct(name, desc, price, discount) {
    let netPrice = price * (1 - discount / 100);

    this.setState({
      pList: [
        {
          pName: name,
          pDesc: desc,
          pPrice: netPrice,
        },
        ...this.state.pList
      ]
    });
  }

  render() {
    return (
      <div className="page__products">
        <ProductForm addProduct={this.handleAddProduct} />
        <div className="container">
          <label>
            <span>Сортировать по:</span>
            <select value={this.state.sortBy[0]} onChange={this.handleChange}>
              <option value="0">Цена по возрастанию</option>
              <option value="-1">Цена по убыванию</option>
              <option value="1">По скидке</option>
            </select>
          </label>
        </div>
        <div className="products">
          {
            this.state.pList.map((product, idx) => {
              return <Product key={idx} data={product} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Products;
