import React, { Component } from 'react';
import UserPicture from './UserPicture';
import FormErrors from './FormErrors';

export default class User extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: 'Иван',
      lastName: 'Петров',
      email: 'xxxzei@mail.ru',
      password: '',
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      firstNameIsValid: true,
      lastNameIsValid: true,
      emailIsValid: true,
      passwordIsValid: true,
      formIsValid: false
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    // const type = e.target.type;
    
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
    let { firstNameIsValid, lastNameIsValid, emailIsValid, passwordIsValid, password } = this.state;
    
    return (
        <div className="user">
          <form className="user-profile-form">
            <UserPicture />
            <div className="user__data">
              <div className="form__row">
                <label className="form__label">
                  <span className="label__span">Имя:</span>
                  <input
                  className={firstNameIsValid ? "form__input form__input_valid" : "form__input form__input_invalid"}
                  type="text"
                  name="firstName"
                  value={this.state.firstName} 
                  onChange={this.handleInputChange} />
                  {firstNameIsValid ? <div className="label__mark label__mark_valid"></div> : <div className="label__mark label__mark_invalid"></div>}
                </label>
                {firstNameIsValid ? null : <small>допустимы латинские или русские буквы и тире</small> }
              </div>
              <div className="form__row">
                <label className="form__label">
                  <span className="label__span">Фамилия:</span>
                  <input
                  className={lastNameIsValid ? "form__input form__input_valid" : "form__input form__input_invalid"}
                  type="text"
                  name="lastName"
                  value={this.state.lastName} 
                  onChange={this.handleInputChange} />
                  {lastNameIsValid ? <div className="label__mark label__mark_valid"></div> : <div className="label__mark label__mark_invalid"></div>}
                </label>
                {lastNameIsValid ? null : <small>допустимы латинские или русские буквы и тире</small> }
              </div>
              <div className="form__row">
                <label className="form__label">
                  <span className="label__span">Почта:</span>
                  <input
                  className={emailIsValid ? "form__input form__input_valid" : "form__input form__input_invalid"}
                  type="email"
                  name="email"
                  value={this.state.email} 
                  onChange={this.handleInputChange} />
                  {emailIsValid ? <div className="label__mark label__mark_valid"></div> : <div className="label__mark label__mark_invalid"></div>}
                </label>
                {emailIsValid ? null : <small>некорректный email</small> }
              </div>
              <div className="form__row">
                <label className="form__label">
                  <span className="label__span">Пароль:</span>
                  <input
                  className={passwordIsValid ? "form__input form__input_valid" : "form__input form__input_invalid"}
                  type="password"
                  name="password"
                  onChange={this.handleInputChange} />
                  {passwordIsValid ? <div className="label__mark label__mark_valid"></div> : <div className="label__mark label__mark_invalid"></div>}
                </label>
                {passwordIsValid ? null : <small>некорректный пароль:</small> }
                <ul className="prompts">
                  <li className={(/^[a-z@#$%^&*!\d]+$/i).test(password) ? "success" : "warning"}>только латинские буквы и @#$%^&*!</li>
                  <li className={(/(?=.*[a-z])/).test(password) ? "success" : "warning"}>минимум 1 строчная буква</li>
                  <li className={(/(?=.*[A-Z])/).test(password) ? "success" : "warning"}>минимум 1 заглавная буква</li>
                  <li className={(/(?=.*[\d])/).test(password) ? "success" : "warning"}>минимум 1 цифра</li>
                  <li className={(password.length >= 8 && password.length <=12) ? "success" : "warning"}>от 8 до 12 знаков</li>
                </ul>
              </div>
              <button className="btn user-profile-form__submit"
              disabled={!this.state.formIsValid}
              >Обновить профиль</button>
            </div>
          </form>
          {/*<div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>*/}
        </div>
    );
  }
}
