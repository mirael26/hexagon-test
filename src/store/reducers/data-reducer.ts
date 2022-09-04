import { DataAction, DataState } from "../../types";
import { ActionType } from "../action";

const initialState: DataState = {
  shortLink: null,
  linkError: null,
  statistics: null,
  statisticsTotal: null,
  statisticsError: null,
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case ActionType.GET_SHORT_LINK:
      return {...state, shortLink: action.payload};
    case ActionType.ADD_LINK_ERROR:
      return {...state, linkError: action.payload};
    case ActionType.GET_STATISTICS:
      return {...state, statistics: action.payload};
      case ActionType.GET_STATISTICS_TOTAL:
        return {...state, statisticsTotal: action.payload};
    case ActionType.ADD_STATISTICS_ERROR:
      return {...state, statisticsError: action.payload};
    default:
      return state;
  }
};