import { DataAction, DataState } from "../../types";
import { ActionType } from "../action";

const initialState: DataState = {
  shortLink: null,
  linkError: null,
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case ActionType.GET_SHORT_LINK:
      return {...state, shortLink: action.payload};
    case ActionType.ADD_LINK_ERROR:
      return {...state, linkError: action.payload};
    default:
      return state;
  }
};