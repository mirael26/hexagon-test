import { Axios } from "axios";
import { CombinedState } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ActionType } from "./store/action";

// data



// reducers

export interface UserState {
  authStatus: boolean,
  loginError: string,
  username: string,
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

export interface UpdateLoginError {
  type: typeof ActionType.UPDATE_LOGIN_ERROR,
  payload: string,
}

export type UserAction = GetUsername | UpdateAuthStatus | UpdateLoginError;
export type Action = UserAction;