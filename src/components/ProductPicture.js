import React, { Component } from 'react';

import thumbnail from '../assets/img/product-default.png';
import '../assets/css/App.css';

export default class ProductPicture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className="product__thumbnail-img" alt="product avatar" />);
    } else {
      $imagePreview = <img src={thumbnail} className="product__thumbnail-img" alt="product avatar" />
    }

    return (
      <div className="product__picture">
        <div className="product__thumbnail">
          {$imagePreview}
        </div>
        <label className="product__picture-btn btn">
          <input type="file" className="product__picture-input"
          id="input"
          onChange={this._handleImageChange}
           />
        </label>
      </div>
    );
  }
}
