import { GetUsername, UpdateAuthStatus, AddLoginError, LoginErrorType } from "../types";

export const ActionType = {
  GET_USERNAME: "GET_USERNAME",
  UPDATE_AUTH_STATUS: "UPDATE_AUTH_STATUS",
  ADD_LOGIN_ERROR: "ADD_LOGIN_ERROR",
} as const;

export const ActionCreator = {
  getUsername: (username: string): GetUsername => ({
    type: ActionType.GET_USERNAME,
    payload: username,
  }),
  updateAuthStatus: (authStatus: boolean): UpdateAuthStatus => ({
    type: ActionType.UPDATE_AUTH_STATUS,
    payload: authStatus,
  }),
  addLoginError: (loginError: LoginErrorType): AddLoginError => ({
    type: ActionType.ADD_LOGIN_ERROR,
    payload: loginError,
  }),
};