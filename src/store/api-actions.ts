import axios from "axios";
import { useNavigate } from "react-router-dom";
const qs = require('qs');

import { ApiUrl, AppUrl, LoginError } from "../consts";
import { Dispatch, UserInfo } from "../types";
import { ActionCreator } from "./action";

const URL = 'http://79.143.31.216';

export const login = ({ username, password }: UserInfo) => {
  const navigate = useNavigate();

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
        
        console.log(response)
      })
      .then(() => navigate(AppUrl.SQUEEZE))
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