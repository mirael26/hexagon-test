import axios from "axios";
const qs = require('qs');

import { ApiUrl, AppUrl, LoginError, RegisterError } from "../consts";
import { history } from "../screens/Root";
import { Dispatch, UserInfo } from "../types";
import { ActionCreator } from "./action";

const URL = 'http://79.143.31.216';

export const login = ({ username, password }: UserInfo) => {

  return (dispatch: Dispatch) => {
    axios
      .post(`${URL}${ApiUrl.LOGIN}`, qs.stringify({
        username,
        password,
      }))
      .then(response => {
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
          dispatch(ActionCreator.addLoginError('LOGIN_ERROR'));
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
      } else {
        dispatch(ActionCreator.addRegisterError('REGISTER_ERROR'));
      }
    });
  };
};