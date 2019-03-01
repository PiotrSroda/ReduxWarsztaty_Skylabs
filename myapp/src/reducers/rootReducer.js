import { combineReducers } from "redux";

import { commentsReducer } from "./commentsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  comments: commentsReducer,
  users: userReducer
});