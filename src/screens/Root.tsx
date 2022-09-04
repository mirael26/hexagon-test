import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { createHashHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import { AppUrl } from '../consts';

import ScreensLogin from './Login/Login';
import ScreensRegister from './Register/Register';
import ScreensSqueeze from './Squeeze/Squeeze';
import ScreensStatistics from './Statistics/Statistics';
import RequireAuth from '../components/RequireAuth/RequireAuth';

export const history = createHashHistory();

const ScreensRoot = () => (
  <HistoryRouter history={history}>
    <Routes>
      <Route path='/' element={<Navigate replace to={AppUrl.LOGIN}/>} />
      <Route path={AppUrl.LOGIN} element={<ScreensLogin/>} />
      <Route path={AppUrl.REGISTER} element={<ScreensRegister/>} />

      <Route
        path={AppUrl.SQUEEZE}
        element={
          <RequireAuth redirectTo={AppUrl.LOGIN}>
            <ScreensSqueeze />
          </RequireAuth>
        }
      />

      <Route
        path={AppUrl.STATISTICS}
        element={
          <RequireAuth redirectTo={AppUrl.LOGIN}>
            <ScreensStatistics />
          </RequireAuth>
        }
      />

    </Routes>
  </HistoryRouter>
);

export default ScreensRoot;