import { UserAction, UserState } from "../../types";
import { ActionType } from "../action";

const initialState: UserState = {
  username: null,
  authStatus: false,
  loginError: null,
  registerError: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionType.GET_USERNAME:
      return {...state, username: action.payload};
    case ActionType.UPDATE_AUTH_STATUS:
      return {...state, authStatus: action.payload};
    case ActionType.ADD_LOGIN_ERROR:
      return {...state, loginError: action.payload};
    case ActionType.ADD_REGISTER_ERROR:
      return {...state, registerError: action.payload};
    default:
      return state;
  }
};