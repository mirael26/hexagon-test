import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppUrl } from '../../consts';
import { login } from '../../store/api-actions';
import { RootState } from '../../store/store';

import TextInput from '../UI/TextInput/TextInput';
import Button from '../UI/Button/Button';
import './Login.scss';

const ErrorMessages = {
  LOGIN_ERROR: 'Произошла какая-то ошибка, попробуйте еще раз',
  LOGIN_MISMATCH: 'Логин и пароль несоответствуют друг другу',
  VALIDATION_ERROR: 'Ошибка валидации',
};

const Login = ():JSX.Element => {
  const [formValue, setFormValue] = useState({username: '', password: ''});

  const loginError = useSelector((state: RootState) => state.user.loginError)
  const dispatch = useDispatch();

  const changeInputValue = (evt: React.SyntheticEvent, name: string) => {
    const value = (evt.target as HTMLInputElement).value;
    setFormValue({...formValue, [name]: value});
  }

  const onFormSubmit = () => {
    dispatch(login(formValue));
  }

  return (
    <div className="login">
      <h1 className="login__title">Авторизация</h1>
      <form className="login__form" onSubmit={onFormSubmit}>
        <TextInput placeholder='Имя пользователя' value={formValue.username} onChange={(evt) => changeInputValue(evt, 'username')} required/>
        <TextInput placeholder='Пароль' type='password' value={formValue.password} onChange={(evt) => changeInputValue(evt, 'password')} required/>

        {loginError ? <p className="login__error">{ErrorMessages[loginError]}</p> : null}

        <div className="login__buttons">
          <Button type='submit' text='Войти' onClick={null}/>
          <Link to={AppUrl.REGISTER} className="login__button">Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;