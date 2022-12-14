import axios from "axios";
const qs = require('qs');

import { ApiUrl, AppUrl, LoginError, RegisterError } from "../consts";
import { history } from "../screens/Root";
import { Dispatch, UserInfo } from "../types";
import { ActionCreator } from "./action";

const URL = 'http://79.143.31.216';

interface StatisticsQuery {
  order: string,
  offset: number,
  limit: number,
}

export const login = ({ username, password }: UserInfo) => {

  return (dispatch: Dispatch) => {
    axios
      .post(`${URL}${ApiUrl.LOGIN}`, qs.stringify({
        username,
        password,
      }))
      .then(response => {
        localStorage.setItem("bearer-token", response.data.access_token);
        dispatch(ActionCreator.getUsername(username));
        dispatch(ActionCreator.updateAuthStatus(true));
        dispatch(ActionCreator.addLoginError(null));
      })
      .then(() => history.push(AppUrl.SQUEEZE))
      .catch(error => {
        if (error.response.status == 400 && error.response.data.detail === "login and password do not match") {
          dispatch(ActionCreator.addLoginError(LoginError.LOGIN_MISMATCH));
        } else if (error.response.status == 422) {
          dispatch(ActionCreator.addLoginError(LoginError.VALIDATION_ERROR));
        } else {
          dispatch(ActionCreator.addLoginError(LoginError.LOGIN_ERROR));
        }
      });
  };
};

export const register = ({ username, password }: UserInfo) => {

  return (dispatch: Dispatch) => {
    axios({
      method: 'post',
      url: `${URL}${ApiUrl.REGISTER}`,
      params: {
        username,
        password,
      }
    })
    .then(response => {
      dispatch(ActionCreator.getUsername(response.data.username));
      dispatch(ActionCreator.updateAuthStatus(true));
      dispatch(ActionCreator.addRegisterError(null));
    })
    .then(() => {
      confirm('Вы успешно зарегистрировались')
    })
    .then(() => history.push(AppUrl.SQUEEZE))
    .catch(error => {
      if (error.response.status == 422) {
        dispatch(ActionCreator.addRegisterError(RegisterError.VALIDATION_ERROR));
      } else  {
        dispatch(ActionCreator.addRegisterError(RegisterError.REGISTER_ERROR));
      }
    });
  };
};

export const getShortLink = (link: string) => {

  return (dispatch: Dispatch) => {
    axios({
      method: 'post',
      url: `${URL}${ApiUrl.SQUEEZE}`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("bearer-token")}`        
      },
      params: {
        link
      }
    })
    .then(response => {
      dispatch(ActionCreator.getShortLink(`${URL}${ApiUrl.LINK}/${response.data.short}`));
      dispatch(ActionCreator.addLinkError(null));
    })
    .catch(error => {
      if (error.response.status == 422) {
        dispatch(ActionCreator.addLinkError('Ошибка валидации'));
      } else if (error.response.status == 401) {
        dispatch(ActionCreator.addLinkError('Ошибка авторизации'));
      } else {
        dispatch(ActionCreator.addLinkError('Пожалуйста, попробуйте позднее'));
      }
    });
  };
};

export const getStatistics = ({order, offset, limit}: StatisticsQuery) => {

  return (dispatch: Dispatch) => {
    axios({
      method: 'get',
      url: `${URL}${ApiUrl.STATISTICS}`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("bearer-token")}`        
      },
      params: {
        order,
        offset,
        limit
      }
    })
    .then(response => {
      dispatch(ActionCreator.getStatistics(response.data));
      dispatch(ActionCreator.addStatisticsError(null));
    })
    .catch(error => {
      if (error.response.status == 422) {
        dispatch(ActionCreator.addLinkError('Ошибка валидации'));
      } else if (error.response.status == 401) {
        dispatch(ActionCreator.addLinkError('Ошибка авторизации'));
      } else {
        dispatch(ActionCreator.addLinkError('Ошибка загрузки данных'));
      }
    });
  };
};

export const getStatisticsTotal = ({order, offset, limit}: StatisticsQuery) => {

  return (dispatch: Dispatch) => {
    axios({
      method: 'get',
      url: `${URL}${ApiUrl.STATISTICS}`,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("bearer-token")}`        
      },
      params: {
        order,
        offset,
        limit
      }
    })
    .then(response => {
      dispatch(ActionCreator.getStatisticsTotal(response.data.length));
      dispatch(ActionCreator.addStatisticsError(null));
    })
    .catch(error => {
      if (error.response.status == 422) {
        dispatch(ActionCreator.addLinkError('Ошибка валидации'));
      } else if (error.response.status == 401) {
        dispatch(ActionCreator.addLinkError('Ошибка авторизации'));
      } else {
        dispatch(ActionCreator.addLinkError('Ошибка загрузки данных'));
      }
    });
  };
};