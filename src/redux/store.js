import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authentication from "./reducer";

const reducers = combineReducers({
  auth: authentication,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
