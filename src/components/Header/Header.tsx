import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../store/store';
import { ActionCreator } from '../../store/action';

import MainNav from './MainNav/MainNav';
import './Header.scss';
import { AppUrl } from '../../consts';

const Header = ():JSX.Element => {
  const username = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onExitButtonClick = () => {
    dispatch(ActionCreator.getUsername(null)); // удаляем имя пользователя
    dispatch(ActionCreator.updateAuthStatus(false)); // удаляем статус аутентификации
    navigate(AppUrl.LOGIN);
  }

  return (
    <header className="header">
      <div className="header__logo">
        <img className='header__logo-image' src={require('../../img/logo.png')} alt="логотип Squeeze.me" />
      </div>

      <div className="header__nav">
        <MainNav/>
      </div>

      <div className="header__user-menu">
        <p className="header__username">{username}</p>
        <button className="header__exit-button" onClick={onExitButtonClick}>Выйти</button>
      </div>
    </header>
  );
};

export default Header;