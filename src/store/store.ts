import { createStore, applyMiddleware, Action } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import rootReducer, { RootReducer } from "./reducers";

export type ThunkResult<R> = ThunkAction<R, RootReducer, {}, Action>;

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
