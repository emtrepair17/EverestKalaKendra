// src/reducer/combineReducer.js
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // add other reducers here, e.g.:
  // user: userReducer
});

export default rootReducer;
