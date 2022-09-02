import { GetUsername, UpdateAuthStatus, UpdateLoginError } from "../types";

export const ActionType = {
  GET_USERNAME: "GET_USERNAME",
  UPDATE_AUTH_STATUS: "UPDATE_AUTH_STATUS",
  UPDATE_LOGIN_ERROR: "UPDATE_LOGIN_ERROR",
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
  updateLoginError: (loginError: string): UpdateLoginError => ({
    type: ActionType.UPDATE_LOGIN_ERROR,
    payload: loginError,
  }),
};