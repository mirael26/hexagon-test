import * as React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AppUrl } from '../consts';

import ScreensLogin from './Login/Login';
import ScreensRegister from './Register/Register';
import ScreensSqueeze from './Squeeze/Squeeze';
import ScreensStatistic from './Statistic/Statistic';

const ScreensRoot = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Navigate replace to={AppUrl.LOGIN}/>} />
      <Route path={AppUrl.LOGIN} element={<ScreensLogin/>} />
      <Route path={AppUrl.REGISTER} element={<ScreensRegister/>} />
      <Route path={AppUrl.SQUEEZE} element={<ScreensSqueeze/>} />
      <Route path={AppUrl.STATISTIC} element={<ScreensStatistic/>} />
    </Routes>
  </HashRouter>
);

export default ScreensRoot;