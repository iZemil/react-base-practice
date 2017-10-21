import React, { Component } from 'react';
import UserPicture from './UserPicture';
import FormErrors from './FormErrors';

import '../assets/css/App.css';

export default class User extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: 'Иван',
      lastName: 'Петров',
      email: 'xxxzei@mail.ru',
      password: 'qwerty',
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      firstNameIsValid: false,
      lastNameIsValid: false,
      emailIsValid: false,
      passwordIsValid: false,
      formIsValid: false
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // const type = event.target.type;
    
    this.setState({
      [name]: value
    },
    () => { this.validateField(name, value) });
  }
  
  validateField(fieldName, value) {
    let { firstNameIsValid, lastNameIsValid, emailIsValid, passwordIsValid } = this.state;
    let fieldValidationErrors = this.state.formErrors;

    switch(fieldName) {
      case 'firstName':
        firstNameIsValid = value.match(/^([a-z-]+|[а-я-]+)$/i);
        fieldValidationErrors.firstName = firstNameIsValid ? '' : '  is invalid';
        break;
      case 'lastName':
        lastNameIsValid = value.match(/^([a-z-]+|[а-я-]+)$/i);
        fieldValidationErrors.lastName = lastNameIsValid ? '' : '  is invalid';
        break;
      case 'email':
        emailIsValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailIsValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordIsValid = value.match(/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12})$/);
        fieldValidationErrors.password = passwordIsValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      firstNameIsValid: firstNameIsValid,
      lastNameIsValid: lastNameIsValid,
      emailIsValid: emailIsValid,
      passwordIsValid: passwordIsValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formIsValid: this.state.firstNameIsValid && this.state.lastNameIsValid && this.state.emailIsValid && this.state.passwordIsValid});
  }
  
  render() {
    let { firstNameIsValid, lastNameIsValid, emailIsValid, passwordIsValid } = this.state;
    return (
        <div className="user">
          <form className="user-profile-form">
            <UserPicture />
            <div className="user__data">
              <div className="user__data-row">
                <label className="form__label">
                  <span className="label__span">Имя:</span>
                  <input
                  className={firstNameIsValid ? "form__input form__input_valid" : "form__input form__input_invalid"}
                  type="text"
                  name="firstName"
                  value={this.state.firstName} 
                  onChange={this.handleInputChange} />
                </label>
              </div>
              <div className="user__data-row">
                <label className="form__label">
                  <span className="label__span">Фамилия:</span>
                  <input
                  className={lastNameIsValid ? "form__input form__input_valid" : "form__input form__input_invalid"}
                  type="text"
                  name="lastName"
                  value={this.state.lastName} 
                  onChange={this.handleInputChange} />
                </label>
              </div>
              <div className="user__data-row">
                <label className="form__label">
                  <span className="label__span">Почта:</span>
                  <input
                  className={emailIsValid ? "form__input form__input_valid" : "form__input form__input_invalid"}
                  type="email"
                  name="email"
                  value={this.state.email} 
                  onChange={this.handleInputChange} />
                </label>
              </div>
              <div className="user__data-row">
                <label className="form__label">
                  <span className="label__span">Пароль:</span>
                  <input
                  className={passwordIsValid ? "form__input form__input_valid" : "form__input form__input_invalid"}
                  type="password"
                  name="password"
                  onChange={this.handleInputChange} />
                </label>
              </div>
              <button className="btn user-profile-form__submit"
              disabled={!this.state.formIsValid}
              >Обновить профиль</button>
            </div>
          </form>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
        </div>
    );
  }
}
