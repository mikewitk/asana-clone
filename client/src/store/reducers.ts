import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";

export interface WebCommonRootState {
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history)
  });
