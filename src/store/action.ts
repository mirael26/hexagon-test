import { GetUsername, UpdateAuthStatus, AddLoginError, LoginErrorType, RegisterErrorType, AddRegisterError, GetShortLink, AddLinkError, LinkInfo, GetStatistics, AddStatisticsError, GetStatisticsTotal } from "../types";

export const ActionType = {
  GET_USERNAME: "GET_USERNAME",
  UPDATE_AUTH_STATUS: "UPDATE_AUTH_STATUS",
  ADD_LOGIN_ERROR: "ADD_LOGIN_ERROR",
  ADD_REGISTER_ERROR: "ADD_REGISTER_ERROR",
  GET_SHORT_LINK: "GET_SHORT_LINK",
  ADD_LINK_ERROR: "ADD_LINK_ERROR",
  GET_STATISTICS: "GET_STATISTICS",
  GET_STATISTICS_TOTAL: "GET_STATISTICS_TOTAL",
  ADD_STATISTICS_ERROR: "ADD_STATISTICS_ERROR",
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
  addRegisterError: (registerError: RegisterErrorType): AddRegisterError => ({
    type: ActionType.ADD_REGISTER_ERROR,
    payload: registerError,
  }),
  getShortLink: (shortLink: string): GetShortLink => ({
    type: ActionType.GET_SHORT_LINK,
    payload: shortLink,
  }),
  addLinkError: (linkError: string): AddLinkError => ({
    type: ActionType.ADD_LINK_ERROR,
    payload: linkError,
  }),
  getStatistics: (statistics: Array<LinkInfo>): GetStatistics => ({
    type: ActionType.GET_STATISTICS,
    payload: statistics,
  }),
  getStatisticsTotal: (statisticsTotal: number): GetStatisticsTotal => ({
    type: ActionType.GET_STATISTICS_TOTAL,
    payload: statisticsTotal,
  }),
  addStatisticsError: (statisticsError: string): AddStatisticsError => ({
    type: ActionType.ADD_STATISTICS_ERROR,
    payload: statisticsError,
  }),
};