import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppUrl } from '../../consts';

import TextInput from '../UI/TextInput/TextInput';
import Button from '../UI/Button/Button';
import './Login.scss';


const Login = ():JSX.Element => {

  return (
    <div className="login">
      <h1 className="login__title">Авторизация</h1>
      <form className="login__form">
        <TextInput placeholder='Имя пользователя'/>
        <TextInput placeholder='Пароль' type='password'/>

        <p className="login__error">Ошибочная ошибка</p>

        <div className="login__buttons">
          <Button type='submit' text='Войти' onClick={null}/>
          <Link to={AppUrl.REGISTER} className="login__button">Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
