import { combineReducers } from "redux";
import { mailNotifyReducer as mailNotify } from "./mail-reducers";

const rootReducer = combineReducers({
  mailNotify,
});

export default rootReducer;
