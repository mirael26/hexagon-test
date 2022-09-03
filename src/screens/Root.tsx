import * as React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import { AppUrl } from '../consts';

import ScreensLogin from './Login/Login';
import ScreensRegister from './Register/Register';
import ScreensSqueeze from './Squeeze/Squeeze';
import ScreensStatistics from './Statistics/Statistics';

export const history = createBrowserHistory();

const ScreensRoot = () => (
  <HistoryRouter history={history}>
    <Routes>
      <Route path='/' element={<Navigate replace to={AppUrl.LOGIN}/>} />
      <Route path={AppUrl.LOGIN} element={<ScreensLogin/>} />
      <Route path={AppUrl.REGISTER} element={<ScreensRegister/>} />
      <Route path={AppUrl.SQUEEZE} element={<ScreensSqueeze/>} />
      <Route path={AppUrl.STATISTICS} element={<ScreensStatistics/>} />
    </Routes>
  </HistoryRouter>
);

export default ScreensRoot;