import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AppUrl } from '../../../consts';
import './MainNav.scss';

const MainNav = ():JSX.Element => {
  const path = useLocation().pathname;

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          {path === AppUrl.SQUEEZE
            ? <span className="main-nav__link main-nav__link--disabled">Сокращение ссылок</span>
            : <Link to={AppUrl.STATISTICS} className="main-nav__link">Сокращение ссылок</Link>
          }
        </li>

        <li className="main-nav__item">
        {path === AppUrl.STATISTICS
          ? <span className="main-nav__link main-nav__link--disabled">Статистика</span>
          : <Link to={AppUrl.STATISTICS} className="main-nav__link">Статистика</Link>
        }
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;