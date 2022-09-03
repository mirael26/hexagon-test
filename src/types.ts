import { Axios } from "axios";
import { CombinedState } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ActionType } from "./store/action";
import { LoginError, RegisterError } from "./consts";

// data

export interface UserInfo {
  username: string,
  password: string,
}

export type LoginErrorType = keyof typeof LoginError;
export type RegisterErrorType = keyof typeof RegisterError;

// reducers

export interface UserState {
  authStatus: boolean,
  loginError: LoginErrorType,
  registerError: RegisterErrorType,
  username: string,
};

export interface DataState {
  shortLink: string,
  linkError: string,
};

export type Dispatch = ThunkDispatch<CombinedState<{
  user: UserState;
}>, Axios, Action>;

// actions

export interface GetUsername {
  type: typeof ActionType.GET_USERNAME,
  payload: string,
}

export interface UpdateAuthStatus {
  type: typeof ActionType.UPDATE_AUTH_STATUS,
  payload: boolean,
}

export interface AddLoginError {
  type: typeof ActionType.ADD_LOGIN_ERROR,
  payload: LoginErrorType,
}

export interface AddRegisterError {
  type: typeof ActionType.ADD_REGISTER_ERROR,
  payload: RegisterErrorType,
}

export interface GetShortLink {
  type: typeof ActionType.GET_SHORT_LINK,
  payload: string,
}

export interface AddLinkError {
  type: typeof ActionType.ADD_LINK_ERROR,
  payload: string,
}

export type UserAction = GetUsername | UpdateAuthStatus | AddLoginError | AddRegisterError;
export type DataAction = GetShortLink | AddLinkError;
export type Action = UserAction | DataAction;