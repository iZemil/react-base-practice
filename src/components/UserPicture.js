import React, { Component } from 'react';

import thumbnail from '../assets/img/thumbnail.gif';

export default class UserPicture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    console.log('name:', file.name, '\n',
    'type:', file.type, '\n',
    'size:', file.size);

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    if (!allowedExtensions.exec(file.name)) {
      alert('Недопустимый формат файла');
    } else if (file.size === 0 || file.size > 2000000) {
      alert('Размер файла должен быть не более 2Мб');
    } else {
      reader.readAsDataURL(file)
    }
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} className="user__thumbnail-img" alt="user avatar" />);
    } else {
      $imagePreview = <img src={thumbnail} className="user__thumbnail-img" alt="user avatar" />
    }

    return (
      <div className="user__picture">
        <div className="user__thumbnail">
          {$imagePreview}
        </div>
        <label className="user__picture-btn btn">
          <span>Загрузить фото</span>
          <input type="file" className="user__picture-input"
          onChange={this.handleImageChange}
           />
        </label>
      </div>
    );
  }
}
